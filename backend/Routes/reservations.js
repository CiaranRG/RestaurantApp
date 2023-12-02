// Importing Necessary Files
import express from 'express';
import db from '../utils/databaseConnection.js'

const router = express.Router();

// Create a new reservation
app.post('/', async (req, res) => {
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

app.get('/', (req, res) => {
    res.json(reservations);
});

export { router as reservationRoutes }