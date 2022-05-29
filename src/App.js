import React from "react";
import "./app.css";
import Footer from "./components/Footer";
import Home from "./Home";
import Accommodation from "./Accommodation";
import GoingOut from "./GoingOut";
import Testimonials from "./Testimonials";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

console.log(process.env.REACT_APP_API_KEY);

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
            <Link to="/accommodation">Accommodation</Link>
          </li>
          <li className="nav-item">
            <Link to="/going-out">Going Out</Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">Testimonials</Link>
          </li>
      </ul>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/accommodation" element={<Accommodation />}/>
          <Route path="/going-out" element={<GoingOut />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
        </Router>
      <Footer />
    </div>

  )
}

