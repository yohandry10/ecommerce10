import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Acerca de Nosotros</h1>
        <p className="text-gray-700 mb-4">
          Somos una empresa dedicada a ofrecer los mejores productos a nuestros clientes. Nuestra misión es proporcionar
          una experiencia de compra excepcional y un servicio al cliente de alta calidad.
        </p>
        <p className="text-gray-700 mb-4">
          Fundada en [año], hemos crecido rápidamente gracias a la confianza y lealtad de nuestros clientes. Nos
          esforzamos por mantenernos a la vanguardia de la industria y siempre buscamos maneras de mejorar y expandir
          nuestra oferta de productos y servicios.
        </p>
        <p className="text-gray-700 mb-4">
          Gracias por elegirnos. Si tiene alguna pregunta o comentario, no dude en ponerse en contacto con nosotros.
        </p>
      </div>
    </div>
  );
};

export default About;
