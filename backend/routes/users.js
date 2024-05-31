const express = require('express');
const router = express.Router();
const usersController = require('../models/User');

// Definir las rutas para la gestión de usuarios
router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
