import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { isAuthenticated, userEmail } = useAuth();

  return (
    <nav style={{ background: '#eee', padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Link to="/inicio">Inicio</Link>
      <Link to="/dashboard">Panel</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/configuracion">Configuración</Link>
      <Link to="/login" style={{ color: 'blue' }}>Login</Link>
      <Link to="/solicitudes">Solicitudes</Link>
      {isAuthenticated && <span style={{ marginLeft: 'auto', fontWeight: 'bold' }}>Bienvenido, {userEmail}</span>}
    </nav>
  );
}

export default Navbar;