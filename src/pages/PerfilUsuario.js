import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

function PerfilUsuario() {
  const { userEmail } = useAuth();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const datos = localStorage.getItem('solicitudes');
    if (datos) {
      setSolicitudes(JSON.parse(datos));
    }
  }, []);

  return (
    <div className="perfil-container">
      <h1>Perfil de Usuario</h1>
      <p><strong>Correo:</strong> {userEmail}</p>

      <h2>Resumen</h2>
      <p>Total de solicitudes enviadas: {solicitudes.length}</p>

      <h3>Últimas solicitudes</h3>
      {solicitudes.length === 0 ? (
        <p>No hay solicitudes recientes.</p>
      ) : (
        <ul>
          {solicitudes.slice(-3).reverse().map((s) => (
            <li key={s.id}>
              <strong>{s.tipo}</strong> - {s.fecha}<br />
              Motivo: {s.motivo}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '1rem' }}>
        <Link to="/configuracion">Ir a Configuración</Link><br />
        <Link to="/dashboard">Volver al Dashboard</Link>
      </div>
    </div>
  );
}

export default PerfilUsuario;