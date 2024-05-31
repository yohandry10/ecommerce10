require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./utils/swagger');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');
const orderRoutes = require('./routes/orders');
const promotionRoutes = require('./routes/promotions');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

// Verifica si MONGODB_URI está presente
if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI no está configurado.');
  process.exit(1);
}

// Mejoras de seguridad
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

// Límite de peticiones para prevenir ataques de fuerza bruta
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // Limita a 100 peticiones por IP dentro del periodo
  message: 'Exceso de peticiones desde esta IP, intenta más tarde.'
});
app.use('/api/', limiter);

// Conexión a MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Conectado a MongoDB Atlas');
    // Iniciar el servidor una vez que la conexión con la base de datos es exitosa
    app.listen(PORT, () => {
      console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error conectando a MongoDB Atlas:', err);
    process.exit(1);
  });

// Middleware para analizar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Documentación de API con Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/promotions', promotionRoutes);

// Punto de entrada principal
app.get('/', (req, res) => {
  res.send('Bienvenido a nuestro ecommerce!');
});

// Manejo de errores centralizado
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Ocurrió un error en el servidor.' });
});

module.exports = app;
