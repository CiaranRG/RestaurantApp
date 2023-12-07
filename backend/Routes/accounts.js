// Importing Necessary Files
import express from 'express';
import { registerSchema, loginSchema } from '../models/accountsModel.js';
import jwt from 'jsonwebtoken';
import db from '../utils/databaseConnection.js'

const router = express.Router();

// Post route for creating accounts
router.post('/', async (req, res) => {
    const newAccount = req.body
    try {
        // Check for existence of the error property within this validation
        const { error } = registerSchema.validate(newAccount)
        // Throw an error if validation fails (Error will be truthy) so we can be sent to the catch section or else it will just carry on and ignore this section
        if (error){
            throw new Error('Validation error')
        }
        const result = await db.query(
            // We are returning the id here so we can attach it to the json web token to send back
            'INSERT INTO user_accounts (username, email, password) VALUES ($1, $2, $3) RETURNING id',
            [
                newAccount.username,
                newAccount.email,
                newAccount.password
            ]
        )
        res.status(201).json({message: 'Data Submitted'});
    } catch (err) {
        if (err.message === 'Validation error'){
            console.error(err);
            res.status(400).json({ error: "Validation error", details: err.details, message: 'This is a validation error'});
        } else {
            console.error(err);
            res.status(500).json({ error: "Database error" });
        }
    }
})

// Post route for logging in accounts
router.post('/login', async (req, res) => {
    const loginAccount = req.body
    try {
        console.log(loginAccount)
        // Check for existence of the error property within this validation
        const { error } = loginSchema.validate(loginAccount)
        
        if (error){
            throw new Error('Validation error')
        }

        // Query the database for the users information
        const result = await db.query('SELECT * FROM user_accounts WHERE username = $1 AND password = $2', [
            loginAccount.username,
            loginAccount.password
        ]);
        if (result.rows.length > 0) {
            const userId = result.rows[0].id
            // Creating the json web token that has the userId in it, also pulling the secret from our .env file and setting it to expire in 2 weeks
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '2w' });
            // Passing the token we created into here so we can then add the cookie to the response headers
            res.cookie('jwt', token, {
                // Setting httpOnly to true so it can help prevent XSS attacks through javascript interaction
                httpOnly: true,
                // When we start the app or when its hosting on a site the environment will be set to production which will make the secure option true, which allows only https requests
                secure: process.env.NODE_ENV === 'production',
                // 
                sameSite: 'Strict', // Adjust according to your needs
                maxAge: 14 * 24 * 60 * 60 * 1000, // 2 weeks in milliseconds
                path: '/',
            });
            res.status(201).json({message: 'User Was Found', token })
        } else {
            console.log('We could not find that user')
            throw new Error("Invalid Credentials")
        }

    } catch (err) {
        // CUsing instanceof to check if it was a database error to 
        if (err.message === 'Invalid Credentials') {
            res.status(401).json({ error: 'Invalid Credentials', details: err.details});
        } else {
            // Giving a generic error in any other case currently
            console.log(err)
            console.log(err.message)
            res.status(401).json({ error: 'Unknown Error'});
        }
    }
})

// exporting the whole router as accountRoutes to use in the main file
export { router as accountRoutes }