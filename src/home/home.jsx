import React from 'react';
import './home.css';
import "../home/Footer"

import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import img1 from "./img/img1.svg";
import img2 from "./img/img2.svg";
import img3 from "./img/img3.svg";
import img4 from "./img/img4.svg";
import img5 from "./img/img5.svg";
import img6 from "./img/img6.svg";
import { Link,} from 'react-router-dom';

const home = () => {

  
  return (
    <div className="home-container">
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

      <main className="main-content">
        <div className="content">
          <h1>Transform Your Idea Into Reality with Finsweet</h1>
          <p>
            The entire Finsweet team knows what’s good with Webflow and you can too with 1 week and a good attitude.
          </p>
          <button className="request-quote">Request Quote →</button>
        </div>
        <div className="image-wrapper">
          <img src={rasm1} alt="Team" />
        </div>
      </main>

      <footer className="footers">
        <div className="clients">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        </div>
      </footer>
    </div>
  );
};

export default home;
