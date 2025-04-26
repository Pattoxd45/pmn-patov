import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { fakeUser } from '../utils/fakeAuth';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === fakeUser.email && password === fakeUser.password) {
      login();
      navigate('/dashboard');
    } else {
      setError('Correo o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Ingresar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <br />
      <Link to="/registro">¿No tienes cuenta? Regístrate</Link>
    </div>
  );
}

export default Login;
