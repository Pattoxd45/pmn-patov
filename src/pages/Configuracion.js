import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';

const Configuracion = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    setMensaje('Configuración actualizada correctamente (simulado)');
    setTimeout(() => setMensaje(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="card" style={{ padding: '2rem', maxWidth: '500px', margin: '2rem auto' }}>
      <h1>Configuración de Usuario</h1>

      <p><strong>Tema actual:</strong> {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
      <button
        className="btn"
        onClick={toggleTheme}
        style={{
          marginBottom: '1rem',
          backgroundColor: theme === 'light' ? '#222' : '#eee',
          color: theme === 'light' ? '#fff' : '#000',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
      </button>

      <hr style={{ margin: '1.5rem 0' }} />

      <form onSubmit={handleGuardar} style={{ marginBottom: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nuevo Correo</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nueva Contraseña</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Guardar Cambios
        </button>
      </form>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

      <button
        onClick={handleLogout}
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '1rem'
        }}
      >
        Cerrar Sesión
      </button>

      <br /><br />
      <Link to="/dashboard">Volver al Dashboard</Link>

      <hr style={{ margin: '1.5rem 0' }} />
      <p style={{ fontStyle: 'italic' }}>
        Próximamente podrás cambiar tu nombre, correo o contraseña con funcionalidad real.
      </p>
    </div>
  );
};

export default Configuracion;
