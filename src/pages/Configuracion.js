import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';
import imagen3 from '../Images/3.jpg';

const Configuracion = () => {
  const { logout, userEmail, userName, updateUser } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [mensaje, setMensaje] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setFormData({
      name: userName || '',
      email: userEmail || '',
      password: '',
      confirmPassword: ''
    });
  }, [userName, userEmail]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo no es válido';
    }
    
    if (formData.password) {
      if (formData.password.length < 6) {
        newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Las contraseñas no coinciden';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setMensaje('');
    
    try {
      await updateUser({
        name: formData.name,
        email: formData.email,
        ...(formData.password && { password: formData.password })
      });
      
      setMensaje('¡Configuración actualizada correctamente!');
      setTimeout(() => setMensaje(''), 3000);
      
      if (formData.password) {
        setFormData({
          ...formData,
          password: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error('Error al actualizar:', error);
      setMensaje(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="card-con-fondo" style={{ 
      maxWidth: '500px', 
      margin: '2rem auto',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <img src={imagen3} alt="Fondo configuración" className="imagen-fondo" />
      <div className="card-contenido">
        <h1>Configuración de Usuario</h1>

        <p><strong>Tema actual:</strong> {theme === 'light' ? 'Claro' : 'Oscuro'}</p>
        <button
          className="btn"
          onClick={toggleTheme}
          style={{
            marginBottom: '1rem',
            backgroundColor: theme === 'light' ? '#222' : '#eee',
            color: theme === 'light' ? '#fff' : '#000',
          }}
        >
          Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </button>

        <hr style={{ margin: '1.5rem 0', borderColor: theme === 'dark' ? '#555' : '#eee' }} />

        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${errors.name ? 'red' : '#ccc'}`,
                borderRadius: '4px'
              }}
            />
            {errors.name && <p style={{ color: 'red', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>{errors.name}</p>}
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label>Correo electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="usuario@empresa.com"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${errors.email ? 'red' : '#ccc'}`,
                borderRadius: '4px'
              }}
            />
            {errors.email && <p style={{ color: 'red', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>{errors.email}</p>}
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label>Nueva Contraseña (dejar en blanco para no cambiar)</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${errors.password ? 'red' : '#ccc'}`,
                borderRadius: '4px'
              }}
            />
            {errors.password && <p style={{ color: 'red', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>{errors.password}</p>}
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <label>Confirmar Nueva Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.5rem',
                border: `1px solid ${errors.confirmPassword ? 'red' : '#ccc'}`,
                borderRadius: '4px'
              }}
            />
            {errors.confirmPassword && <p style={{ color: 'red', margin: '0.5rem 0 0', fontSize: '0.8rem' }}>{errors.confirmPassword}</p>}
          </div>
          
          <button 
            type="submit" 
            style={{ 
              backgroundColor: '#28a745',
              color: '#fff',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </form>

        {mensaje && (
          <p style={{ 
            color: mensaje.includes('Error') ? 'red' : 'green',
            textAlign: 'center',
            margin: '1rem 0'
          }}>
            {mensaje}
          </p>
        )}

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            width: '100%',
            marginTop: '1rem'
          }}
        >
          Cerrar Sesión
        </button>

        <br /><br />
        <Link 
          to="/dashboard" 
          style={{
            display: 'block',
            textAlign: 'center',
            color: theme === 'dark' ? '#4dabf7' : '#1c7ed6',
            textDecoration: 'none'
          }}
        >
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Configuracion;