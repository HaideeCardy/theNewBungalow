import React from "react";
import "./app.css";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Home from "./Home";
import Accommodation from "./Accommodation/Accommodation";
import DaysOut from "./DaysOut/DaysOut";
import EatingOut from './EatingOut/EatingOut';
import Testimonials from "./Testimonials";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function App(){

  return(
    <div className="App">
      <a href="../public/index.html" className="nav-logo">
        The New Bungalow
      </a>
      <Router>
        <nav>
      <ul className="nav-list">
        <li className="nav-item">
            <Link exact to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Accommodation">Accommodation</Link>
          </li>
          <li className="nav-item">
            <Link to="/DaysOut">Days Out</Link>
          </li>
          <li className="nav-item">
            <Link to="/EatingOut">Eating Out</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
      </ul>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Accommodation" element={<Accommodation />}/>
          <Route path="/DaysOut" element={<DaysOut />}/>
          <Route path="/EatingOut" element={<EatingOut />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
        </Router>
      <Footer />
    </div>

  )
}

