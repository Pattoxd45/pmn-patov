import { useState, useEffect } from 'react';
import imagen2 from '../Images/2.jpg';

function Solicitudes() {
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
      alert('El tipo debe tener al menos 3 caracteres');
      return;
    }
    if (!nuevaSolicitud.motivo || nuevaSolicitud.motivo.length < 5) {
      alert('El motivo debe tener al menos 5 caracteres');
      return;
    }
    if (new Date(nuevaSolicitud.fecha) < new Date()) {
      alert('La fecha no puede ser pasada');
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
    <div className="card">
      <h1>Solicitudes de Vacaciones</h1>

      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}

      <form onSubmit={handleSubmit} className="card" style={{ marginBottom: '2rem' }}>
        <div>
          <label>Tipo:</label>
          <input
            type="text"
            name="tipo"
            value={nuevaSolicitud.tipo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="date"
            name="fecha"
            value={nuevaSolicitud.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Motivo:</label>
          <input
            type="text"
            name="motivo"
            value={nuevaSolicitud.motivo}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar Solicitud</button>
      </form>

      <h2>Mis Solicitudes</h2>
      {solicitudes.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <p>No hay solicitudes registradas.</p>
          <img src={imagen2} alt="Sin solicitudes" className="decorativa" />
        </div>
      ) : (
        <ul>
          {solicitudes.map((s) => (
            <li key={s.id} className="card">
              <p><strong>Fecha:</strong> {s.fecha}</p>
              <p><strong>Tipo:</strong> {s.tipo}</p>
              <p><strong>Motivo:</strong> {s.motivo}</p>
              <button onClick={() => eliminarSolicitud(s.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Solicitudes;