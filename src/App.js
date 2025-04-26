import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

import Layout from './components/Layout';
import Inicio from './pages/Inicio'; 
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import PerfilUsuario from './pages/PerfilUsuario';
import Configuracion from './pages/Configuracion';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="inicio" element={<Inicio />} />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="perfil" element={
              <PrivateRoute>
                <PerfilUsuario />
              </PrivateRoute>
            } />
            <Route path="configuracion" element={
              <PrivateRoute>
                <Configuracion />
              </PrivateRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
