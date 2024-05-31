const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected');

    const products = [
      { name: 'Polo Clásico', category: 'polo1', price: 25.00, description: 'Polo clásico de alta calidad.', imageUrl: 'url_imagen_polo_clasico' },
      { name: 'Camiseta Deportiva', category: 'deportivo1', price: 30.00, description: 'Camiseta deportiva ideal para ejercicios.', imageUrl: 'url_imagen_camiseta_deportiva' },
      { name: 'Sudadera con Capucha', category: 'deportivo1', price: 50.00, description: 'Sudadera con capucha, cómoda y moderna.', imageUrl: 'url_imagen_sudadera_capucha' },
      { name: 'Pantalón de Vestir', category: 'polo1', price: 40.00, description: 'Pantalón de vestir elegante y cómodo.', imageUrl: 'url_imagen_pantalon_vestir' },
      { name: 'Zapatillas Running', category: 'deportivo1', price: 60.00, description: 'Zapatillas ideales para correr.', imageUrl: 'url_imagen_zapatillas_running' },
      { name: 'Camisa Formal', category: 'polo1', price: 35.00, description: 'Camisa formal para ocasiones especiales.', imageUrl: 'url_imagen_camisa_formal' },
      { name: 'Pantalones Cortos Deportivos', category: 'deportivo1', price: 20.00, description: 'Pantalones cortos para entrenar.', imageUrl: 'url_imagen_pantalones_cortos' },
      { name: 'Gorra Casual', category: 'polo1', price: 15.00, description: 'Gorra casual para el día a día.', imageUrl: 'url_imagen_gorra_casual' },
      { name: 'Chaqueta Impermeable', category: 'deportivo1', price: 70.00, description: 'Chaqueta impermeable para actividades al aire libre.', imageUrl: 'url_imagen_chaqueta_impermeable' },
      { name: 'Zapatos Formales', category: 'polo1', price: 80.00, description: 'Zapatos formales de cuero.', imageUrl: 'url_imagen_zapatos_formales' },
    ];

    await Product.insertMany(products);
    console.log('Data seeded');
    process.exit();
  })
  .catch((error) => console.error('MongoDB connection error:', error));
