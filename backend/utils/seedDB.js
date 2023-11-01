import { config } from 'dotenv';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Path to the .env file
const envPath = join(__dirname, '..', '.env');
config({ path: envPath });

// Importing full pg package then destructing pool from it
import pg  from 'pg'
const { Pool } = pg

// Creating postgreSQL connection
const db = new Pool({
    user: process.env.PG_USER,
    host: 'localhost',
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASS,
    port: 5432, // Default port for PostgreSQL
});

// Create default information to seed the database when needed
const menuDB = [
    {
        name: 'Pasta',
        description: 'Indulge in our authentic Italian pasta...',
        ingredients: 'Durum wheat pasta, Fresh tomatoes, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Grilled Chicken Salad',
        description: 'Savor our fresh and crispy salad...',
        ingredients: 'Chicken breast, Mixed salad greens, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Seafood Paella',
        description: 'Experience a Spanish culinary masterpiece...',
        ingredients: 'Short-grain rice, Shrimps, Mussels, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Vegan Buddha Bowl',
        description: 'A vibrant bowl of nutrition and taste...',
        ingredients: 'Quinoa, Sweet potatoes, Chickpeas, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Steak Frites',
        description: 'Relish in this classic French bistro dish...',
        ingredients: 'Beef steak, Potatoes, Garlic, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Mango Lassi',
        description: 'Quench your thirst with our refreshing Mango Lassi...',
        ingredients: 'Ripe mangoes, Yogurt, Sugar, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Thai Green Curry',
        description: 'Dive into the depths of Thai flavors...',
        ingredients: 'Chicken breast, Coconut milk, Green curry paste, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Quiche Lorraine',
        description: 'Indulge in a slice of French elegance...',
        ingredients: 'Pie crust, Eggs, Heavy cream, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Sushi Platter',
        description: 'Experience the art of Japanese cuisine...',
        ingredients: 'Sushi rice, Nori (seaweed sheets), Fresh tuna, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Moroccan Tagine',
        description: 'Travel to the heart of Morocco with our slow-cooked tagine...',
        ingredients: 'Lamb chunks, Prunes, Almonds, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Vegetarian Tacos',
        description: 'A fiesta of flavors in every bite...',
        ingredients: 'Soft tortillas, Black beans, Fresh tomatoes, ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name: 'Berry Smoothie Bowl',
        description: 'Awaken your senses with our vibrant berry smoothie bowl...',
        ingredients: 'Mixed berries (strawberries, blueberries, raspberries), ...',
        imgUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
];



// Create function to search Unsplash for pictures for the backgrounds

const seedDB = async () => {

    // Clear Database
    await db.query('TRUNCATE menuItems')

    // Insert Array Into Database
    try {
        for (let item of menuDB) {
            await db.query('INSERT INTO menuItems(name, description, ingredients, imgUrl) VALUES($1, $2, $3, $4)', [item.name, item.description, item.ingredients, item.imgUrl]);
        };
    } catch (error) {
        console.log('Error Occurred', error)
    }
}

seedDB().then(() => {
    db.end()
}).catch(error => {
    console.log(error)
})