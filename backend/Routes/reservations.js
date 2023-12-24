// Importing Necessary Files
import express from 'express';
import db from '../utils/databaseConnection.js'

import verifyToken from '../utils/verifyToken.js'

const router = express.Router();

// Create a new reservation
router.post('/', verifyToken, async (req, res) => {
    const newReservation = req.body;
    // Grabbing the userId from the user object in our verifyToken Middleware
    const userId = req.user.userId
    try {
        // Sending a query to the database 
        const result = await db.query(
            // Inserting the data into the database in order
            "INSERT INTO reservations (first_name, last_name, email, phone_number, booking_date, booking_time, special_request, num_of_seats, terms_conditions, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
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
                newReservation.termsConditions,
                userId
            ]
        );
        res.status(201).json(result.rows[0]);
    } catch(err) {
        res.status(500).json({ error: "Database error" });
    }
});

router.get('/', verifyToken, async (req, res) => {
    // Grabbing the userId from the user object in our verifyToken Middleware
    const userId = req.user.userId
    try {
        const result = await db.query('SELECT * FROM reservations WHERE user_id = $1', [userId])
        // Use 200 instead of 201 for GET requests being successful and also send the result.rows instead of just the whole result
        res.status(200).json({result: result.rows})
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: "Database error" });
    }
});

export { router as reservationRoutes }