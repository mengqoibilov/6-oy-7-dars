import React from 'react';
import './home.css';
import rasm1 from "./img/rasm1.svg";
import rasm2 from "./img/rasm2.svg";
import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";
const home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <div className="logo">{`{Finsweet}`}</div>
        <nav className="nav-links">
        <li><Link to="/services">Service</Link></li>
        <li><Link to="/company">Company</Link></li>
          <a href="./">Company</a>
          <a href="./">Career</a>
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

      <footer className="footer">
        <div className="clients">
           { <span><img src={rasm7} alt="" /></span> }
          { <span><img src={rasm2} alt="" /></span> }
          { <span><img src={rasm3} alt="" /></span> }
          { <span><img src={rasm4} alt="" /></span> }
          { <span><img src={rasm5} alt="" /></span> }
          { <span><img src={rasm6} alt="" /></span> }
        </div>
      </footer>
    </div>
  );
};

export default home;
