import React from "react";
import "./Css/index.css";
import Footer from "./HomePage/components/Footer";
import Home from "./HomePage/Home";
import Accommodation from "./Accommodation/Accommodation";
import DaysOut from "./DaysOut/DaysOut";
import EatingOut from './EatingOut/EatingOut';
import TestimonialContainer from './Testimonials/TestimonialContainer';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "dist")));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started");
});

export default function App(){

  return(
    <div className="App" id='page-container'>
      <h1 className="nav-logo">
        The New Bungalow
      </h1>
      <Router>
        <nav className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item" id="nav-text">
            <Link exact to="/">Home</Link>
          </li>
          <li className="nav-item" id="nav-text">
            <Link to="/Accommodation">Accommodation</Link>
          </li>
          <li className="nav-item" id="nav-text">
            <Link to="/DaysOut">Days Out</Link>
          </li>
          <li className="nav-item" id="nav-text">
            <Link to="/EatingOut">Eating Out</Link>
          </li>
          <li className="nav-item" id="nav-text">
            <Link to="/TestimonialContainer">Testimonials</Link>
          </li>
      </ul>
      </nav>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Accommodation" element={<Accommodation />}/>
          <Route path="/DaysOut" element={<DaysOut />}/>
          <Route path="/EatingOut" element={<EatingOut />}/>
          <Route path="/TestimonialContainer" element={<TestimonialContainer />}/>
        
        </Routes>
        </Router>
        <div>
      <Footer />
      </div>
    </div>

  )
}

