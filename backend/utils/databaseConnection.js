// Creating a separate file to be able to import to anywhere we need database interaction

// Importing full pg package then destructing pool from it
import pg  from 'pg'
const { Pool } = pg
import { config } from 'dotenv';

// Calling this to have its side effects happen (reading the .env and parsing the data)
config()

// Creating postgreSQL connection
const db = new Pool({
    user: process.env.PG_USER,
    host: 'localhost',
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASS,
    port: 5432, // Default port for PostgreSQL
  });

export default db