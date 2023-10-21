import express from 'express'
import cors from 'cors'
const app = express()
const PORT = 5000

// Add options later to limit who can send requests
app.use(cors());

// Using this to send information to the react frontend when we get this request
app.get('/api', (req, res) => {
    res.json({message: `Hello from the backend on Port ${PORT}`})
})

app.listen(PORT, (req, res) => {
    console.log(`Server Running On Port ${PORT}`)
})