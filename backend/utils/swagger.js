const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'API de Ecommerce para gestionar productos, usuarios, pedidos y promociones.',
      contact: {
        name: 'Soporte API',
        url: 'http://www.tuwebsite.com',
        email: 'support@tuwebsite.com'
      },
      termsOfService: 'http://www.tuwebsite.com/terms',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Desarrollo local'
      },
      {
        url: 'https://tuapienproduccion.com/api',
        description: 'Entorno de producción'
      }
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Identificador único del producto'
            },
            name: {
              type: 'string',
              description: 'Nombre del producto'
            },
            price: {
              type: 'number',
              description: 'Precio del producto'
            },
            category: {
              type: 'string',
              description: 'Categoría del producto'
            }
          }
        }
      },
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{
      BearerAuth: []
    }]
  },
  apis: ['./routes/*.js'], // Cambia la ruta si tus archivos están organizados de manera diferente
};

const swaggerDocument = swaggerJsdoc(options);
module.exports = swaggerDocument;
