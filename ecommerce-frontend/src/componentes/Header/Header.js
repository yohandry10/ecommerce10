import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart, FaBars, FaSignInAlt, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa';
import { useCart } from '../contexts/CartContext';
import { auth } from '../../firebaseConfig';
import LocationModal from '../LocationModal/LocationModal';

const Header = () => {
  const { cartCount } = useCart();
  const [user, setUser] = useState(null);
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLocationSave = (newLocation) => {
    setLocation(newLocation);
    alert(`Ubicación guardada: ${newLocation}`);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-green-600 text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="https://via.placeholder.com/50" alt="Logo" className="w-10 h-10 mr-2" />
            Falabella.com
          </Link>
        </div>
        {/* Categories Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/categories" className="flex items-center text-gray-700 hover:text-gray-900">
            <FaBars className="mr-2" />
            Categorías
          </Link>
        </div>
        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input 
            type="text" 
            placeholder="Buscar en Falabella.com" 
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:border-green-600"
          />
        </div>
        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <Link to="/profile" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaUserCircle className="mr-2" />
                Mi perfil
              </Link>
              <button
                onClick={() => auth.signOut()}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaSignInAlt className="mr-2" />
                Iniciar sesión
              </Link>
              <Link to="/register" className="flex items-center text-gray-700 hover:text-gray-900">
                <FaUserPlus className="mr-2" />
                Registrarse
              </Link>
            </>
          )}
          <Link to="/cart" className="flex items-center text-gray-700 hover:text-gray-900">
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="ml-1 text-sm bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
      {/* Sub-navbar */}
      <nav className="bg-gray-100">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900 px-4">Inicio</Link>
          <Link to="/offers" className="text-gray-700 hover:text-gray-900 px-4">Ofertas</Link>
          <Link to="/categories" className="text-gray-700 hover:text-gray-900 px-4">Categorías</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 px-4">Acerca de Nosotros</Link>
          <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-4">Contacto</Link>
          <Link to="/terms" className="text-gray-700 hover:text-gray-900 px-4">Términos y Condiciones</Link>
          <button
            onClick={() => setLocationModalOpen(true)}
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <FaMapMarkerAlt className="mr-2" />
            {location || 'Ingresa tu ubicación'}
          </button>
        </div>
      </nav>
      <LocationModal
        isOpen={isLocationModalOpen}
        onClose={() => setLocationModalOpen(false)}
        onSave={handleLocationSave}
      />
    </header>
  );
};

export default Header;
