import React, { createContext, useState, useContext, useCallback } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [redirectPath, setRedirectPath] = useState('/dashboard');

  const login = useCallback((userData) => {
    console.log('Login function called');
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  }, []); 

  const logout = useCallback(() => {
    console.log('Logout function called');
    setUser(null);
    localStorage.removeItem('user');
    setRedirectPath('/dashboard');
  }, []);

  const setRedirect = useCallback((path) => {
    setRedirectPath(path);
  }, []);

  const isAuthenticated = useCallback(() => {
    return !!user;
  }, [user]);

  const value = {
    user,
    login,
    logout,
    redirectPath,
    setRedirect,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};