// src/components/promotions/PromotionList.jsx
import React from 'react';

const dummyPromotions = [
    { id: 1, name: 'Descuento del 10%', description: 'En todas las categorías.' },
    { id: 2, name: '2x1', description: 'En la compra de productos seleccionados.' },
];

function PromotionList() {
    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-3xl font-bold mb-6">Promociones Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dummyPromotions.map((promotion) => (
                    <div key={promotion.id} className="p-4 border rounded shadow-md">
                        <h3 className="text-lg font-bold">{promotion.name}</h3>
                        <p className="text-gray-600">{promotion.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PromotionList;
