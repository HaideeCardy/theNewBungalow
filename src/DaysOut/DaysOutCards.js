import React from 'react';
import holt1 from './Img/holtByfords.png';
import holt2 from './Img/holt.png';
import sheringham1 from './Img/sheringhamHut.png';
import sheringham2 from './Img/sheringham.png';
import poppyline1 from './Img/thePoppyLineTrain.png';
import poppyline2 from './Img/thePoppyLineViews2.png';
import wells1 from './Img/wellsHuts.png';
import wells2 from './Img/wellsStreets.png';
import holkham1 from './Img/holkhamHall.png';
import holkham2 from './Img/holkhambeach.png';


const DaysOutCards = () => {
  return (
      <div className="ui cards" id="cards">

        {/* Holt */}

        <div className="ui card" id="dayCard">
          <div className="ui slide masked reveal image" id="dayCardImgBox">
            <img id="dayCardImg" src={holt1} alt="Byfords,Holt" className="visible content"/>
            <img id="dayCardImg" src={holt2} alt="Shopping yard" className="hidden content"/>
          </div>
          <div className="content">
            <h2 className="header" id='cardHeadings'>Holt</h2>
            <div className="meta">
              <p className="info">Holt is a popular visitors spot with an array of independent shops and quality brand stores. <br></br>It is incrediably dog friendly with well-behaved dogs welcome in shops, pubs and eateries. </p>
            </div>
          </div>
          </div>


        {/* Sheringham */}

        <div className="ui card" id="dayCard">
        <div className="ui slide masked reveal image" id="dayCardImgBox">
          <img id="dayCardImg" src={sheringham1} alt="beach" className="visible content"/>
          <img id="dayCardImg" src={sheringham2} alt="town" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header" id='cardHeadings'>Sheringham</h2>
          <div className="meta">
            <p className="info">A new find for us after a recent refurb. The staff are extremely accommodating and the landscaped garden is very well done. <br></br> Most importantly of all the food was great.</p>
          </div>
        </div>
        </div>

        {/* The Poppy Line */}

        <div className="ui card" id="dayCard">
        <div className="ui slide masked reveal image" id="dayCardImgBox">
          <img id="dayCardImg" src={poppyline1} alt="steam train" className="visible content"/>
          <img id="dayCardImg" src={poppyline2} alt="views around train" className="hidden content"/>
        </div>
        <div className="content">
          <h2 className="header" id='cardHeadings'>The Poppy Line</h2>
          <div className="meta">
            <p className="info">All aboard the steam trains to admire the stunning scenery from the Victorian seaside resort of Sheringham to the Georgian town of Holt.<br></br> Look out for their special dining events online.</p>
          </div>
        </div>
        </div>

      
        {/* Wells-next-the-sea */}

        <div className="ui card" id="dayCard">
        <div className="ui slide masked reveal image" id="dayCardImgBox">
          <img id="dayCardImg" src={wells1} alt="Sunny Garden" className="visible content"/>
          <img id="dayCardImg" src={wells2} alt="Patio" className="hidden content"/>
        </div>
        <div class="content">
          <h2 class="header" id='cardHeadings'>Wells-next-the-Sea</h2>
          <div class="meta">
            <p class="info">Home to a picturesque sandy beach lined with quinessential beach huts; some of which can be hired. <br></br>As you head further into the town you will find many independent stores to amble the afternoon away. </p>
          </div>
        </div>
        </div>


        {/* Holkham Hall */}

        <div className="ui card" id="dayCard">
        <div className="ui slide masked reveal image" id="dayCardImgBox">
          <img id="dayCardImg" src={holkham1} alt="Holkham Hall" className="visible content"/>
          <img id="dayCardImg" src={holkham2} alt="Holkham Beach" className="hidden content"/>
        </div>
        <div class="content">
          <h2 class="header" id='cardHeadings'>Holkham</h2>
          <div class="meta">
            <p class="info">A great day out with the children - an awesome adventure playground. They often hold events and trails which enable children to explore the hall, buildings and gardens whilst you soak in all the history.<br></br>Even better there is a breathakingly beautiful beach just down the road.</p>
          </div>
        </div>
        </div>
</div>     
  )
};

export default DaysOutCards;