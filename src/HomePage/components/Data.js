import React from 'react';

const Data = ({ data }) => {
  return (
    <div className='ui card'>
      <div className='content'>
        <div className='header'>{data.location.name}</div>
        <div className='temp'>{data.current.temp_c}ºC</div>
        <div className='description'>
          {data.current.condition.text}
        </div>
        <img src={data.current.condition.icon} alt="weather symbol"></img>
      </div>
    </div>
  );
};

export default Data;