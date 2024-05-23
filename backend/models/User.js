const User = require('../models/User');

// Crear un nuevo usuario
exports.register = async (req, res) => {
  const newUser = new User(req.body);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Login de usuario (lugar para implementar autenticación)
exports.login = async (req, res) => {
  // Esta función debería verificar las credenciales del usuario
  res.send("Login endpoint hit");
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res.status(404).send('Usuario no encontrado');
    } else {
      res.status(204).send(); // No content to send back
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
