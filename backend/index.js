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

// Add options later to limit who can send requests
app.use(cors());
app.use(express.json());

// Creating postgreSQL connection and setting it to pool so we ca
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
        console.error(err);
    }
});

app.get('/api/reservations', (req, res) => {
    res.json(reservations);
});

app.listen(PORT, (req, res) => {
    console.log(`Server Running On Port ${PORT}`)
})