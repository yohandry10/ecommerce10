// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './componentes/contexts/CartContext';
import { WishlistProvider } from './componentes/contexts/WishlistContext';
import { NotificationProvider } from './componentes/contexts/NotificationContext';

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
