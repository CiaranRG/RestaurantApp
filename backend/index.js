import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';

import db from './utils/databaseConnection.js'

// Importing JWT
import jwt from 'jsonwebtoken';
const { sign, verify } = jwt;

// Calling this to have its side effects happen (reading the .env and parsing the data)
config();

const app = express()
const PORT = 5000

// Importing our routes
import { accountRoutes } from './Routes/accounts.js'

// Telling my app to use this file for requests to /api/accounts
app.use('/api/accounts', accountRoutes);

// Importing joi schemas
import { registerSchema } from './models/accountsModel.js';
import { loginSchema } from './models/accountsModel.js';

// Add options later to limit who can send requests
app.use(cors());
app.use(express.json());

// Using this to send information to the react frontend when we get this request
app.get('/api', (req, res) => {
    res.json({message: `Hello from the backend on Port ${PORT}`})
})

app.get('/api/menu', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM menuItems')
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({error: 'An error has occurred'})
    }
})

// Create a new reservation
app.post('/api/reservations', async (req, res) => {
    const newReservation = req.body;
    console.log(newReservation)
    try {
        // Sending a query to the database 
        const result = await db.query(
            // Inserting the data into the database in order
            "INSERT INTO reservations (first_name, last_name, email, phone_number, booking_date, booking_time, special_request, num_of_seats, terms_conditions) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            // the $1 etc values will be replaced by the ones in the array to prevent sql injections
            [
                newReservation.firstName,
                newReservation.lastName,
                newReservation.email,
                newReservation.phoneNumber,
                newReservation.bookingDate,
                newReservation.bookingTime,
                newReservation.specialRequest,
                newReservation.numOfSeats,
                newReservation.termsConditions
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch(err) {
        res.status(500).json({ error: "Database error" });
    }
});

app.post('/api/login', async (req, res) => {
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

app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

app.listen(PORT, (req, res) => {
    console.log(`Server Running On Port ${PORT}`)
})