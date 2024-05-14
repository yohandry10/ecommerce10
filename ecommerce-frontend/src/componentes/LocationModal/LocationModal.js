import React, { useState } from 'react';

const LocationModal = ({ isOpen, onClose, onSave }) => {
  const [location, setLocation] = useState('');

  const handleSave = () => {
    onSave(location);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Ingresa tu ubicación</h2>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="Escribe tu ciudad o código postal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleSave}
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
