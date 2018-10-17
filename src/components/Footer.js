import React from "react";

const Footer = (props) => {
       
 return (
    <footer className="intro">
     
    <div className="about-us">
      <h4 className="about-us">ABOUT US</h4>
      <p>Lorem ipsum dolor sit amet,
        <br />consectetur adipisicing elit.
        <br />Eligendi non quis</p>
      <p>123 street Name
        <br />Road Name
        <br />London
        <br />+447413913807</p>
    </div>

    <div className="latest-tweets">
      <h4 className="about-us">LATEST TWEETS</h4>
      <p>Jaymeah just subscribed another
        <b />great item on thermostorest
        <br />about 1 hour ago</p>

      <p>Jaymeah just subscribed another
        <br />great item on thermostorest
        <br />about 1 hour ago</p>
    </div>

    <div className="latest-posts">
      <h4 className="about-us">LATEST POSTS</h4>
      <p>Lorem ipsum dolor sit amet</p>

      <p>consectetur adipisicing elit</p>

      <p>Lorem ipsum dolor sit amet,
        <br />consectetur</p>
    </div>

    <div className="flickr">
      <h4 className="about-us">FLICKR</h4>
      <div className="blank-box"></div>

      <div className="blank"></div>

      <div className="blank"></div>

      <div className="blank"></div>

    </div>

    <div className="copyright-footer">
      <h6 className="copyright-footer">
        <em>COPYRIGHT@2003-2012 VENTUS INC ALL RIGHT RESERVED</em>
      </h6>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-facebook"></i>
      <i className="fab fa-vimeo"></i>
      <i className="fab fa-pinterest"></i>
      <i className="fab fa-google-plus-g"></i>
    </div>
  </footer>
    )
};

export default Footer;