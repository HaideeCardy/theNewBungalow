import React from 'react';
import '../Css/testimonials.css'

const Testimonial = ({ data }) => {
  // console.log('data', data);
  return (
      <div id="testimonial-card">
        <img id='test-img'  src={data.avatar} alt='avatar' />
        <div className='content' id='test-content'>
        <span className='header' id="name">{data.completeName}</span>
        <br></br>
        <span className='city'>{data.city}</span>
        <div className='description'>{data.desc}</div>
      </div>

    </div>
    
  );
};

export default Testimonial;
