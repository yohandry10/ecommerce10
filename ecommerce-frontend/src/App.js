import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import CategoriesSection from './componentes/Categories/CategoriesSection'; 
import Products from './componentes/Products/Products';
import ProductDetail from './componentes/Products/ProductDetail';
import Footer from './componentes/Footer/Footer';
import Search from './componentes/Search/Search';
import Login from './componentes/Login/Login';
import Register from './componentes/Register/Register';
import MyPurchases from './componentes/MyPurchases/MyPurchases';
import Cart from './componentes/Cart/Cart';
import Profile from './componentes/Profile/Profile';
import Offers from './componentes/Offers/Offers';
import { CartProvider } from './componentes/context/CartContext';
import './index.css';

const products = [
  { id: 1, name: 'Smart TV 55" Crystal 4K UHD', price: '$1,399', image: 'https://via.placeholder.com/300', description: 'Descripción del producto 1' },
  { id: 2, name: 'TCL 65" QLED 4K Google TV', price: '$1,599', image: 'https://via.placeholder.com/300', description: 'Descripción del producto 2' },
  // Otros productos destacados aquí
];

const categories = [
  {
    name: 'Deportivo',
    portada: '/imagenes/deportivo/portada_deportivo.webp',
    products: [
      { id: 3, name: 'Producto Deportivo 1', price: '$99', image: '/imagenes/deportivo/deportivo1.webp', description: 'Descripción del producto deportivo 1' },
      { id: 4, name: 'Producto Deportivo 2', price: '$199', image: '/imagenes/deportivo/deportivo2.webp', description: 'Descripción del producto deportivo 2' },
      { id: 5, name: 'Producto Deportivo 3', price: '$299', image: '/imagenes/deportivo/deportivo3.webp', description: 'Descripción del producto deportivo 3' },
      { id: 6, name: 'Producto Deportivo 4', price: '$399', image: '/imagenes/deportivo/deportivo4.webp', description: 'Descripción del producto deportivo 4' },
      { id: 7, name: 'Producto Deportivo 5', price: '$499', image: '/imagenes/deportivo/deportivo5.webp', description: 'Descripción del producto deportivo 5' },
      { id: 8, name: 'Producto Deportivo 6', price: '$599', image: '/imagenes/deportivo/deportivo6.webp', description: 'Descripción del producto deportivo 6' },
      { id: 9, name: 'Producto Deportivo 7', price: '$699', image: '/imagenes/deportivo/deportivo7.webp', description: 'Descripción del producto deportivo 7' },
      { id: 10, name: 'Producto Deportivo 8', price: '$799', image: '/imagenes/deportivo/deportivo8.webp', description: 'Descripción del producto deportivo 8' }
    ],
  },
  {
    name: 'Polos',
    portada: '/imagenes/polos/polos_portada.webp',
    products: [
      { id: 11, name: 'Polo 1', price: '$29', image: '/imagenes/polos/polos1.webp', description: 'Descripción del polo 1' },
      { id: 12, name: 'Polo 2', price: '$39', image: '/imagenes/polos/polos2.webp', description: 'Descripción del polo 2' },
      { id: 13, name: 'Polo 3', price: '$49', image: '/imagenes/polos/polos3.webp', description: 'Descripción del polo 3' },
      { id: 14, name: 'Polo 4', price: '$59', image: '/imagenes/polos/polos4.webp', description: 'Descripción del polo 4' },
      { id: 15, name: 'Polo 5', price: '$69', image: '/imagenes/polos/polos5.webp', description: 'Descripción del polo 5' },
      { id: 16, name: 'Polo 6', price: '$79', image: '/imagenes/polos/polos6.webp', description: 'Descripción del polo 6' },
      { id: 17, name: 'Polo 7', price: '$89', image: '/imagenes/polos/polos7.webp', description: 'Descripción del polo 7' },
      { id: 18, name: 'Polo 8', price: '$99', image: '/imagenes/polos/polos8.webp', description: 'Descripción del polo 8' }
    ],
  },
  {
    name: 'Televisores',
    portada: '/imagenes/televisores/tv_portada.webp',
    products: [
      { id: 19, name: 'TV 1', price: '$499', image: '/imagenes/televisores/tv1.webp', description: 'Descripción del TV 1' },
      { id: 20, name: 'TV 2', price: '$599', image: '/imagenes/televisores/tv2.webp', description: 'Descripción del TV 2' },
      { id: 21, name: 'TV 3', price: '$699', image: '/imagenes/televisores/tv3.webp', description: 'Descripción del TV 3' },
      { id: 22, name: 'TV 4', price: '$799', image: '/imagenes/televisores/tv4.webp', description: 'Descripción del TV 4' },
      { id: 23, name: 'TV 5', price: '$899', image: '/imagenes/televisores/tv5.webp', description: 'Descripción del TV 5' },
      { id: 24, name: 'TV 6', price: '$999', image: '/imagenes/televisores/tv6.webp', description: 'Descripción del TV 6' },
      { id: 25, name: 'TV 7', price: '$1099', image: '/imagenes/televisores/tv7.webp', description: 'Descripción del TV 7' },
      { id: 26, name: 'TV 8', price: '$1199', image: '/imagenes/televisores/tv8.webp', description: 'Descripción del TV 8' },
      { id: 27, name: 'TV 9', price: '$1299', image: '/imagenes/televisores/tv9.jpg', description: 'Descripción del TV 9' },
      { id: 28, name: 'TV 10', price: '$1399', image: '/imagenes/televisores/tv10.jpg', description: 'Descripción del TV 10' }
    ],
  },
  {
    name: 'Vestuario Infantil',
    portada: '/imagenes/vestuario_infantil/vestuario_infantil.webp',
    products: [
      { id: 29, name: 'Vestuario Infantil 1', price: '$19', image: '/imagenes/vestuario_infantil/niño1.webp', description: 'Descripción del vestuario infantil 1' },
      { id: 30, name: 'Vestuario Infantil 2', price: '$29', image: '/imagenes/vestuario_infantil/niño2.webp', description: 'Descripción del vestuario infantil 2' },
      { id: 31, name: 'Vestuario Infantil 3', price: '$39', image: '/imagenes/vestuario_infantil/niño3.webp', description: 'Descripción del vestuario infantil 3' },
      { id: 32, name: 'Vestuario Infantil 4', price: '$49', image: '/imagenes/vestuario_infantil/niño4.webp', description: 'Descripción del vestuario infantil 4' },
      { id: 33, name: 'Vestuario Infantil 5', price: '$59', image: '/imagenes/vestuario_infantil/niño5.webp', description: 'Descripción del vestuario infantil 5' },
      { id: 34, name: 'Vestuario Infantil 6', price: '$69', image: '/imagenes/vestuario_infantil/niño6.webp', description: 'Descripción del vestuario infantil 6' },
      { id: 35, name: 'Vestuario Infantil 7', price: '$79', image: '/imagenes/vestuario_infantil/niño7.webp', description: 'Descripción del vestuario infantil 7' },
      { id: 36, name: 'Vestuario Infantil 8', price: '$89', image: '/imagenes/vestuario_infantil/niño8.webp', description: 'Descripción del vestuario infantil 8' },
      { id: 37, name: 'Vestuario Infantil 9', price: '$99', image: '/imagenes/vestuario_infantil/niño9.webp', description: 'Descripción del vestuario infantil 9' }
    ],
  },
  {
    name: 'Vestuario Mujer',
    portada: '/imagenes/vestuariomujer/vestuariomujer_portada.webp',
    products: [
      { id: 38, name: 'Vestuario Mujer 1', price: '$49', image: '/imagenes/vestuariomujer/mujer1.webp', description: 'Descripción del vestuario mujer 1' },
      { id: 39, name: 'Vestuario Mujer 2', price: '$59', image: '/imagenes/vestuariomujer/mujer2.webp', description: 'Descripción del vestuario mujer 2' },
      { id: 40, name: 'Vestuario Mujer 3', price: '$69', image: '/imagenes/vestuariomujer/mujer3.webp', description: 'Descripción del vestuario mujer 3' },
      { id: 41, name: 'Vestuario Mujer 4', price: '$79', image: '/imagenes/vestuariomujer/mujer4.webp', description: 'Descripción del vestuario mujer 4' },
      { id: 42, name: 'Vestuario Mujer 5', price: '$89', image: '/imagenes/vestuariomujer/mujer5.webp', description: 'Descripción del vestuario mujer 5' },
      { id: 43, name: 'Vestuario Mujer 6', price: '$99', image: '/imagenes/vestuariomujer/mujer6.webp', description: 'Descripción del vestuario mujer 6' },
      { id: 44, name: 'Vestuario Mujer 7', price: '$109', image: '/imagenes/vestuariomujer/mujer7.webp', description: 'Descripción del vestuario mujer 7' },
      { id: 45, name: 'Vestuario Mujer 8', price: '$119', image: '/imagenes/vestuariomujer/mujer8.webp', description: 'Descripción del vestuario mujer 8' },
      { id: 46, name: 'Vestuario Mujer 9', price: '$129', image: '/imagenes/vestuariomujer/mujer9.webp', description: 'Descripción del vestuario mujer 9' },
      { id: 47, name: 'Vestuario Mujer 10', price: '$139', image: '/imagenes/vestuariomujer/mujer10.webp', description: 'Descripción del vestuario mujer 10' },
      { id: 48, name: 'Vestuario Mujer 11', price: '$149', image: '/imagenes/vestuariomujer/mujer11.webp', description: 'Descripción del vestuario mujer 11' },
      { id: 49, name: 'Vestuario Mujer 12', price: '$159', image: '/imagenes/vestuariomujer/mujer12.webp', description: 'Descripción del vestuario mujer 12' }
    ],
  }
];

const allProducts = [...products, ...categories.flatMap(category => category.products)];

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mypurchases" element={<MyPurchases />} />
            <Route path="/categories" element={<CategoriesSection />} />
            <Route path="/product/:id" element={<ProductDetail products={allProducts} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

const MainLayout = () => (
  <>
    <Banner />
    <CategoriesSection />
    <Products />
    <Footer />
  </>
);

export default App;
