import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const MainLayout = () => (
  <>
    <Banner />
    <Products />
    <AdditionalSections />
  </>
);

const AdditionalSections = () => (
  <>
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Elige entre nuestros servicios y experiencias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <ServiceCard title="Novios Falabella" description="Te acompañamos a celebrar tu gran día con beneficios exclusivos." />
          <ServiceCard title="Club Deco" description="Queremos ayudarte a cambiar o renovar tu espacio." />
          <ServiceCard title="Venta Empresa" description="Conoce nuestros productos especiales para tu negocio." />
          <ServiceCard title="Garantía Extendida" description="Conoce cómo proteger tus productos comprados en Falabella." />
          <ServiceCard title="Depilación con Benefit" description="Conoce el Brow Mapping, diseñado para crear la forma perfecta para tus cejas." />
        </div>
      </div>
    </div>

    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Encuentra todo en un solo lugar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FooterLink title="Productos Populares" links={["Muebles", "Mamparas", "Refrigeradoras side by side", "Lavajillas", "Nintendo Switch", "Noche de sala", "Planchas", "Almohadas", "Vestidos", "Televisor LED"]} />
          <FooterLink title="Categorías Destacadas" links={["Zapatillas", "Moda mujer", "Celulares", "Smartwatch", "Electrohogar", "Laptops", "Vajillas", "Licuadoras", "Audífonos", "Refrigerador"]} />
          <FooterLink title="Marcas favoritas" links={["Mango", "Cartera", "Nike", "Adidas", "Oster", "Philips", "Samsung", "LG", "The Ordinary", "Sylvia"]} />
          <FooterLink title="Nuestras empresas" links={["Airpods", "Xiaomi 12 Pro", "Nike Air Force 1", "iPhone 14", "Laptop gamer", "Samsung a53", "Alexa", "Motorola Moto g22", "Samsung Galaxy a54", "Cyber Wow"]} />
        </div>
      </div>
    </div>
  </>
);

const ServiceCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <img className="w-16 h-16 mx-auto mb-4" src="https://via.placeholder.com/64" alt={title} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FooterLink = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link}>
          <a href="#" className="text-blue-500 hover:underline">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default MainLayout;
