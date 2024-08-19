const mongoose = require('mongoose');

// Define the User schema
const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  bio: { 
    type: String, 
    default: '' 
  },
  password: { 
    type: String, 
    required: true 
  }
  // Add more fields as needed
});

// Create and export the User model
module.exports = mongoose.model('User', UserSchema);
