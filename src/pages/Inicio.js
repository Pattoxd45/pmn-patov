import imagen1 from '../Images/1.jpg';

function Inicio() {
  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h1>Bienvenido a <span style={{ color: 'var(--primary)' }}>Attendify</span></h1>
      <p>Administra fácilmente tus <strong>solicitudes de vacaciones</strong> y permisos.</p>
      <img src={imagen1} alt="Vacaciones" className="decorativa" />
    </div>
  );
}

export default Inicio;