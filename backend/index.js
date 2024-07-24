import express from 'express'
import cors from 'cors'
import { config } from 'dotenv';
import helmet from 'helmet'

import db from './utils/databaseConnection.js'

// Calling this to have its side effects happen (reading the .env and parsing the data)
config();

const app = express()
const PORT = 5000

const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
// Using this to make parsing cookies easier
app.use(cookieParser())

// Manually set Content Security Policy headers
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' bella-cucina-frontend.vercel.app; connect-src 'self' bella-cucina-frontend.vercel.app;");
    next();
});

// Telling the app to use the cors middleware for all the preflight requests
// app.options('/api/accounts/login', cors());
app.options('*', cors());

// Importing our routes
import { accountRoutes } from './Routes/accounts.js'
import { reservationRoutes } from './Routes/reservations.js';
import cookieParser from 'cookie-parser';

// Using this to send information to the react frontend when we get this request
app.get('/api', (req, res) => {
    res.json({ message: `Hello from the backend on Port ${PORT}` })
})

app.get('/api/menu', async (req, res) => {
    console.log('Entering menu fetch')
    try {
        const result = await db.query('SELECT * FROM menuItems')
        console.log(result.rows)
        res.json(result.rows);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error has occurred' })
    }
})

// Telling my app to use this file for requests to /api/accounts
app.use('/api/accounts', accountRoutes);

// Same as above for but for reservations
app.use('/api/reservations', reservationRoutes)

app.listen(PORT, (req, res) => {
    // Only letting this run in development mode
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server Running On Port ${PORT}`)
    }
})