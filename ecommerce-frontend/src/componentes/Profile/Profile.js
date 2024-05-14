import React, { useState, useEffect } from 'react';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/login'); // Redirige a la página de inicio de sesión si no hay un usuario autenticado
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Mi perfil</h1>
      {user ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4"><strong>Email:</strong> {user.email}</p>
          <p className="mb-4"><strong>UID:</strong> {user.uid}</p>
          <button
            onClick={() => auth.signOut().then(() => navigate('/'))}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <p>No hay información de usuario disponible.</p>
      )}
    </div>
  );
};

export default Profile;
