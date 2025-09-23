// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import UserSettings from './components/UserSettings';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AuthProvider, { useAuth } from './components/AuthContext';
import './App.css';

// Protected Route Component - Demonstrates Redirecting
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  // Redirect to login if not authenticated
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Redirect from root to dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            
            {/* Login route */}
            <Route path="/login" element={<Login />} />
            
            {/* Protected dashboard route with nested routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }>
              {/* Nested routes within dashboard */}
              <Route path="profile" element={<UserProfile />} />
              <Route path="settings" element={<UserSettings />} />
              {/* Default nested route - redirects to profile */}
              <Route index element={<Navigate to="profile" replace />} />
            </Route>
            
            {/* Catch all route - Not Found Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;