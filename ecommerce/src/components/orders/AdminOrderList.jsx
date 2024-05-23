// src/components/orders/AdminOrderList.jsx
import React, { useState } from 'react';

const dummyOrders = [
  { id: 1, productName: 'Producto A', date: '2024-05-10', status: 'Enviado' },
  { id: 2, productName: 'Producto B', date: '2024-05-12', status: 'Pendiente' },
];

function AdminOrderList() {
  const [orders, setOrders] = useState(dummyOrders);

  const updateOrderStatus = (id, status) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status } : order)));
  };

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6">Gestión de Órdenes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order.id} className="p-4 border rounded shadow-md">
            <h3 className="text-lg font-bold">{order.productName}</h3>
            <p className="text-gray-600">Fecha: {order.date}</p>
            <select
              value={order.status}
              onChange={(e) => updateOrderStatus(order.id, e.target.value)}
              className="w-full mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Enviado">Enviado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminOrderList;
