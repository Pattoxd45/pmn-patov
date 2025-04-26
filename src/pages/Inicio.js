import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenido a Attendify</h1>
      <p>Tu portal para gestionar solicitudes de vacaciones.</p>
      <p>Inicia sesión o crea una cuenta para comenzar.</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/login" style={{ marginRight: '1rem' }}>Iniciar Sesión</Link>
        <Link to="/registro">Registrarse</Link>
      </div>
    </div>
  );
}

export default Inicio;
