import React from "react";
import "./home.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Weather from "./components/Weather";
import WelcMess from "./components/WelcMess";
import PicCarousel from "./components/PicCarousel";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faBars);

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Weather />
      <div className="home-main">
        <PicCarousel />
        <WelcMess />

      </div>
      <Footer />
    </div>
  );
}