// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Perfume from "./pages/fragrances";
import HomePage from "./pages/Home";
import About from "./pages/about";
import User from "./pages/userPage";

export default function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
        <Link to="/" className='LinkRoutes'>Home</Link>
          <Link to="/perfumes" className='LinkRoutes'>Perfume</Link>
          <Link to="/about" className='LinkRoutes'>About</Link>
          <Link to="/user" className='LinkRoutes'>User</Link>
        </nav>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/perfumes" exact element={<Perfume />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/user" exact element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}
