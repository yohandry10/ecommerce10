const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Función para generar un token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Registro de un nuevo usuario
exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuario ya existe.' });
    }

    // Cifrar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear un nuevo usuario
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();

    // Generar un token y responder al cliente
    const token = generateToken(newUser);
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error creando usuario.' });
  }
};

// Iniciar sesión de un usuario existente
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Credenciales incorrectas.' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error iniciando sesión.' });
  }
};
