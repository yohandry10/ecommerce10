import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Footer from './componentes/Footer/Footer';
import Notification from './componentes/Notifications/Notifications';
import CategoriesSection from './componentes/Categories/CategoriesSection';
import ProductDetail from './componentes/Products/ProductDetail';
import SearchResults from './componentes/SearchResults/SearchResults';
import Login from './componentes/Forms/LoginForm';
import Register from './componentes/Forms/RegisterForm';
import MyPurchases from './componentes/MyPurchases/MyPurchases';
import Cart from './componentes/Cart/Cart';
import Profile from './componentes/Profile/Profile';
import Offers from './componentes/Offers/Offers';
import Wishlist from './componentes/Wishlist/Wishlist';
import About from './componentes/About/About';
import Contact from './componentes/Contact/Contact';
import Terms from './componentes/Terms/Terms';
import MainLayout from './componentes/MainLayout/MainLayout';
import { CartProvider } from './componentes/contexts/CartContext';
import { WishlistProvider } from './componentes/contexts/WishlistContext';
import { NotificationProvider } from './componentes/contexts/NotificationContext';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    console.log('Query received in App:', query);
    if (!query) {
      setSearchResults([]);
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/products');
      const products = await response.json();
      console.log('Products fetched:', products);

      const normalizedQuery = query.toLowerCase().trim();
      const filtered = products.filter(product => {
        const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
        const categoryMatch = product.category.toLowerCase().includes(normalizedQuery);
        console.log(`Checking product: ${product.name}, nameMatch: ${nameMatch}, categoryMatch: ${categoryMatch}`);
        return nameMatch || categoryMatch;
      });

      console.log('Filtered products:', filtered);
      setSearchResults(filtered);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <NotificationProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header onSearch={handleSearch} />
              <Notification />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<MainLayout />} />
                  <Route path="/search" element={<SearchResults products={searchResults} />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/mypurchases" element={<MyPurchases />} />
                  <Route path="/categories" element={<CategoriesSection />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/offers" element={<Offers />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </NotificationProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
