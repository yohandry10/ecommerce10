import React from 'react';
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

const allProducts = [
  { id: 1, name: 'Producto Deportivo 1', price: '$99', image: 'https://via.placeholder.com/300', description: 'Descripción del producto deportivo 1' },
  { id: 2, name: 'Producto Deportivo 2', price: '$199', image: 'https://via.placeholder.com/300', description: 'Descripción del producto deportivo 2' },
  { id: 3, name: 'Producto Deportivo 3', price: '$299', image: 'https://via.placeholder.com/300', description: 'Descripción del producto deportivo 3' },
  { id: 4, name: 'Polo 1', price: '$29', image: 'https://via.placeholder.com/300', description: 'Descripción del polo 1' },
  { id: 5, name: 'Polo 2', price: '$39', image: 'https://via.placeholder.com/300', description: 'Descripción del polo 2' },
  { id: 6, name: 'Polo 3', price: '$49', image: 'https://via.placeholder.com/300', description: 'Descripción del polo 3' },
  { id: 7, name: 'TV 1', price: '$499', image: 'https://via.placeholder.com/300', description: 'Descripción del TV 1' },
  { id: 8, name: 'TV 2', price: '$599', image: 'https://via.placeholder.com/300', description: 'Descripción del TV 2' },
  { id: 9, name: 'TV 3', price: '$699', image: 'https://via.placeholder.com/300', description: 'Descripción del TV 3' }
];

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <NotificationProvider>
          <Router>
            <div className="flex flex-col min-h-screen">
              <Header />
              <Notification />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<MainLayout />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/mypurchases" element={<MyPurchases />} />
                  <Route path="/categories" element={<CategoriesSection />} />
                  <Route path="/product/:id" element={<ProductDetail products={allProducts} reviews={[]} />} />
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
