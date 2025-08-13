// src/api/controllers/authController.js
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');

exports.register = async (req, res) => {
  // Log the request to help with debugging
  console.log('Received request body:', req.body);
  console.log('Received request file:', req.file);

  // Guard clause to ensure req.body is defined
  if (!req.body || Object.keys(req.body).length === 0) {
    if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
    return res.status(400).json({ msg: 'Request body is empty. Please ensure all form data is being sent correctly from the frontend.' });
  }

  // Add a check for the JWT secret
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET environment variable is not set!');
    if (req.file) fs.unlinkSync(req.file.path); // Clean up uploaded file
    return res.status(500).json({ msg: 'Server configuration error.' });
  }
  
  const resumePath = req.file ? req.file.path : null;

  try {
    const { name, email, phone, university, domain, message, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      // If user exists, delete the uploaded file to prevent clutter
      if (resumePath) {
        fs.unlinkSync(resumePath);
      }
      return res.status(400).json({ msg: 'User with this email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user with all the form data
    user = new User({
      name,
      email,
      phone,
      university,
      domain,
      message,
      resume: resumePath, // Store the path to the uploaded resume
      password: hashedPassword
    });

    await user.save();

    // Create a JWT token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token, msg: 'Registration successful!' });
      }
    );

  } catch (err) {
    console.error(err.message);
    // If there's a server error, delete the uploaded file
    if (resumePath) {
        fs.unlinkSync(resumePath);
    }

    // Check for Mongoose validation errors
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(el => el.message);
      return res.status(400).json({ msg: errors.join(', ') });
    }
    
    // For any other unexpected server errors
    res.status(500).json({ msg: `Server error: ${err.message}` });
  }
};

exports.login = async (req, res) => {
  // Add a check for the JWT secret
  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET environment variable is not set!');
    return res.status(500).json({ msg: 'Server configuration error.' });
  }

  const { email, password } = req.body;

  try {
    // Check for hardcoded admin credentials
    if (email === 'admin@internship.com' && password === 'admin123') {
      const adminPayload = {
        user: { id: 'admin', role: 'admin' }
      };

      jwt.sign(
        adminPayload,
        process.env.JWT_SECRET,
        { expiresIn: '1h' },
        (err, token) => {
          if (err) throw err;
          res.json({ 
            token,
            user: {
              id: 'admin',
              name: 'Administrator',
              email: 'admin@internship.com',
              role: 'admin'
            }
          });
        }
      );
      return;
    }

    // Check for regular user in database
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ 
          token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            domain: user.domain,
            university: user.university
          }
        });
      }
    );

  } catch (err) {
    console.error(err.message);
    // Changed this line to send a JSON object
    res.status(500).json({ msg: `Server error: ${err.message}` });
  }
};

// Get all users (for admin dashboard)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password') // Exclude password from response
      .sort({ createdAt: -1 }); // Sort by newest first
    
    res.json({
      success: true,
      count: users.length,
      users: users
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ 
      success: false, 
      msg: `Server error: ${err.message}` 
    });
  }
};

// Get user count
exports.getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({
      success: true,
      totalUsers: count
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ 
      success: false, 
      msg: `Server error: ${err.message}` 
    });
  }
};
