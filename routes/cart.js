const express = require('express');
const router = express.Router();

// Simple in-memory cart (in production, use sessions or database)
const carts = {};

// Add to cart
router.post('/add', (req, res) => {
  const { userId, productId, quantity } = req.body;
  if (!carts[userId]) carts[userId] = [];
  const existingItem = carts[userId].find(item => item.productId === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    carts[userId].push({ productId, quantity });
  }
  res.json(carts[userId]);
});

// Get cart
router.get('/:userId', (req, res) => {
  const cart = carts[req.params.userId] || [];
  res.json(cart);
});

// Remove from cart
router.post('/remove', (req, res) => {
  const { userId, productId } = req.body;
  if (carts[userId]) {
    carts[userId] = carts[userId].filter(item => item.productId !== productId);
  }
  res.json(carts[userId] || []);
});

// Clear cart
router.post('/clear', (req, res) => {
  const { userId } = req.body;
  carts[userId] = [];
  res.json({ message: 'Cart cleared' });
});

module.exports = router;
