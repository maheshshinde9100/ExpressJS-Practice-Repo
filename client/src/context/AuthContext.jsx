// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react'; // 1. Import useEffect

// 2. Define the context structure
export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  // 3. Initialize state by checking localStorage
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // 4. Use useEffect to update localStorage whenever 'user' changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const login = (userData) => {
    // Note: localStorage is updated automatically by useEffect
    setUser(userData); 
  };

  const logout = () => {
    // Note: localStorage is updated automatically by useEffect
    setUser(null); 
  };

  // 5. Provide the state and functions
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};