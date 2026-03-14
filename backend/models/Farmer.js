const mongoose = require('mongoose');

// This is the blueprint for every farmer that registers
const farmerSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  landArea: { 
    type: Number, 
    required: true 
  }
}, { 
  timestamps: true // This automatically records exactly when they registered!
});

// We export this blueprint so our engine can use it
module.exports = mongoose.model('Farmer', farmerSchema);