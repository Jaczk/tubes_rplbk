// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Perfume from "./pages/fragrances";
import HomePage from "./pages/Home";
import About from "./pages/about";
import User from "./pages/userPage";
import Clock from "react-live-clock";

export default function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <div className="d-flex justify-content-between">
            <div>
              <Link to="/" className="LinkRoutes">
                Home
              </Link>
              <Link to="/perfumes" className="LinkRoutes">
                Perfume
              </Link>
              <Link to="/about" className="LinkRoutes">
                About
              </Link>
              <Link to="/user" className="LinkRoutes">
                User
              </Link>
            </div>
            <div className="clockk">
              <Clock
                format={"HH:mm:ss"}
                ticking={true}
                timezone={"Jakarta/Indonesia"}
              />
            </div>
          </div>
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
