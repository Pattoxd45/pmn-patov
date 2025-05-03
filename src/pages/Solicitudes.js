import { useState, useEffect } from 'react';

function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState(() => {
    const datosGuardados = localStorage.getItem('solicitudes');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  const [nuevaSolicitud, setNuevaSolicitud] = useState({
    inicio: '',
    fin: '',
    motivo: '',
  });

  useEffect(() => {
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
  }, [solicitudes]);

  const handleChange = (e) => {
    setNuevaSolicitud({ ...nuevaSolicitud, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevaSolicitud.inicio || !nuevaSolicitud.fin || !nuevaSolicitud.motivo) {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const nueva = {
      id: Date.now(),
      ...nuevaSolicitud,
    };

    setSolicitudes([...solicitudes, nueva]);
    setNuevaSolicitud({ inicio: '', fin: '', motivo: '' });
  };

  const eliminarSolicitud = (id) => {
    const actualizadas = solicitudes.filter((s) => s.id !== id);
    setSolicitudes(actualizadas);
  };

  return (
    <div>
      <h1>Solicitudes de Vacaciones</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div>
          <label>Inicio: </label>
          <input type="date" name="inicio" value={nuevaSolicitud.inicio} onChange={handleChange} />
        </div>
        <div>
          <label>Fin: </label>
          <input type="date" name="fin" value={nuevaSolicitud.fin} onChange={handleChange} />
        </div>
        <div>
          <label>Motivo: </label>
          <input type="text" name="motivo" value={nuevaSolicitud.motivo} onChange={handleChange} />
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
              {s.inicio} a {s.fin} - {s.motivo}
              <button onClick={() => eliminarSolicitud(s.id)} style={{ marginLeft: '1rem' }}>
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
