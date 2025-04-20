import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#eee', padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Link to="/">Inicio</Link>
      <Link to="/dashboard">Panel</Link>
      <Link to="/perfil">Empleados</Link>
      <Link to="/configuracion">Reportes</Link>
      <Link to="/login" style={{ color: 'blue' }}>Login</Link>
    </nav>
  );
}

export default Navbar;
