import React from 'react';
import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };

  return (
    <div className="hero-slider max-w-screen-lg mx-auto">
      <Slider {...settings}>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image1.jpg')" }}>
          <div className="bg-gray-900 bg-opacity-50 flex items-center justify-center h-full">
            <div className="text-center text-white p-4">
              <h2>Nueva Colección de Verano</h2>
              <p>Descubre los estilos más frescos para el calor.</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
        <div className="h-64 bg-cover bg-center" style={{ backgroundImage: "url('/path/to/image2.jpg')" }}>
          <div className="bg-gray-900 bg-opacity-50 flex items-center justify-center h-full">
            <div className="text-center text-white p-4">
              <h2>Ofertas Especiales</h2>
              <p>Aprovecha descuentos exclusivos esta semana.</p>
              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Ver ofertas
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
