import logo from "./logo.svg";
import "./App.css";
import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Perfume from "./perfume/fragrances";
// import Context from "./learn-useContext/index";
// import Counter from "./learn-useState/Counter";
// import InputType from "./inputType/input";
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
              <Link to="/effect">About</Link>
            </li>
            <li className="li">
              <Link to="/context">Update</Link>
            </li>
            {/* <li className="li">
              <Link to="/input">inputType</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Perfume />} />
          {/* <Route path="/effect" exact element={<Effect />} />
          <Route path="/context" exact element={<Context />} />
          <Route path="/input" exact element={<InputType />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
