// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import your routes
const authRoutes = require('./src/api/routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// The cors middleware enables all CORS requests by default
// for your frontend to communicate with your backend.
app.use(cors());

// Connect to MongoDB with better error handling
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // 30 seconds
})
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    console.log('📊 Database:', mongoose.connection.db.databaseName);
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  });

// Handle connection events
mongoose.connection.on('connected', () => {
  console.log('🔗 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('🚨 Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('🔌 Mongoose disconnected from MongoDB');
});

// Use your routes
// express.json() is now correctly applied to all routes that may need it.
app.use('/api', express.json(), authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
