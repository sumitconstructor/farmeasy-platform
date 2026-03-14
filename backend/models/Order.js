const mongoose = require('mongoose');

// The blueprint for corporate purchases
const orderSchema = new mongoose.Schema({
  companyName: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  totalAmount: { 
    type: Number, 
    required: true // We will save the revenue here!
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Order', orderSchema);