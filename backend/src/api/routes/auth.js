// src/api/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// For file uploads, we need to use a middleware like 'multer'
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up the storage destination and filename for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Create the 'uploads' directory if it doesn't exist
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Create a unique filename for the resume
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// @route   POST /api/register
// @desc    Register a new user and upload their resume
// @access  Public
// The 'upload.single('resume')' middleware must come before the controller
router.post('/register', upload.single('resume'), authController.register);

// @route   POST /api/login
// @desc    Authenticate a user
// @access  Public
router.post('/login', authController.login);

// @route   GET /api/users
// @desc    Get all registered users (for admin)
// @access  Public (you can add authentication later)
router.get('/users', authController.getAllUsers);

// @route   GET /api/users/count
// @desc    Get total count of registered users
// @access  Public
router.get('/users/count', authController.getUserCount);

module.exports = router;
