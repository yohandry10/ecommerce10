const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { check, validationResult } = require('express-validator');

// Middleware para validar las solicitudes
const validateProduct = [
    check('name', 'El nombre del producto es requerido').not().isEmpty(),
    check('price', 'El precio debe ser un número mayor que cero').isFloat({ gt: 0 }),
    check('category', 'La categoría es requerida').not().isEmpty()
];

// Middleware para manejar la validación de solicitudes
const handleValidation = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Identificador único del producto
 *         name:
 *           type: string
 *           description: Nombre del producto
 *         price:
 *           type: number
 *           description: Precio del producto
 *         category:
 *           type: string
 *           description: Categoría del producto
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Retrieve a list of products from the database.
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get('/', productsController.getAllProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Adds a new product to the database.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created successfully.
 *       400:
 *         description: Validation error.
 */
router.post('/', validateProduct, handleValidation, productsController.createProduct);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product
 *     description: Retrieve details about a specific product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the product.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single product.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found.
 */
router.get('/:id', productsController.getProductById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update a product
 *     description: Updates an existing product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       400:
 *         description: Validation error.
 *       404:
 *         description: Product not found.
 */
router.put('/:id', validateProduct, handleValidation, productsController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     description: Deletes a product from the database by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product deleted successfully.
 *       404:
 *         description: Product not found.
 */
router.delete('/:id', productsController.deleteProduct);

module.exports = router;
