import React from "react";
import myImage from "../images/Header-img.png";
const Header = () => {
     return ( 
   <section className="header">
      <img src={myImage} alt="header Image"  />
      <div className="header-details">
        <h1 className="header-details">
          <em>
            <small>POWERFULY SIMPLE
              <span>WITH A</span>
              <br />SQUEEKY CLEAN
              <span>DESIGN</span>
            </small>
          </em>
        </h1>
        <p id="text" className="header">Find out how you can offer quick and poweful
          <br />solution to your customers now!</p>
        <br />
        <button id="logo" className="header">LEARN MORE</button>
      </div>
      <div className="last-header">
        <h4>
          CREATE A POWERFUL SOLUTION NOW!
        </h4>
        
        <button>GET STARTED</button>
      </div>
      </section>
    
   )
   };

export default Header;