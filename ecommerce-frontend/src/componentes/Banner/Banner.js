import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center py-12 px-6 lg:px-12">
        <div className="lg:w-1/2 flex flex-col justify-center items-start text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            +Cuidado +Belleza
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-6">
            Usa tus vales y paga hasta la mitad de tus compras. En vestuario, calzado, accesorios, deporte y ropa de cama.
          </p>
          <a href="#" className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition duration-300">
            ¡Ir a productos!
          </a>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img src="https://via.placeholder.com/500x500" alt="Banner" className="w-full lg:w-3/4 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
