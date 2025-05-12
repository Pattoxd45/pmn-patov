import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import imagen2 from '../Images/2.jpg';

function Solicitudes() {
  const { theme } = useTheme();
  const [solicitudes, setSolicitudes] = useState(() => {
    const datosGuardados = localStorage.getItem('solicitudes');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [nuevaSolicitud, setNuevaSolicitud] = useState({
    tipo: '',
    fecha: '',
    motivo: '',
  });

  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    const datosGuardados = localStorage.getItem('solicitudes');

    if (datosGuardados) {
      setSolicitudes(JSON.parse(datosGuardados));
    } else {
      const datosEjemplo = [
        {
          id: 1,
          tipo: 'Vacaciones',
          fecha: '2025-06-15',
          motivo: 'Viaje familiar a la playa',
        },
        {
          id: 2,
          tipo: 'Permiso sin goce de sueldo',
          fecha: '2025-07-02',
          motivo: 'Trámite personal',
        },
      ];

      localStorage.setItem('solicitudes', JSON.stringify(datosEjemplo));
      setSolicitudes(datosEjemplo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  }, [solicitudes]);

  const handleChange = (e) => {
    setNuevaSolicitud({ ...nuevaSolicitud, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nuevaSolicitud.tipo || nuevaSolicitud.tipo.length < 3) {
      setMensaje('El tipo debe tener al menos 3 caracteres');
      setTimeout(() => setMensaje(''), 3000);
      return;
    }
    if (!nuevaSolicitud.motivo || nuevaSolicitud.motivo.length < 5) {
      setMensaje('El motivo debe tener al menos 5 caracteres');
      setTimeout(() => setMensaje(''), 3000);
      return;
    }
    if (new Date(nuevaSolicitud.fecha) < new Date()) {
      setMensaje('La fecha no puede ser pasada');
      setTimeout(() => setMensaje(''), 3000);
      return;
    }

    const nueva = { ...nuevaSolicitud, id: Date.now() };
    setSolicitudes([...solicitudes, nueva]);
    setNuevaSolicitud({ tipo: '', fecha: '', motivo: '' });
    setMensaje('¡Solicitud enviada con éxito!');
    setTimeout(() => setMensaje(''), 3000);
  };

  const eliminarSolicitud = (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta solicitud?');
    if (!confirmar) return;
    const actualizadas = solicitudes.filter((s) => s.id !== id);
    setSolicitudes(actualizadas);
    setMensaje('Solicitud eliminada correctamente');
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <main style={{
      padding: '2rem',
      position: 'relative',
      minHeight: 'calc(100vh - 120px)',
      backgroundImage: `url(${imagen2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Capa semitransparente para mejorar legibilidad */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        zIndex: 0
      }}></div>

      {/* Contenido principal */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          color: theme === 'dark' ? '#fff' : '#333',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 style={{
            textAlign: 'center',
            marginBottom: '2rem',
            color: theme === 'dark' ? '#4dabf7' : '#1c7ed6'
          }}>
            Solicitudes de Vacaciones
          </h1>

          {mensaje && (
            <div style={{
              backgroundColor: mensaje.includes('¡') ? 'rgba(40, 167, 69, 0.2)' : 'rgba(220, 53, 69, 0.2)',
              color: mensaje.includes('¡') ? '#28a745' : '#dc3545',
              padding: '0.75rem',
              borderRadius: '4px',
              marginBottom: '1rem',
              textAlign: 'center',
              border: `1px solid ${mensaje.includes('¡') ? '#28a745' : '#dc3545'}`
            }}>
              {mensaje}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{
            backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem'
          }}>
            <h2 style={{
              marginTop: 0,
              borderBottom: `2px solid ${theme === 'dark' ? '#4dabf7' : '#1c7ed6'}`,
              paddingBottom: '0.5rem'
            }}>
              Nueva Solicitud
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Tipo:</label>
              <input
                type="text"
                name="tipo"
                value={nuevaSolicitud.tipo}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ced4da',
                  backgroundColor: theme === 'dark' ? '#555' : '#fff',
                  color: theme === 'dark' ? '#fff' : '#333'
                }}
                placeholder="Ej: Vacaciones, Permiso médico"
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Fecha:</label>
              <input
                type="date"
                name="fecha"
                value={nuevaSolicitud.fecha}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ced4da',
                  backgroundColor: theme === 'dark' ? '#555' : '#fff',
                  color: theme === 'dark' ? '#fff' : '#333'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem' }}>Motivo:</label>
              <input
                type="text"
                name="motivo"
                value={nuevaSolicitud.motivo}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  border: '1px solid #ced4da',
                  backgroundColor: theme === 'dark' ? '#555' : '#fff',
                  color: theme === 'dark' ? '#fff' : '#333'
                }}
                placeholder="Describe el motivo de tu solicitud"
              />
            </div>
            
            <button 
              type="submit"
              style={{
                backgroundColor: '#28a745',
                color: '#fff',
                padding: '0.75rem 1.5rem',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
            >
              Enviar Solicitud
            </button>
          </form>

          <div>
            <h2 style={{
              borderBottom: `2px solid ${theme === 'dark' ? '#4dabf7' : '#1c7ed6'}`,
              paddingBottom: '0.5rem'
            }}>
              Mis Solicitudes ({solicitudes.length})
            </h2>
            
            {solicitudes.length === 0 ? (
              <div style={{
                backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
                padding: '1.5rem',
                borderRadius: '8px',
                textAlign: 'center',
                fontStyle: 'italic'
              }}>
                No hay solicitudes registradas.
              </div>
            ) : (
              <div style={{ display: 'grid', gap: '1rem' }}>
                {solicitudes.map((s) => (
                  <div 
                    key={s.id}
                    style={{
                      backgroundColor: theme === 'dark' ? '#444' : '#f8f9fa',
                      padding: '1.25rem',
                      borderRadius: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      marginBottom: '0.5rem'
                    }}>
                      <div>
                        <p style={{ 
                          margin: '0 0 0.5rem 0',
                          fontWeight: 'bold',
                          color: theme === 'dark' ? '#4dabf7' : '#1c7ed6'
                        }}>
                          {s.tipo}
                        </p>
                        <p style={{ margin: '0' }}>
                          <strong>Fecha:</strong> {s.fecha}
                        </p>
                      </div>
                      <button 
                        onClick={() => eliminarSolicitud(s.id)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '4px',
                          padding: '0.25rem 0.75rem',
                          cursor: 'pointer',
                          height: 'fit-content',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                        onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                      >
                        Eliminar
                      </button>
                    </div>
                    <p style={{ margin: '0.5rem 0 0 0' }}>
                      <strong>Motivo:</strong> {s.motivo}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Solicitudes;