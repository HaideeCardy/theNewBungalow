import React from 'react';
import thePigs from './Img/thePigs.png';
import thePigsDining from './Img/thePigsDining.png';
import theThreeHorseshoes from './Img/theThreeHorseshoes.png';
import theThreeHorseshoesGarden from './Img/theThreeHorseshoesGarden.png';
import theVictoriaInn from './Img/victoriaInn.png';
import theVictoriaInnDining from './Img/victoriaInn copy.png';
import heydonTeaShop from './Img/heydonTeaShop.png';
import heydonTeaShopGarden from './Img/heydonTeaShopGarden.png';


const EatingOutCards = () => {
  return (
      <div className="ui cards" id="cards">

        {/* The Pigs */}

        <div className="ui card" id="card">
          <div className="ui slide masked reveal image" id="cardImgBox">
            <img id="cardImg" src={thePigs} alt="Pub" className="visible content"/>
            <img id="cardImg" src={thePigsDining} alt="dining area" className="hidden content"/>
          </div>
          <div className="content">
            <h2 className="header" id='cardHeadings'>The Pigs, Edgefield</h2>
            <div className="meta">
              <p className="info">The Pigs is well regarded as a place to visit and only a short drive (or long stroll!) away. It offers a games room for children and an outside play area.</p>
            </div>
          </div>
          </div>


        {/* The Three Horseshoes */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={theThreeHorseshoes} alt="Pub" className="visible content"/>
          <img id="cardImg" src={theThreeHorseshoesGarden} alt="garden" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header" id='cardHeadings'>The Three Horseshoes, Briston</h2>
          <div className="meta">
            <p className="info">A new find for us after a recent refurb. The staff are extremely accommodating and the landscaped garden is very well done. <br></br> Most importantly of all the food was great.</p>
          </div>
        </div>
        </div>

        {/* The Victoria Inn */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={theVictoriaInn} alt="Pub" className="visible content"/>
          <img id="cardImg" src={theVictoriaInnDining} alt="dining area" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header" id='cardHeadings'>The Victoria Inn, Holkham</h2>
          <div className="meta">
            <p className="info">With Holkham Hall and beach nearby this is a great place to stop off and is very welcoming of dogs.<br></br>Be sure to checkout their menu's online. It's a little different to what we usually find but the food was delicious.</p>
          </div>
        </div>
        </div>

      
        {/* Heydon Tea Shop */}

        <div className="ui card" id="card">
        <div className="ui slide masked reveal image" id="cardImgBox">
          <img id="cardImg" src={heydonTeaShop} alt="Tea shop" className="visible content"/>
          <img id="cardImg" src={heydonTeaShopGarden} alt="courtyard garden" className="hidden content"/>
        </div>
        <div class="content">
          <h2 class="header" id='cardHeadings'>Heydon Shop and Tea Rooms</h2>
          <div class="meta">
            <p class="info">Just over two miles away you will find the idyllic village of Heydon. <br></br>This picturesque place is home to a traditional tea room with highly recommended treats. </p>
          </div>
        </div>
        </div>
</div>     
  )
};

export default EatingOutCards;