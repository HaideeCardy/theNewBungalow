import React from "react";
import airbnbLogo from "../assets/airbnb-logo.png";


function Footer() {
  return (
    <div className="footer">
      <footer id="footer-info">
        <h2 id="footer-text">For more information and booking visit us at: </h2> <a href=""><img src={airbnbLogo} className="airbnb-logo" alt="airBnb"></img></a> 
        
      </footer>
    </div>
  )
}

export default Footer;