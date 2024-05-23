import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../cart/CartContext'; // Importamos el hook useCart

function Navbar() {
    const [activeMenu, setActiveMenu] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { state } = useCart(); // Obtenemos el estado del carrito desde el contexto

    const categories = {
        'Ropa': ['Calzado', 'Camisas', 'Pantalones'],
        'Hogar': ['Herramientas', 'Pinturas', 'Muebles'],
        'Tecnología': ['Celulares', 'Laptops', 'Equipos de sonido']
    };

    const toggleSubmenu = (category) => {
        if (activeMenu === category) {
            setActiveMenu('');
        } else {
            setActiveMenu(category);
        }
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header>
            <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <button onClick={toggleSidebar} className="lg:hidden focus:outline-none">
                        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    <Link to="/" className="hover:text-blue-300">Inicio</Link>
                </div>
                <ul className="hidden lg:flex space-x-8">
                    {Object.entries(categories).map(([category, subcategories]) => (
                        <li key={category} className="relative group">
                            <button onClick={() => toggleSubmenu(category)} className="hover:text-blue-300 flex items-center">
                                {category} {activeMenu === category ? <FaChevronDown /> : <FaChevronRight />}
                            </button>
                            {activeMenu === category && (
                                <ul className="absolute left-0 w-48 bg-gray-700 mt-2 p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                                    {subcategories.map((sub) => (
                                        <li key={sub}>
                                            <Link to={`/category/${category.toLowerCase()}/${sub.toLowerCase()}`}
                                                className="block p-2 hover:bg-gray-600 rounded">
                                                {sub}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                    <li>
                        <Link to="/cart" className="hover:text-blue-300 flex items-center">
                            <FaShoppingCart />
                            {state.items.length > 0 && ( // Mostramos el contador solo si hay elementos en el carrito
                                <span className="bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center ml-1">
                                    {state.items.length}
                                </span>
                            )}
                        </Link>
                    </li>
                    <li>
                        <Link to="/login" className="hover:text-blue-300">Iniciar Sesión</Link>
                    </li>
                    <li>
                        <Link to="/register" className="hover:text-blue-300">Registrarse</Link>
                    </li>
                    <li>
                        <Link to="/manage/products" className="hover:text-blue-300">Gestionar Productos</Link>
                    </li>
                </ul>
            </nav>
            ...
        </header>
    );
}

export default Navbar;
