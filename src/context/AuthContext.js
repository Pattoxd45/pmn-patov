import { createContext, useState, useContext } from 'react';
import { fakeUser } from '../utils/fakeAuth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const login = (email, password) => {
    if (email === fakeUser.email && password === fakeUser.password) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setUserName(fakeUser.name);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setUserName('');
  };

  const updateUser = (newData) => {
    if (newData.email) {
      setUserEmail(newData.email);
    }
    if (newData.name) {
      setUserName(newData.name);
    }
    return Promise.resolve();
  };

  return (
    <AuthContext.Provider value={{ 
      isAuthenticated, 
      login, 
      logout, 
      userEmail,
      userName,
      updateUser 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}