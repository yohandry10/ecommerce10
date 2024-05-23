import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p>Dirección: Calle Principal 123</p>
            <p>Teléfono: +123 456 7890</p>
            <p>Email: contacto@ecommerce.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul>
              <li><a href="/" className="hover:underline">Inicio</a></li>
              <li><a href="/products" className="hover:underline">Productos</a></li>
              <li><a href="/about" className="hover:underline">Nosotros</a></li>
              <li><a href="/contact" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <ul className="flex space-x-4">
              {/* Utilizar button si no se tienen enlaces específicos */}
              <li><button className="hover:text-blue-400 text-white">Facebook</button></li>
              <li><button className="hover:text-blue-500 text-white">Twitter</button></li>
              <li><button className="hover:text-pink-500 text-white">Instagram</button></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-sm">
          &copy; 2024 Tienda Virtual. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
