import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center' }}>
        <h1>Aplicación de Vacaciones, Attendify</h1>
      </header>

      <Navbar />

      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
