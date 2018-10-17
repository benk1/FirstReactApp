import React from "react";
//import myImage from "../images/Border-BG.jpg";
//import myImage from "../images/img-placeholder.png";

const Main_1 = (props) => {
    let menu1 = props.menu1.map((item) => {
        return (
        <p><span className="fa fa-desktop" id="icon1">{item.icon}</span><br /><h6>{item.title}</h6><br /><p>{item.para}</p><br /><button className="icons button">READ MORE</button></p>
        );
      });
 return (
<div className="services">

      <div className="icons">
        {menu1}
      </div>
</div>
    
 )
};

export default Main_1;