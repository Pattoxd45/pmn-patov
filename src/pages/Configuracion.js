import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';
import imagen3 from '../Images/3.jpg';

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
    <div className="card-con-fondo" style={{ maxWidth: '500px', margin: '2rem auto' }}>
      <img src={imagen3} alt="Fondo configuración" className="imagen-fondo" />
      <div className="card-contenido">
        <h1>Configuración de Usuario</h1>

        <p><strong>Tema actual:</strong> {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
        <button
          className="btn"
          onClick={toggleTheme}
          style={{
            marginBottom: '1rem',
            backgroundColor: theme === 'light' ? '#222' : '#eee',
            color: theme === 'light' ? '#fff' : '#000',
          }}
        >
          Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </button>

        <hr style={{ margin: '1.5rem 0' }} />

        <form onSubmit={handleGuardar} style={{ marginBottom: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nuevo Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@empresa.com"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nueva Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button type="submit" style={{ backgroundColor: '#28a745' }}>
            Guardar Cambios
          </button>
        </form>

        {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#dc3545',
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
    </div>
  );
};

export default Configuracion;