import React, { useState, useContext } from 'react';
import { useAuth } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';

const Configuracion = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

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
    <div className="card" style={{ padding: '1rem' }}>
      <h1>Configuración de Usuario</h1>

      <p><strong>Tema actual:</strong> {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
      <button className="btn" onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
      </button>

      <hr style={{ margin: '1.5rem 0' }} />

      <form onSubmit={handleGuardar} style={{ marginBottom: '1rem' }}>
        <div>
          <label>Nuevo Correo</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Nueva Contraseña</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

      <button
        onClick={handleLogout}
        style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem', border: 'none' }}
      >
        Cerrar Sesión
      </button>

      <br /><br />
      <Link to="/dashboard">Volver al Dashboard</Link>

      <hr style={{ margin: '1.5rem 0' }} />
      <p>Próximamente podrás cambiar tu nombre, correo o contraseña con funcionalidad real.</p>
    </div>
  );
};

export default Configuracion;
