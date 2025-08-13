// src/models/User.js
const mongoose = require('mongoose');

// The User schema defines the structure of a user document in MongoDB.
// It includes all the fields from your frontend registration form.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  university: {
    type: String,
    required: [true, 'University is required'],
    trim: true
  },
  domain: {
    type: String,
    required: [true, 'Domain of interest is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required']
  },
  resume: {
    type: String, // This will store the file path to the resume
    required: [true, 'Resume upload is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
