// Importing Necessary Files
import express from 'express';
import { registerSchema, loginSchema } from '../models/accountsModel.js';
import jwt from 'jsonwebtoken';
import db from '../utils/databaseConnection.js'
import { config } from 'dotenv';
import verifyToken from '../utils/verifyToken.js'

// Importing bcrypt to hash password and setting up our salt rounds
import bcrypt from 'bcryptjs'
const saltRounds = 14;

const router = express.Router();

// Calling config to have the .env work
config()

// Restructure this to add the verifyToken middleware
router.post('/isLoggedIn', async (req, res) => {
    // Grabbing the cookie from the browser
    const jwtCookie = req.cookies.jwt;
    // Using this to check if there was anything in the jwtCookie and if there is nothing it means there is no cookie which signifies there is no logged in user.
    if (!jwtCookie){
        // Returning this if there is no cookie
        return res.json({isLoggedIn: false})
    }
    try {
        // Decoding the JWT using verify and passing in the token then the secret we used to create the tokens
        const decodedJwt = jwt.verify(jwtCookie, process.env.JWT_SECRET)
        if (!decodedJwt.userId){
            return res.json({isLoggedIn: false})
        }
        const result = await db.query('SELECT id FROM user_accounts WHERE id = $1', [decodedJwt.userId])
        if (result.rows.length === 0 ){
            return res.json({isLoggedIn: false})
        }
        res.json({isLoggedIn: true})
    } catch (err) {
        console.log('An error has occurred')
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Post route for logging in accounts
router.post('/login', async (req, res) => {
    const loginAccount = req.body
    try {
        // Check for existence of the error property within this validation
        const { error } = loginSchema.validate(loginAccount)
        
        if (error){
            throw new Error('Validation Error')
        }
        // Checking for the persons username in the database
        const result = await db.query('SELECT * FROM user_accounts WHERE username = $1', [loginAccount.username])
        // Query the database for the users information
        if (result.rows.length > 0) {
            // Checking that the hashed password in the database matches the hashed password combo the user is submitting
            const passwordValidation = await bcrypt.compare(loginAccount.password, result.rows[0].password);
            // Checking the password is valid using bcrypt and if its not we throw a new error to get into the catch block
            if (passwordValidation){
                const userId = result.rows[0].id
                // Creating the json web token that has the userId in it, also pulling the secret from our .env file and setting it to expire in 2 weeks
                const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '2w' });
                // Passing the token we created into here so we can then add the cookie to the response headers, js-cookie is front end only when dealing with cookies
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
                throw new Error('Invalid user credentials')
            }
        } else {
            console.log('We could not find that user')
            throw new Error("Invalid Credentials")
        }

    } catch (err) {
        console.log(err)
        // Using instanceof to check if it was a database error to 
        if (err.message === 'Invalid Credentials') {
            res.status(401).json({ error: 'Invalid Credentials', details: err.details});
        } else if (err.message === 'Validation Error'){
            res.status(400).json({ error: 'Validation Error', details: err.details});
        } else {
            res.status(401).json({ error: 'Unknown Error'});
        }
    }
})

router.post('/logout', async (req, res) => {
    const jwtCookie = req.cookies.jwt;
    // Using this to clear the cookie on the clients side
    res.clearCookie('jwt', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'Strict', path: '/' });
    // Send a response to the client
    res.status(200).json({ message: 'Logout successful' });
})

// Post route for creating accounts
router.post('/', async (req, res) => {
    const newAccount = req.body
    try {
        // Check for existence of the error property within this validation
        const { error } = registerSchema.validate(newAccount)
        // Throw an error if validation fails (Error will be truthy) so we can be sent to the catch section or else it will just carry on and ignore this section
        if (error){
            throw new Error('Validation Error')
        }
        bcrypt.hash(newAccount.password, saltRounds, async function(err, hash){
            if (err){
                res.status(500).json({error: 'Error hashing password!'})
            }
            console.log(hash)
            const result = await db.query(
                // We are returning the id here so we can attach it to the json web token to send back
                'INSERT INTO user_accounts (username, email, password) VALUES ($1, $2, $3) RETURNING id',
                [
                    newAccount.username,
                    newAccount.email,
                    hash
                ]
            )
        })
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

// exporting the whole router as accountRoutes to use in the main file
export { router as accountRoutes }