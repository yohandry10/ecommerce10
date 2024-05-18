// src/components/Banner/Banner.js
import React, { useState } from 'react';

const Banner = () => {
  const slides = [
    {
      title: "+Cuidado +Belleza",
      description: "Usa tus vales y paga hasta la mitad de tus compras. En vestuario, calzado, accesorios, deporte y ropa de cama.",
      image: "https://via.placeholder.com/1920x1080",
      buttonText: "¡Ir a productos!",
      buttonLink: "#",
    },
    {
      title: "+Ofertas Especiales",
      description: "Descubre nuestras ofertas exclusivas en una variedad de productos.",
      image: "https://via.placeholder.com/1920x1080",
      buttonText: "¡Ver ofertas!",
      buttonLink: "#",
    },
    {
      title: "+Nuevas Colecciones",
      description: "Explora las últimas colecciones de moda para esta temporada.",
      image: "https://via.placeholder.com/1920x1080",
      buttonText: "¡Explorar ahora!",
      buttonLink: "#",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative bg-gray-100 w-full">
      <div className="container mx-auto py-12 px-6 lg:px-12">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 flex flex-col justify-center items-start text-left p-8">
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-700 mb-6">
                    {slide.description}
                  </p>
                  <a
                    href={slide.buttonLink}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition duration-300"
                  >
                    {slide.buttonText}
                  </a>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
                  <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            &#9664;
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
