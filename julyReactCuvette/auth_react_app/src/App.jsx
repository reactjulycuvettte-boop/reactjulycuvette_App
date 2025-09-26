import React, { Suspense, lazy }  from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import Layout from "./components/Layout/Layout"
import LoadingSpinner from "./components/Common/LoadingSpinner"
import "./App.css"

// import Home from "./pages/Home"
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./components/Auth/Login"))
const Signup = lazy(() => import("./components/Auth/Signup"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Profile = lazy(() => import("./pages/Profile"))
const PrivateRoute = lazy(() => import("./components/Auth/PrivateRoute"))


const App = () => {
  return (
    <AuthProvider>
    <Router>
      <>
        <Layout>
          <Suspense fallback={<LoadingSpinner/>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/"  element={<Home />} />
            <Route path="/login"  element={<Login />} />
            <Route path="/signup"  element={<Signup />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }/>
            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }/>

            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
          </Suspense>
        </Layout>
      </>
    </Router>
    </AuthProvider>
  )
}

export default App