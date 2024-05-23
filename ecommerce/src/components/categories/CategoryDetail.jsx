// src/components/categories/CategoryDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
  // Esto capturará los parámetros de la URL (por ejemplo, 'ropa', 'calzado', etc.)
  const { category, subcategory } = useParams();

  // Simulación de datos basados en categorías y subcategorías
  const allProducts = {
    ropa: {
      calzado: [{ id: 1, name: 'Zapatos deportivos' }, { id: 2, name: 'Zapatos casuales' }],
      camisas: [{ id: 3, name: 'Camisa formal' }, { id: 4, name: 'Camisa casual' }],
      pantalones: [{ id: 5, name: 'Jeans' }, { id: 6, name: 'Pantalones de vestir' }],
    },
    hogar: {
      herramientas: [{ id: 7, name: 'Taladro eléctrico' }, { id: 8, name: 'Caja de herramientas' }],
      pinturas: [{ id: 9, name: 'Pintura para paredes' }, { id: 10, name: 'Pintura para muebles' }],
      muebles: [{ id: 11, name: 'Mesa de centro' }, { id: 12, name: 'Silla de comedor' }],
    },
    tecnologia: {
      celulares: [{ id: 13, name: 'Smartphone 1' }, { id: 14, name: 'Smartphone 2' }],
      laptops: [{ id: 15, name: 'Laptop A' }, { id: 16, name: 'Laptop B' }],
      'equipos-de-sonido': [{ id: 17, name: 'Sistema de sonido X' }, { id: 18, name: 'Altavoz portátil' }],
    },
  };

  // Obtener los productos de la subcategoría seleccionada
  const products = allProducts[category]?.[subcategory] || [];

  return (
    <div className="category-detail p-4">
      <h1 className="text-2xl font-bold mb-4">{`${category} - ${subcategory}`}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length ? (
          products.map((product) => (
            <li key={product.id} className="bg-white shadow rounded p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold">{product.name}</h2>
            </li>
          ))
        ) : (
          <p>No se encontraron productos en esta subcategoría.</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryDetail;
