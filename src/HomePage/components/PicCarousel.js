import React, { useState } from "react"
import CarouselImg1 from "../assets/sittingArea.JPG"
import CarouselImg2 from "../assets/livingArea.JPG"
import CarouselImg3 from "../assets/saxthorpe.JPG"
import { FaArrowAltCircleRight } from "@react-icons/all-files/fa/FaArrowAltCircleRight"
import { FaArrowAltCircleLeft } from "@react-icons/all-files/fa/FaArrowAltCircleLeft"


export const carouselData = [
  {
    image: CarouselImg1
  },
  {
    image: CarouselImg2
  },
  {
    image: CarouselImg3
  }
]


export default function PicCarousel({slides}){
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlides = () => {
    setCurrent(current === length -1 ? 0 : current +1)
  }
  const prevSlides = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }
  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel-container">
      
      {carouselData.map((carousel, index) => {
        return (
          <div className="carousel-images">
          <div className={index === current ? 'carousel active' : 'carousel'} key={index}>
            {index === current && (<img src={carousel.image} alt="carousel" className="images"></img>)}
          </div>
          </div>
          
        )
        
      })}
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlides}/>
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlides}/>
    </section>
  )
}