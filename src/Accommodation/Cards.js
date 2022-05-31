import React from 'react';
import '../Css/cards.css';
import bungalow from './Img/sideAccess.JPG';
import parking from './Img/front.JPG';
import livingArea from './Img/livingArea.JPG';
import kitchen from './Img/kitchen.JPG';
import bed1 from './Img/bedroom1Bed.JPG';
import bed2 from './Img/bedroom2Beds.JPG';
import gardenSun from './Img/gardenSun.JPG';
import garden from './Img/garden.JPG';


const Cards = () => {
  return (
      <div className="ui cards" id="cards">

        {/* Front of property */}

        <div className="ui card" id="card">
          <div className="ui slide masked reveal image" id="cardImgBox">
            <img id="cardImg" src={bungalow} alt="Living area" className="visible content"/>
            <img id="cardImg" src={parking} alt="kitchen" className="hidden content"/>
          </div>
          <div className="content">
            <h2 className="header"id='cardHeadings'>The Bungalow</h2>
            <div className="meta">
              <p className="info">Nestled away up a quiet lane you will find The New Bungalow.<br></br>Here we can accommodate parking for two cars and have easy access to the front and rear of the property.</p>
            </div>
          </div>
          </div>


        {/* Living Area */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={livingArea} alt="Living area" className="visible content"/>
          <img id="cardImg" src={kitchen} alt="kitchen" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header"id='cardHeadings'>The Living Area</h2>
          <div className="meta">
            <p className="info">The perfect social area for a chat and relax post adventure.<br></br>You can't beat a cosy fire if you're visiting in the winter months.</p>
          </div>
        </div>
        </div>

        {/* Bedrooms */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={bed1} alt="Double Bed" className="visible content"/>
          <img id="cardImg" src={bed2} alt="twin beds" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header"id='cardHeadings'> The Bedrooms</h2>
          <div className="meta">
            <p className="info">We can sleep four here at The New Bungalow.<br></br>Both our Master and Twin rooms have built in wardrobes and overlook the garden.</p>
          </div>
        </div>
        </div>

      
        {/* Outside Area */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={gardenSun} alt="Sunny Garden" className="visible content"/>
          <img id="cardImg" src={garden} alt="Patio" className="hidden content"/>
        </div>
        <div class="content">
          <h2 class="header" id='cardHeadings'>The Outside Space</h2>
          <div class="meta">
            <p class="info">If your here for the summer we also have a great little sun trap. <br></br> This area is very private and fully enclosed - which is handy if you decided to bring your pup.</p>
          </div>
        </div>
        </div>
</div>     
  )
};

export default Cards;