// src/componentes/Notifications/Notifications.js
import React from 'react';
import { useNotification } from '../contexts/NotificationContext';

const Notification = () => {
  const { notifications, addNotification } = useNotification();

  return (
    <div>
      <h1>Notifications</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
