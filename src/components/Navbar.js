import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { isAuthenticated, userEmail, userName, logout } = useAuth();
  const { theme } = useTheme();

  return (
    <nav style={{ 
      background: theme === 'dark' ? '#333' : '#eee',
      padding: '1rem',
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Link 
        to="/inicio" 
        style={{ color: theme === 'dark' ? '#fff' : '#333' }}
      >
        Inicio
      </Link>
      <Link 
        to="/dashboard" 
        style={{ color: theme === 'dark' ? '#fff' : '#333' }}
      >
        Panel
      </Link>
      <Link 
        to="/perfil" 
        style={{ color: theme === 'dark' ? '#fff' : '#333' }}
      >
        Perfil
      </Link>
      <Link 
        to="/configuracion" 
        style={{ color: theme === 'dark' ? '#fff' : '#333' }}
      >
        Configuración
      </Link>
      <Link 
        to="/solicitudes" 
        style={{ color: theme === 'dark' ? '#fff' : '#333' }}
      >
        Solicitudes
      </Link>
      {!isAuthenticated && (
        <Link 
          to="/login" 
          style={{ color: theme === 'dark' ? '#4dabf7' : '#1c7ed6' }}
        >
          Login
        </Link>
      )}
      {isAuthenticated && (
        <>
          <span style={{ 
            fontWeight: 'bold',
            color: theme === 'dark' ? '#fff' : '#333'
          }}>
            Bienvenido, {userName || userEmail}
          </span>
          <button 
            onClick={logout} 
            style={{ 
              marginLeft: '1rem',
              backgroundColor: '#dc3545',
              color: '#fff',
              border: 'none',
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cerrar sesión
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;