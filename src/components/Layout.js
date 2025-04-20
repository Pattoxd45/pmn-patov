import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>Aplicación de Solicitud de Vacaciones</h1>
      </header>

      <Navbar />

      <main style={{ padding: '2rem' }}>
        <h2>Aplicación de Solicitud de Vacaciones</h2>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
