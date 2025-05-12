import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

function PerfilUsuario() {
  const { userEmail, userName } = useAuth();
  const { theme } = useTheme();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem('solicitudes');
    if (datos) {
      setSolicitudes(JSON.parse(datos));
    }
  }, []);

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '2rem',
        color: theme === 'dark' ? '#4dabf7' : '#1c7ed6'
      }}>
        Perfil de Usuario
      </h1>

      {/* Sección de información del usuario */}
      <div style={{
        backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          borderBottom: `2px solid ${theme === 'dark' ? '#4dabf7' : '#1c7ed6'}`,
          paddingBottom: '0.5rem',
          marginBottom: '1rem'
        }}>
          Información Personal
        </h2>
        
        <div style={{ display: 'flex', marginBottom: '1rem' }}>
          <div style={{ flex: 1 }}>
            <p style={{ margin: '0.5rem 0' }}><strong>Nombre:</strong></p>
            <p style={{ margin: '0.5rem 0' }}><strong>Correo:</strong></p>
          </div>
          <div style={{ flex: 2 }}>
            <p style={{ margin: '0.5rem 0' }}>{userName || 'No especificado'}</p>
            <p style={{ margin: '0.5rem 0' }}>{userEmail}</p>
          </div>
        </div>
      </div>

      {/* Sección de resumen de solicitudes */}
      <div style={{
        backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          borderBottom: `2px solid ${theme === 'dark' ? '#4dabf7' : '#1c7ed6'}`,
          paddingBottom: '0.5rem',
          marginBottom: '1rem'
        }}>
          Resumen de Solicitudes
        </h2>
        
        <p style={{
          backgroundColor: theme === 'dark' ? '#555' : '#e9ecef',
          padding: '0.75rem',
          borderRadius: '4px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
          Total de solicitudes enviadas: {solicitudes.length}
        </p>
      </div>

      {/* Sección de últimas solicitudes */}
      <div style={{
        backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{
          borderBottom: `2px solid ${theme === 'dark' ? '#4dabf7' : '#1c7ed6'}`,
          paddingBottom: '0.5rem',
          marginBottom: '1rem'
        }}>
          Últimas Solicitudes
        </h2>
        
        {solicitudes.length === 0 ? (
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
            No hay solicitudes recientes.
          </p>
        ) : (
          <div style={{ display: 'grid', gap: '1rem' }}>
            {solicitudes.slice(-3).reverse().map((s) => (
              <div key={s.id} style={{
                backgroundColor: theme === 'dark' ? '#555' : '#fff',
                padding: '1rem',
                borderRadius: '6px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}>
                <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>
                  Tipo: <span style={{ fontWeight: 'normal' }}>{s.tipo}</span>
                </p>
                <p style={{ margin: '0.25rem 0' }}>
                  Fecha: <span style={{ fontWeight: 'normal' }}>{s.fecha}</span>
                </p>
                <p style={{ margin: '0.25rem 0' }}>
                  Motivo: <span style={{ fontWeight: 'normal' }}>{s.motivo}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botones de acción */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem'
      }}>
        <Link 
          to="/configuracion" 
          style={{
            backgroundColor: theme === 'dark' ? '#4dabf7' : '#1c7ed6',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
            flex: 1,
            marginRight: '0.5rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = theme === 'dark' ? '#339af0' : '#1971c2'}
          onMouseOut={(e) => e.target.style.backgroundColor = theme === 'dark' ? '#4dabf7' : '#1c7ed6'}
        >
          Ir a Configuración
        </Link>
        
        <Link 
          to="/dashboard" 
          style={{
            backgroundColor: theme === 'dark' ? '#495057' : '#adb5bd',
            color: '#fff',
            padding: '0.75rem 1.5rem',
            borderRadius: '6px',
            textDecoration: 'none',
            textAlign: 'center',
            fontWeight: 'bold',
            transition: 'background-color 0.2s',
            flex: 1,
            marginLeft: '0.5rem'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = theme === 'dark' ? '#343a40' : '#868e96'}
          onMouseOut={(e) => e.target.style.backgroundColor = theme === 'dark' ? '#495057' : '#adb5bd'}
        >
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}

export default PerfilUsuario;