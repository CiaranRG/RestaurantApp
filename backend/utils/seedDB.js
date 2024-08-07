// Creating a seeding script for our database menu items
// Importing our database connection function
import db from './databaseConnection.js'

// Data to seed the database
const menuDB = [
  {
    name: 'Pizza Margherita',
    description: 'Savor our authentic Pizza Margherita, freshly baked with a rich tomato base, melted mozzarella, and aromatic basil leaves.',
    ingredients: 'Pizza dough, Mozzarella cheese, Tomato sauce, Basil, Olive oil...',
    imgUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww'
  },
  {
    name: 'Lasagna',
    description: 'Indulge in our classic lasagna, boasting layers of perfectly cooked pasta, hearty ground beef, creamy ricotta, and tangy marinara sauce.',
    ingredients: 'Lasagna sheets, Ground beef, Ricotta cheese, Marinara sauce, Bechamel...',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1671547330493-b07d377085ca?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Ravioli',
    description: 'Discover the delights of our ravioli, stuffed with creamy ricotta and spinach, gracefully paired with a savory marinara sauce.',
    ingredients: 'Pasta dough, Ricotta cheese, Spinach, Tomato sauce, Parmesan...',
    imgUrl: 'https://images.unsplash.com/photo-1594610352113-ad218529cfb7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmF2aW9saXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Taste the richness of our Spaghetti Carbonara, blending the flavors of creamy eggs, grated Parmesan, and crispy pancetta.',
    ingredients: 'Spaghetti, Eggs, Parmesan cheese, Pancetta, Black pepper...',
    imgUrl: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Tiramisu',
    description: 'Relish our traditional Tiramisu, featuring velvety layers of coffee-soaked ladyfingers enveloped in luscious mascarpone cream and a dusting of cocoa.',
    ingredients: 'Ladyfingers, Coffee, Mascarpone cheese, Cocoa powder, Sugar...',
    imgUrl: 'https://images.unsplash.com/photo-1639744211487-b27e3551b07c?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Garlic Bread',
    description: 'Crunch into our Garlic Bread, perfectly toasted and smeared with a delightful mix of garlic, butter, and a sprinkle of parsley.',
    ingredients: 'Bread, Garlic, Butter, Parsley, Olive oil...',
    imgUrl: 'https://images.unsplash.com/photo-1598785244280-7a428600d053?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FybGljJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Chicken Parmesan',
    description: 'Satisfy your palate with our Chicken Parmesan, featuring tender breaded chicken cutlets topped with molten cheese and rich marinara sauce.',
    ingredients: 'Chicken breasts, Breadcrumbs, Marinara sauce, Mozzarella cheese, Parmesan...',
    imgUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Fettuccine Alfredo',
    description: 'Enjoy the creamy allure of our Fettuccine Alfredo, drizzled with a luxurious sauce of parmesan, butter, and a touch of cream.',
    ingredients: 'Fettuccine, Heavy cream, Parmesan cheese, Butter, Garlic...',
    imgUrl: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV0dHVjY2luZSUyMGFsZnJlZG98ZW58MHx8MHx8fDA%3D'
  },
  {
    name: 'Bruschetta',
    description: 'Experience the freshness of our Bruschetta, offering juicy tomatoes and fragrant basil atop crispy toasted bread with a hint of garlic.',
    ingredients: 'Bread, Tomatoes, Basil, Garlic, Olive oil...',
    imgUrl: 'https://images.unsplash.com/photo-1572695157360-1153aaad020b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    name: 'Gnocchi',
    description: 'Delight in our soft Gnocchi, delectable potato dumplings complemented by a robust tomato sauce',
    ingredients: 'Potatoes, Flour, Egg, Tomato sauce...',
    imgUrl: 'https://images.unsplash.com/photo-1628462626251-dc8abf27ece0?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

// Creating a function to seed the database
const seedDB = async () => {
  // Clear the menuItems table and restart the ids
  await db.query('TRUNCATE menuItems RESTART IDENTITY');

  // inserting the mock data into our database
  try {
    for (let item of menuDB) {
      await db.query('INSERT INTO menuItems(name, description, ingredients, imgUrl) VALUES($1, $2, $3, $4)', [item.name, item.description, item.ingredients, item.imgUrl]);
    }
    if (process.env.NODE_ENV !== 'production') {
      console.log('Database seeding successful');
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Error Occurred:', error);
    }
  }
  db.end();
  if (process.env.NODE_ENV !== 'production') {
    console.log('Database connection closed');
  }
};

// Run the seed function
seedDB().catch(error => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Seeding error:', error);
  }
});



