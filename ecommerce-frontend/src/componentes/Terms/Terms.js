import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Términos y Condiciones</h1>
        <p className="text-gray-700 mb-4">
          Bienvenido a nuestra tienda en línea. Al utilizar nuestros servicios, usted acepta los siguientes términos y
          condiciones. Por favor, léalos detenidamente.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. General</h2>
        <p className="text-gray-700 mb-4">
          Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones, todas las
          leyes y regulaciones aplicables, y acepta que es responsable de cumplir con cualquier ley local aplicable.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Uso del Sitio</h2>
        <p className="text-gray-700 mb-4">
          Usted tiene permiso para acceder temporalmente a este sitio web para su uso personal, no comercial. No se
          permite la modificación, copia, distribución, transmisión, exhibición, reproducción, publicación, concesión de
          licencias, creación de trabajos derivados, transferencia o venta de información, software, productos o
          servicios obtenidos de este sitio web.
        </p>
        
      </div>
    </div>
  );
};

export default Terms;
