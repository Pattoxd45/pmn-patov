import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    alert('Usuario registrado (simulado)');
    navigate('/');
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleRegistro}>
        <div>
          <label>Correo</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Contraseña</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Registrarme</button>
      </form>
      <br />
      <Link to="/">Volver al Login</Link>
    </div>
  );
}

export default Registro;
