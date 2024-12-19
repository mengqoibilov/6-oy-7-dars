import React from "react";
import "./style.css";
import rasm5 from "./img/rasm5.svg";
import rasm6 from "./img/rasm6.svg";
import rasm7 from "./img/rasm7.svg";
import rasm8 from "./img/rasm8.svg";
const Feeter = () => {
  return (
    <footer className="Oxirgi">
      <div className="container">
        <div className="contact-section">
          <h1 className="heading">Let's make something special</h1>
          <p className="sub-heading">Let's talk! 👍</p>
          <p className="contact-info">020 7993 2905</p>
          <a href="mailto:hi@finsweet.com" className="email">
            hi@finsweet.com
          </a>
          <p className="address">DLF Cybercity, Bhubaneswar, India, 652560</p>
        </div>

        <div className="links-section">
          <div className="links">
            <h4>Home</h4>
            <h4>Service</h4>
            <h4>Company</h4>
            <h4>Career</h4>
            <h4>News</h4>
          </div>

          <div className="links">
            <h4>Service</h4>
            <p>Technical support</p>
            <p>Testing</p>
            <p>Development</p>
            <p>AWS/Azure</p>
            <p>Consulting</p>
            <p>Information Technology</p>
          </div>

          <div className="links">
            <h4>Resources</h4>
            <p>About Us</p>
            <p>Testimonial</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Blog</p>
          </div>
        </div>

        <div className="contact-button">
          <span>Contact Us →</span>
        </div>
      </div>

      <div className="footer-bottom">
        <h1 className="fine">Finsweet</h1>
        <p>©2021 Finsweet</p>
        <div className="social-icons">
          <span><img src={rasm5} alt="" /></span>
          <span><img src={rasm6} alt="" /></span>
          <span><img src={rasm7} alt="" /></span>
          <span><img src={rasm8} alt="" /></span>
        </div>
      </div>
    </footer>
  );
};

export default Feeter;

