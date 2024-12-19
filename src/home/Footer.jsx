import React from 'react';
import './style.css';
import rasm2 from "./img/rasm2.svg";
// import rasm3 from "./img/rasm3.svg";
import rasm4 from "./img/rasm4.svg";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";



const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-logos">
      
        <img src={rasm7} alt="Client  Logo 1" />
          <img src={rasm2} alt="Client Logo 2" />
          {/* <img src={rasm3} alt="Client Logo 3" /> */}
          <img src={rasm4} alt="Client Logo 4" />
          <img src={rasm5} alt="Client Logo 5" />
          <img src={rasm6} alt="Client Logo 6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;




