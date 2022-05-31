import React from "react";
import "../Css/home.css";
// import WeatherContainer from "./components/WeatherContainer"
import WelcMess from "./components/WelcMess";
import PicCarousel from "./components/PicCarousel";
import { carouselData } from "./components/PicCarousel"

export default function Home() {
  return (
    <div className="Home" id="content-wrap">
      <div className="weather">
      {/* <WeatherContainer /> */}
      </div>
      <div className="pic-carousel">
        <PicCarousel 
          slides={carouselData}
        />
      </div>
      <div className="welcomeMessage">
        <WelcMess />
      </div>
    </div>
  );
}