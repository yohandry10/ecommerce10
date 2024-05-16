import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Contacto</h1>
        <p className="text-gray-700 mb-4">
          Si tiene alguna pregunta, comentario o necesita asistencia, no dude en ponerse en contacto con nosotros.
          Puede comunicarse con nuestro equipo de atención al cliente a través de los siguientes medios:
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Correo electrónico: contacto@tuempresa.com</li>
          <li>Teléfono: +1 (123) 456-7890</li>
          <li>Dirección: Calle Falsa 123, Ciudad, País</li>
        </ul>
        <p className="text-gray-700 mb-4">
          También puede completar el formulario de contacto a continuación y nos pondremos en contacto con usted lo antes
          posible.
        </p>
        <form>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
