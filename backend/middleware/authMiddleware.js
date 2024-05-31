const jwt = require('jsonwebtoken');

// Middleware para proteger rutas con autenticación JWT
exports.protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token faltante.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: 'Token inválido.' });
  }
};

// Middleware para verificar roles específicos
exports.verifyRole = (allowedRoles) => (req, res, next) => {
  if (!allowedRoles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Acceso denegado.' });
  }
  next();
};
