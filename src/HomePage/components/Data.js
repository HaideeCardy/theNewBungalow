import React from 'react';

export default function Data({data}) {

  const {current: {condition: {icon, text}, temp_c }, location: {name}} = data;
  return (
    <div className='ui card' id='weather-card'>
      <div className='weather-content'>
      <img id='weather-symbol' src={icon} alt="weather symbol"></img>
        <div id='weather-text'>
        <div className='header' id='location'>{name}</div>
        <div className='temp'>Feeling...&nbsp; {temp_c}ºC</div>
        <div className='description'>Expect...&nbsp;
          {text}
        </div>
        </div>
        
      </div>
    </div>
  );
};