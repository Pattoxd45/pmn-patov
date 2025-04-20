import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Usuario</label><br />
          <input type="text" placeholder="Usuario" />
        </div>
        <div>
          <label>Contraseña</label><br />
          <input type="password" placeholder="Contraseña" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      <br />
      <Link to="/registro">¿No tenés cuenta? Registrate</Link>
    </div>
  );
}

export default Login;
