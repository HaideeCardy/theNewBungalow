import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav>
      <a href="../public/index.html" className="nav-logo">
        The New Bungalow
      </a>
      <ul className="nav-list">
        <a href="">
          <FontAwesomeIcon icon="fa-solid fa-bars" />
        </a>
        <li className="nav-item invisible">
          <a href="">Accommodation</a>
        </li>
        <li className="nav-item invisible">
          <a href="">Going Out</a>
        </li>
        <li className="nav-item invisible">
          <a href="">Testimonials</a>
        </li>
      </ul>
    </nav>
  );
}
