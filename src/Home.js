import React from "react";
import "./home.css";
import Weather from "./components/Weather";
import WelcMess from "./components/WelcMess";
import PicCarousel from "./components/PicCarousel";

export default function Home() {
  return (
    <div className="Home">
      {/* <Weather /> */}
      <div className="home-main">
        <PicCarousel />
        <WelcMess />
      </div>
    </div>
  );
}