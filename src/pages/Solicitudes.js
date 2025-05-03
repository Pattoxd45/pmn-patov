import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const datosGuardados = localStorage.getItem('solicitudes');

    if (datosGuardados) {
      setSolicitudes(JSON.parse(datosGuardados));
    } else {
      // Datos de prueba
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

    // Validaciones
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

    const nueva = {
      ...nuevaSolicitud,
      id: Date.now(),
    };

    const nuevasSolicitudes = [...solicitudes, nueva];
    setSolicitudes(nuevasSolicitudes);
    localStorage.setItem('solicitudes', JSON.stringify(nuevasSolicitudes));

    setNuevaSolicitud({ tipo: '', fecha: '', motivo: '' });
  };

  const eliminarSolicitud = (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar esta solicitud?');
    if (!confirmar) return;
    const actualizadas = solicitudes.filter((s) => s.id !== id);
    setSolicitudes(actualizadas);
  };

  return (
    <div>
      <h1>Solicitudes de Vacaciones</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <label>Tipo: </label>
          <input
            type="text"
            name="tipo"
            value={nuevaSolicitud.tipo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha: </label>
          <input
            type="date"
            name="fecha"
            value={nuevaSolicitud.fecha}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Motivo: </label>
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
        <p>No hay solicitudes registradas.</p>
      ) : (
        <ul>
          {solicitudes.map((s) => (
            <li key={s.id}>
              {s.tipo} - {s.fecha} - {s.motivo}
              <button
                onClick={() => eliminarSolicitud(s.id)}
                style={{ marginLeft: '1rem' }}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Solicitudes;