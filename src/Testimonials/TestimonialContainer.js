import React, { useState } from 'react';
import Testimonial from './Testimonial';
import generateTestimonials from './testimonials';
import '../Css/testimonials.css'

const TestimonialContainer = () => {
  const [testimonials] = useState(generateTestimonials(5));
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const previous = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonials.length - 1);
    } else {
      setCurrentIndex((prevIndxValue) => prevIndxValue - 1);
    }

    console.log(currentIndex);
  };
  const next = () => {
    if (currentIndex === testimonials.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndxValue) => prevIndxValue + 1);
    }
    console.log(currentIndex);
  };
  return (
    <div id='content-wrap'>
      <div className="testimonial-container">
      {testimonials && <Testimonial data={testimonials[currentIndex]} />}
      </div>
      <div id='btn-section'>
      <button onClick={() => previous()} className='btn'>
        Previous
      </button>
      <button
        onClick={() =>
          setCurrentIndex(Math.floor(Math.random() * testimonials.length))
        } className='btn'  id='random-btn'>
        Random
      </button>
      <button onClick={() => next()}  className='btn'>
        Next
      </button>
      </div>
      
    </div>
  );
};

export default TestimonialContainer;
