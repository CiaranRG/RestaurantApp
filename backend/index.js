import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';
// Importing full pg package then destructing pool from it
import pg  from 'pg'
const { Pool } = pg
// Calling this to have its side effects happen (reading the .env and parsing the data)
config();
const app = express()
const PORT = 5000

// Importing joi schemas
import { registerSchema } from './models/accountsModel.js';

// Add options later to limit who can send requests
app.use(cors());
app.use(express.json());

// Creating postgreSQL connection
const db = new Pool({
  user: process.env.PG_USER,
  host: 'localhost',
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASS,
  port: 5432, // Default port for PostgreSQL
});

// Using this to send information to the react frontend when we get this request
app.get('/api', (req, res) => {
    res.json({message: `Hello from the backend on Port ${PORT}`})
})

app.get('/api/menu', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM menuItems')
        res.json(result.rows);
    } catch (error) {
        console.log('Error Occurred', error)
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
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.post('/api/login', (req, res) => {
    
})

app.post('/api/accounts', (req, res) => {
    const newAccount = req.body
    console.log(newAccount)
    try {
        // Check for existence of the error property within this validation
        const { error } = registerSchema.validate(newAccount)
        // Throw an error if validation fails (Error will be truthy) so we can be sent to the catch section or else it will just carry on and ignore this section
        if (error){
            throw new Error('Validation error')
        }
        const result = db.query(
            'INSERT INTO user_accounts (username, email, password) VALUES ($1, $2, $3) RETURNING *',
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

app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

app.listen(PORT, (req, res) => {
    console.log(`Server Running On Port ${PORT}`)
})