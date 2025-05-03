import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

function Configuracion() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleGuardar = (e) => {
    e.preventDefault();
    setMensaje('Configuración actualizada correctamente (simulado)');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>Configuración de Usuario</h1>
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

      <button onClick={handleLogout} style={{ backgroundColor: 'red', color: 'white', padding: '0.5rem', border: 'none' }}>
        Cerrar Sesión
      </button>

      <br /><br />
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default Configuracion;
