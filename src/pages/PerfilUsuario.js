import { Link } from 'react-router-dom';

function PerfilUsuario() {
  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <Link to="/dashboard">Volver al Dashboard</Link>
    </div>
  );
}

export default PerfilUsuario;
