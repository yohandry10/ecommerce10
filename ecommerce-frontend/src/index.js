import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CartProvider } from './componentes/contexts/CartContext';
import { WishlistProvider } from './componentes/contexts/WishlistContext';
import { NotificationProvider } from './componentes/contexts/NotificationContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CartProvider>
      <WishlistProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </WishlistProvider>
    </CartProvider>
  </React.StrictMode>
);
