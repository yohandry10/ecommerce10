import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Inicio de sesión exitoso');
      navigate('/');  // Redirigir a la página principal
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Iniciar sesión</h1>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full px-4 py-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
