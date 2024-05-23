// src/components/orders/OrderList.jsx
import React from 'react';

const dummyOrders = [
  { id: 1, productName: 'Producto A', date: '2024-05-10', status: 'Enviado' },
  { id: 2, productName: 'Producto B', date: '2024-05-12', status: 'Pendiente' },
];

function OrderList() {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Mis Órdenes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyOrders.map((order) => (
          <div key={order.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold">{order.productName}</h3>
            <p className="text-gray-600">Fecha: {order.date}</p>
            <p className={`text-${order.status === 'Pendiente' ? 'yellow' : 'green'}-600`}>Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrderList;
