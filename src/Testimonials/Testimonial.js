import React from 'react';
import '../Css/testimonials.css'

const Testimonial = ({ data }) => {
  // console.log('data', data);
  return (
    <div className='ui card' id="testimonial-card">
      <div className='image'>
        <img src={data.avatar} alt='avatar' />
      </div>
      <div className='content'>
        <span className='header'>{data.completeName}</span>
        <div className='meta'>
          <span className='date'>{data.jobTitle}</span>
        </div>
        <div className='description'>{data.desc}</div>
      </div>
    </div>
  );
};

export default Testimonial;
