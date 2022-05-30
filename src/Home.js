import React from "react";
import "./home.css";
import WeatherContainer from "./components/WeatherContainer"
import WelcMess from "./components/WelcMess";
import PicCarousel from "./components/PicCarousel";
import { carouselData } from "./components/PicCarousel"
export default function Home() {
  return (
    <div className="Home">
      <WeatherContainer />
      <div className="home-main">
        <PicCarousel 
          slides={carouselData}
        />
        <WelcMess />
      </div>
    </div>
  );
}