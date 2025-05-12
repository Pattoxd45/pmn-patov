import { useTheme } from '../context/ThemeContext';
import imagen1 from '../Images/1.jpg';

function Inicio() {
  const { theme } = useTheme();

  return (
    <div style={{
      maxWidth: '800px',
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      textAlign: 'center'
    }}>
      <h1 style={{
        marginBottom: '1.5rem',
        fontSize: '2.5rem',
        color: theme === 'dark' ? '#4dabf7' : '#1c7ed6'
      }}>
        Bienvenido a <span style={{ color: theme === 'dark' ? '#74b9ff' : '#1a73e8' }}>Attendify</span>
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '2rem',
        lineHeight: '1.6'
      }}>
        Administra fácilmente tus <strong style={{ color: theme === 'dark' ? '#74b9ff' : '#1a73e8' }}>solicitudes de vacaciones</strong> y permisos.
      </p>
      
      <div style={{
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        margin: '0 auto',
        maxWidth: '600px'
      }}>
        <img 
          src={imagen1} 
          alt="Vacaciones" 
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            filter: theme === 'dark' ? 'brightness(0.8)' : 'none',
            transition: 'filter 0.3s ease'
          }} 
        />
      </div>
      
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'left'
      }}>
        <h2 style={{
          color: theme === 'dark' ? '#74b9ff' : '#1a73e8',
          marginTop: '0'
        }}>
          ¿Qué puedes hacer con Attendify?
        </h2>
        <ul style={{
          paddingLeft: '1.5rem',
          lineHeight: '1.8'
        }}>
          <li>Solicitar días de vacaciones</li>
          <li>Gestionar permisos especiales</li>
          <li>Revisar tu historial de solicitudes</li>
          <li>Configurar tus preferencias personales</li>
        </ul>
      </div>
    </div>
  );
}

export default Inicio;