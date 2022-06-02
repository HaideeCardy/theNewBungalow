import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";


function Footer() {
  return (
    <div className="footer">
      <footer id="footer-info">
        <div >
        <h2 id="footer-text">For more information and booking visit us at: </h2> </div><a href="https://www.airbnb.com/h/thenewbungalow"><img src={airbnbLogo} className="airbnb-logo" alt="airBnb"></img></a> 
        <span id='copyright'>&copy;M & H 2022 </span>
      </footer>
    </div>
  )
}

export default Footer;