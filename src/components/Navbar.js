import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#eee', padding: '1rem' }}>
      <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/perfil" style={{ marginRight: '1rem' }}>Perfil</Link>
      <Link to="/configuracion" style={{ marginRight: '1rem' }}>Configuración</Link>
      <Link to="/" style={{ color: 'red' }}>Cerrar sesión</Link>
    </nav>
  );
}

export default Navbar;
