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
        const userId = result.rows[0].id
        // Creating the json web token, also pulling the secret from our .env file and setting it to expire in 2 weeks
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '2w' });
        res.status(201).json({message: 'Data Submitted', jwt: token });
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
app.post('/login', async (req, res) => {
    const loginAccount = req.body
    console.log(loginAccount)
    try {
        // Check for existence of the error property within this validation
        const { error } = loginSchema.validate(loginAccount)
        if (error){
            throw new Error('Validation error')
        }
        const result = await db.query(`SELECT `)
    } catch (error) {


    }
})

// exporting the whole router as accountRoutes to use in the main file
export { router as accountRoutes }