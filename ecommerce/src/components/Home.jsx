import React from 'react';
import HeroSlider from './hero/HeroSlider';
import CategoryCard from './CategoryCard';
import Footer from './Footer';
import FeaturedProductCard from './cart/FeaturedProductCard'; // Importa el nuevo componente

function Home() {
  const categories = [
    { name: "Electrónica", image: "url_to_image" },
    { name: "Hogar", image: "url_to_image" },
    { name: "Ropa", image: "url_to_image" }
  ];

  const featuredProducts = [
    { name: "Producto 1", description: "Descripción breve", price: "$20.00", image: "url_to_image" },
    { name: "Producto 2", description: "Descripción breve", price: "$30.00", image: "url_to_image" }
  ];

  const handleAddToCart = (product) => {
    // Aquí puedes manejar la lógica para agregar el producto al carrito
    console.log(`Añadir al carrito: ${product.name}`);
  };

  return (
    <div>
      <HeroSlider />
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(category => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-3">Productos Destacados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredProducts.map(product => (
              <FeaturedProductCard key={product.name} product={product} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
