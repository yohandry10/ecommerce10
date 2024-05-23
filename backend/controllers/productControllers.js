// backend/controllers/productController.js

const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

module.exports = { getProducts };
