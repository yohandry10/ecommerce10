// src/components/promotions/PromotionManagement.jsx
import React, { useState } from 'react';

function PromotionManagement() {
  const [promotions, setPromotions] = useState([
    { id: 1, name: 'Descuento del 10%', description: 'En todas las categorías.' },
    { id: 2, name: '2x1', description: 'En la compra de productos seleccionados.' },
  ]);

  const [newPromotion, setNewPromotion] = useState({ name: '', description: '' });
  const [editing, setEditing] = useState(null);

  const handleAddPromotion = () => {
    setPromotions([
      ...promotions,
      { id: promotions.length + 1, ...newPromotion },
    ]);
    setNewPromotion({ name: '', description: '' });
  };

  const handleEditPromotion = (id) => {
    const promotion = promotions.find((p) => p.id === id);
    setEditing(id);
    setNewPromotion({ name: promotion.name, description: promotion.description });
  };

  const handleUpdatePromotion = () => {
    setPromotions(promotions.map((p) =>
      p.id === editing ? { id: editing, ...newPromotion } : p
    ));
    setEditing(null);
    setNewPromotion({ name: '', description: '' });
  };

  const handleDeletePromotion = (id) => {
    setPromotions(promotions.filter((p) => p.id !== id));
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Gestión de Promociones</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nombre de la Promoción"
          value={newPromotion.name}
          onChange={(e) => setNewPromotion({ ...newPromotion, name: e.target.value })}
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newPromotion.description}
          onChange={(e) => setNewPromotion({ ...newPromotion, description: e.target.value })}
          className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={editing ? handleUpdatePromotion : handleAddPromotion}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          {editing ? 'Actualizar Promoción' : 'Agregar Promoción'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {promotions.map((promotion) => (
          <div key={promotion.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold">{promotion.name}</h3>
            <p className="text-gray-600">{promotion.description}</p>
            <button
              onClick={() => handleEditPromotion(promotion.id)}
              className="bg-yellow-500 text-white p-1 rounded hover:bg-yellow-600 mr-2"
            >
              Editar
            </button>
            <button
              onClick={() => handleDeletePromotion(promotion.id)}
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

export default PromotionManagement;
