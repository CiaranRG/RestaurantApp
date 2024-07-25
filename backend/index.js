import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';

import db from './utils/databaseConnection.js';
import { accountRoutes } from './Routes/accounts.js';
import { reservationRoutes } from './Routes/reservations.js';

// Load environment variables
config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = process.env.ALLOWED_ORIGINS;

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
app.use(cookieParser());

// Manually set Content Security Policy headers
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self' bella-cucina-frontend.vercel.app; connect-src 'self' bella-cucina-frontend.vercel.app;");
    next();
});

// API routes
app.use('/api/accounts', accountRoutes);
app.use('/api/reservations', reservationRoutes);


app.get('/api/menu', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM menuItems');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: 'An error has occurred' });
    }
});

app.get('/api', (req, res) => {
    res.json({ message: `Hello from the backend on Port ${PORT}` });
});

// Catch-all route for handling 404 errors
app.use('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(`Server Running On Port ${PORT}`);
    }
});
