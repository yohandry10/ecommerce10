// src/components/products/ProductManagement.jsx
import React, { useState } from 'react';

function ProductManagement() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Producto A', price: 10.99 },
    { id: 2, name: 'Producto B', price: 12.99 },
    { id: 3, name: 'Producto C', price: 8.99 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });
  const [editing, setEditing] = useState(null);

  const handleAddProduct = () => {
    setProducts([
      ...products,
      { id: products.length + 1, ...newProduct },
    ]);
    setNewProduct({ name: '', price: '' });
  };

  const handleEditProduct = (id) => {
    const product = products.find((p) => p.id === id);
    setEditing(id);
    setNewProduct({ name: product.name, price: product.price });
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((p) =>
      p.id === editing ? { id: editing, ...newProduct } : p
    ));
    setEditing(null);
    setNewProduct({ name: '', price: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Gestión de Productos</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nombre del Producto"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Precio del Producto"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={editing ? handleUpdateProduct : handleAddProduct}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editing ? 'Actualizar Producto' : 'Agregar Producto'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => handleEditProduct(product.id)}
              className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductManagement;
