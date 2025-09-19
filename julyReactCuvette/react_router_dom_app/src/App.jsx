import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import NotFound from "./components/NotFound"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import ProductList from "./components/ProductList"
import ProductDetail from "./components/ProductDetail"


const App = () => {
  return (
    <Router>
      <h1>React Router DOM</h1>
      <div className="dynamicRoutingApp">
      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Dynamic Routes with parameters */}
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserProfile />}/>

        {/* Multiple Dynamic Routes with parameters */}
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:category/:productId" element={<ProductDetail />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
      </div>
    </Router>
  )
}

export default App









































{/* <section className="routingApp">
<nav>
  <Link to="/">Home (Regular Link)</Link>
  <NavLink to="/about" style={({ isActive }) => ({
    color: isActive ? "yellow" : "green"
  })}>About (Styled Link)</NavLink>
</nav>

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
</section> */}