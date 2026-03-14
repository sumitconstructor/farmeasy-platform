require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import our blueprints!
const Farmer = require('./models/Farmer'); 
const Order = require('./models/Order'); 

const app = express();
app.use(cors());
app.use(express.json());

// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('🟢 MongoDB Successfully Connected!'))
  .catch((err) => console.log('🔴 MongoDB Connection Error:', err));

// --- ROUTES ---

// 1. Root route
app.get('/', (req, res) => {
  res.send('FarmEasy Backend Engine is Running! 🚜');
});

// 2. Farmer Routes
app.post('/api/farmers', async (req, res) => {
  try {
    const newFarmer = new Farmer(req.body);
    await newFarmer.save();
    res.status(201).json({ message: "Success!", data: newFarmer });
  } catch (error) {
    res.status(500).json({ error: "Failed to register farmer" });
  }
});

app.get('/api/farmers', async (req, res) => {
  try {
    const allFarmers = await Farmer.find(); 
    res.status(200).json(allFarmers);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch farmers" });
  }
});

// 3. NEW: Order Routes (For Corporate Checkout)
app.post('/api/orders', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    console.log("💳 New Corporate Order Saved!");
    res.status(201).json({ message: "Order successful!", data: newOrder });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to process order" });
  }
});

app.get('/api/orders', async (req, res) => {
  try {
    const allOrders = await Order.find();
    res.status(200).json(allOrders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});