// backend/models/productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true }
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
