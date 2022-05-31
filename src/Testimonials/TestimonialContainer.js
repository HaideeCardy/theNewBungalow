import React, { useEffect, useState } from 'react';
import Testimonial from './Testimonial';
import generateTestimonials from './testimonials';
import '../Css/testimonials.css'

const TestimonialContainer = () => {
  const [testimonials, setTestimonials] = useState(generateTestimonials(5));
  const [currentIndex, setCurrentIndex] = useState(0);
  //   console.log(generateTestimonials(5));
  //   useEffect(() => {
  //     setTestimonials();
  //   }, []);

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
      <button onClick={() => previous()} className='ui primary basic button'>
        Previous
      </button>
      <button
        onClick={() =>
          setCurrentIndex(Math.floor(Math.random() * testimonials.length))
        }
        className='ui violet basic button'
      >
        Random
      </button>
      <button onClick={() => next()} className='ui primary basic button'>
        Next
      </button>
      </div>
      
    </div>
  );
};

export default TestimonialContainer;
