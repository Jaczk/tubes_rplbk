// import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Perfume from "./pages/fragrances";
import Fragrance from "./pages/perfume";
import About from "./pages/about";
import FragranceDetail from "./pages/perfumeDetail";

export default function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            <li className="li">
              <Link to="/perfumes">Perfume</Link>
            </li>
            <li className="li">
              <Link to="/about">About</Link>
            </li>
            {/* <li className="li">
              <Link to="/input">inputType</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Perfume />} />
          <Route path="/perfumes" exact element={<Fragrance />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/perfumes/:productId" exact element={<FragranceDetail />} />
          
        </Routes>
      </div>
    </Router>
  );
}
