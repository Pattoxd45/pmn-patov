import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import PerfilUsuario from './pages/PerfilUsuario';
import Configuracion from './pages/Configuracion';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />

        {/* Rutas con Navbar */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/perfil" element={<PerfilUsuario />} />
          <Route path="/configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
