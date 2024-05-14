import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Te ayudamos</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Libro de reclamaciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Atención por WhatsApp</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Centro de ayuda</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tipos de entrega</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Cambios y devoluciones</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Seguimiento de mi orden</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Boletas y facturas</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Política de prevención de delitos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Textos legales</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Inversionistas</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Canal de integridad - Integrity channel</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Sé parte de falabella.com</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Vende con nosotros</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Trabaja con nosotros</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Venta empresa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Únete a nuestros programas</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Novios Falabella</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">CMR Puntos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Pide tu CMR</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Cyber WOW 2024</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Hot Sale</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Black Friday</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Nuestras empresas</h3>
                        <ul>
                            <li><a href="#" className="text-gray-400 hover:text-white">Banco Falabella</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Seguros Falabella</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Saga Falabella</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Sodimac</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tottus</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Linio</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Tottus app</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Nuestra empresa</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm">
                        © TODOS LOS DERECHOS RESERVADOS
                        <br />
                        Falabella.com S.A.C. Av. Paseo de la República 3220, San Isidro, Perú
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
                <div className="text-gray-400 text-sm text-center mt-4">
                    <a href="#" className="hover:text-white">Términos y condiciones</a> | <a href="#" className="hover:text-white">Política de cookies</a> | <a href="#" className="hover:text-white">Política de privacidad</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
