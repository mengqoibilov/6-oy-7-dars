import React from "react";
import "./servicecom.css";
import { Link } from "react-router-dom";

const Servicecom = () => {
  return (
    <div className="service-wrapper">
      <nav className="navbar">
        <div className="logo">{'{'}Finsweet</div>
       <ul className="nav-links">
       <li><Link to={"/"}>home</Link></li>
        <li><Link to={"/servicecom"}>Service</Link></li>
        <li><Link to={"/company"}>Company</Link></li>
        <li><Link to={"/career"}>Career</Link></li>
          <a href="./">Blog</a> 
          <a href="./">Contact us</a>
          <a href="./" className="clone-project">Clone project →</a>
       </ul>
      </nav>

      <div className="service-container">
        <div className="service-content">
          <h3 className="section-title">OUR SERVICES</h3>
          <h1 className="service-heading">
            We Build Software Solution that Solve Clients Business Challenges
          </h1>
          <p className="service-description">
            Through True Rich Attended does no end it his mother since favourable real
            had half every him case in packages enquire we up ecstatic.
          </p>
          <button className="quote-button">Request A Quote →</button>
        </div>
        
        <div className="service-list">
          <ul>
            <li><strong>Technical support</strong></li>
            <li><strong>Development</strong> →</li>
            <li><strong>AWS/Azure</strong></li>
            <li><strong>Consulting</strong></li>
            <li><strong>Information Technology</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Servicecom;
