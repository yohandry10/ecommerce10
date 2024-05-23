import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import LoginComponent from './components/auth/LoginComponent';
import RegisterComponent from './components/auth/RegisterComponent';
import ProductManagement from './components/products/ProductManagement';
import CategoryDetail from './components/categories/CategoryDetail';
import CartComponent from '../src/components/cart/Cart';
import { CartProvider } from '../src/components/cart/CartContext'; // Importar CartProvider aquí

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider> {/* Envolver toda la aplicación en CartProvider */}
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/manage/products" element={<ProductManagement />} />
            <Route path="/category/:category/:subcategory" element={<CategoryDetail />} />
            <Route path="/cart" element={<CartComponent />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
