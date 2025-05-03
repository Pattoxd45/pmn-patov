import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { isAuthenticated, userEmail, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ background: '#eee', padding: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
      <Link to="/inicio">Inicio</Link>
      <Link to="/dashboard">Panel</Link>
      <Link to="/perfil">Perfil</Link>
      <Link to="/configuracion">Configuración</Link>
      <Link to="/solicitudes">Solicitudes</Link>
      {!isAuthenticated && <Link to="/login" style={{ color: 'blue' }}>Login</Link>}
      <button onClick={toggleTheme} style={{ marginLeft: 'auto' }}>
        Tema: {theme === 'light' ? '🌞 Claro' : '🌙 Oscuro'}
      </button>
      {isAuthenticated && (
        <>
          <span style={{ fontWeight: 'bold' }}>Bienvenido, {userEmail}</span>
          <button onClick={logout} style={{ marginLeft: '1rem' }}>Cerrar sesión</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;