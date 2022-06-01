import React from 'react';

const Data = ({ data }) => {
  return (
    <div className='ui card' id='weather-card'>
      <div className='weather-content'>
      <img id='weather-symbol' src={data.current.condition.icon} alt="weather symbol"></img>
        <div id='weather-text'>
        <div className='header' id='location'>{data.location.name}</div>
        <div className='temp'>Feeling...&nbsp; {data.current.temp_c}ºC</div>
        <div className='description'>Expect...&nbsp;
          {data.current.condition.text}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Data;