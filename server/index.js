// index.js
const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express
const app = express();

// Connect Database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
