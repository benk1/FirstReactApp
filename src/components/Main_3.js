import React from "react";

const Main_3 = (props) => {
    let info = props.info.map((item) => {
        return (
        <p>{item.name}<br />{item.parag}<br /></p>
        );
      });
        
 return (
<div className="middle-page">
    <div className="testimonial">
       
       <div className="John">
       {info}
       </div>
    
       <div className="John">
       {info}
       </div>

       
       <div className="John">
       {info}
       </div>
    
       <div className="John">
       {info}
       </div>
    
   </div>

    <div className="design">
      <section id="tabs" className="about__us-col-2-tabs">
        <input id="tab-one" type="radio" name="grp" checked="checked" />
        <label for="tab-one">DESIGN</label>
        <div className="tab-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab consequuntur optio itaque! Similique error sapiente,
            ducimus consectetur quo explicaboAb consequuntur optio itaque! Similique error sapiente,Ab consequuntur optio
            itaque! Similique error sapiente, magnam ipsam? Repellendus corporis incidunt saepe vel ab, debitis unde culpa!Ab
            consequuntur optio itaque! Similique error sapiente</p>
          <button>read more</button>
        </div>

        <input id="tab-two" type="radio" name="grp" />
        <label for="tab-two">PRODUCTION</label>
        <div className="tab-content">
          <p>ducimus consectetur quo explicabo magnam ipsam? Repellendus corporis Lorem ipsum dolor sit amet consectetur Ab
            consequuntur optio itaque! Similique error sapiente, adipisicing elit.Ab consequuntur optio itaque! Similique
            error sapiente,Ab consequuntur optio itaque! Similique error sapiente, Ab consequuntur optio itaque! Similique
            error sapiente, incidunt saepe vel ab, debitis unde culpa!
          </p>
          <button>read more</button>
        </div>
        </section>
    </div>  
</div> 
    
   
  
    )

}
export default Main_3;