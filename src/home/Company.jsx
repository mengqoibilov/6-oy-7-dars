import React from "react";
import "../home/style.css";
import rasm1 from "../home/img/rasm1.svg";
import rasm2 from "../home/img/rasm2.svg";
import rasm4 from "../home/img/rasm4.svg";
import { Link } from "react-router-dom";


const Company = () => {
  return (
    <div className="wrapper"> 
      <div className="content-container">
       
      <header className="navbar">
        <div className="logo">{`{Finsweet`}</div>
        <nav className="nav-links">
          <li><Link to={"/"}>home</Link></li>
        <li><Link to={"/servicecom"}>Service</Link></li>
        <li><Link to={"/company"}>Company</Link></li>
        <li><Link to={"/career"}>Career</Link></li>
          <a href="./">Blog</a> 
          <a href="./">Contact us</a>
          <a href="./" className="clone-project">Clone project →</a>
        </nav>
      </header>
        <section className="service-section">
          <div className="service-content">
            <span className="company-label">COMPANY</span>
            <h1 className="service-heading">
              Award-winning Company <br /> seen and used by millions <br /> around the world.
            </h1>
            <p className="service-paragraph">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The Maker is a
              decentralized.
            </p>
          </div>

          <div className="service-images">
            <img src={rasm1} alt="Meeting 1" className="service-img" />
            <img src={rasm2} alt="Meeting 2" className="service-img" />
            <img src={rasm4} alt="Meeting 3" className="service-img" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Company;
