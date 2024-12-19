import React from "react";
import { Link } from "react-router-dom";
import "./careery.css";
import careery1 from "../home/img/careery1.svg";
const Careery = () => {
  return (
    <div className="career-container">
      <header className="navbar">
        <div className="logo">{`{Finsweet`}</div>
        <ul className="nav-links">
          <li><Link to={"/"}>home</Link></li>
          <li><Link to={"/servicecom"}>Service</Link></li>
          <li><Link to={"/company"}>Company</Link></li>
          <li><Link to={"/career"}>Career</Link></li>
          <a href="./">Blog</a> 
          <a href="./">Contact us</a>
          <a href="./" className="clone-project">Clone project →</a>
        </ul>
      </header>
      <main className="career-main">
        <h4 className="career-tagline">CAREER AT FINSWEET</h4>
        <h1 className="career-heading">
          We hired people who are <br />
          <span>Always Passionate about</span> <br />
          what they do
        </h1>
        <p className="career-subheading">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw.
        </p>
        <div className="careers-text"></div>
        <p className="career-open-positions">
        <img src={careery1} alt="" />
        <h1>See Our open positions</h1>
          <span className="arrow">👇</span>
        </p>
      </main>
    </div>
  );
};

export default Careery;
