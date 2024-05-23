// backend/routes/productRoutes.js

const express = require('express');
const router = express.Router();
const { getProducts } = require('../controllers/productController');

// Ruta para obtener productos
router.get('/', getProducts);

module.exports = router;
