import React, { useEffect, useState } from "react";

export default function Weather(){
  const [weatherData, setWeatherData] = useState({});
  const weatherUrl = `http://api.weatherapi.com/v1/current.json?key=d64bbdc2e24e4062855195441222805&q=London&aqi=no`
  
  useEffect(() => {
    fetch(weatherUrl)
    .then(response => response.json())
    .then(data => setWeatherData(data))
    .catch(err => console.error(err))
  }, [])
  
  // const {location: {name}, current:{temp_c, condition: {text}}} = weatherData;
  return (
    <div className="weather-feature">
      <p className="location">{weatherData.location.name}</p>
      <p className="temp">{}</p>
      <p className="weather-desc">{}</p>
    </div>
  )
}