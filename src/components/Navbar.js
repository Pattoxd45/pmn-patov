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
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'relative',
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link 
          to="/inicio" 
          style={{ 
            color: theme === 'dark' ? '#fff' : '#333',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease',
            ':hover': {
              backgroundColor: theme === 'dark' ? '#444' : '#ddd'
            }
          }}
        >
          Inicio
        </Link>
        <Link 
          to="/dashboard" 
          style={{ 
            color: theme === 'dark' ? '#fff' : '#333',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
        >
          Panel
        </Link>
        <Link 
          to="/perfil" 
          style={{ 
            color: theme === 'dark' ? '#fff' : '#333',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
        >
          Perfil
        </Link>
        <Link 
          to="/configuracion" 
          style={{ 
            color: theme === 'dark' ? '#fff' : '#333',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
        >
          Configuración
        </Link>
        <Link 
          to="/solicitudes" 
          style={{ 
            color: theme === 'dark' ? '#fff' : '#333',
            textDecoration: 'none',
            fontWeight: '500',
            padding: '0.5rem',
            borderRadius: '4px',
            transition: 'all 0.2s ease'
          }}
        >
          Solicitudes
        </Link>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        {!isAuthenticated ? (
          <Link 
            to="/login" 
            style={{ 
              color: '#fff',
              backgroundColor: theme === 'dark' ? '#4dabf7' : '#1c7ed6',
              textDecoration: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              fontWeight: '500',
              transition: 'all 0.2s ease',
              ':hover': {
                backgroundColor: theme === 'dark' ? '#3d8bd6' : '#165baa'
              }
            }}
          >
            Iniciar sesión
          </Link>
        ) : (
          <>
            <span style={{ 
              fontWeight: '500',
              color: theme === 'dark' ? '#fff' : '#333',
              marginRight: '0.5rem'
            }}>
              Bienvenido, <strong>{userName || userEmail}</strong>
            </span>
            <button 
              onClick={logout} 
              style={{ 
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#c82333'
                }
              }}
            >
              Cerrar sesión
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;