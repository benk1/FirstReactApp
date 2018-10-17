import React from "react";
import myImage1 from "../images/img-placeholder.png";

import myImage2 from "../images/img-placeholder.png";

import myImage3 from "../images/img-placeholder.png";


const Main_2 = (props) => {
    let blog = props.blog.map((item) => {
        return (
        <p>{item.title}<br /><span className="style-img">{item.paragraph}</span><br /></p>
        );
      });
    return (
  <div className="recent-work">
    <div className="images">
      <img class="image1" src={myImage1} alt="firstImage"/> 
      {blog} 
      </div>
     
      <div className="images">
      <img class="image1" src={myImage2} alt="secondImage" /> 
        {blog}
       </div>

       <div className="images">
      <img class="image1" src={myImage3} alt="thirdImage" /> 
        {blog}
     </div>
  </div>
 )
}  
export default Main_2;