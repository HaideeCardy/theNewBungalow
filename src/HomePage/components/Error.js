import React from 'react';

export default function Error({message}){
  return (   
  <div className='ui error message'>
    <i className='close icon'></i>
    <div className='header'>
      Sorry, an error ocurred while fetching your data.
    </div>
    <ul className='list'>
      <li>{message}</li>
    </ul>
</div>
);
};
