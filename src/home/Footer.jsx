import React from "react";
import "./footer.css";
import footer1 from "../home/img/footer1.svg";
import footer2 from "../home/img/footer2.svg";
import footer3 from "../home/img/footer3.svg";
import footer4 from "../home/img/footer4.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       
        <div className="footer-left">
          <div className="footer-logo"></div>
          <h1>Let's make something special</h1>
          <p className="footer-contact">
            Let's talk! 👍 <br />
            020 7993 2905 <br />
            hi@finsweet.com
          </p>
          <p className="footer-address">
            DLF Cybercity, Bhubaneswar, India, &52050
          </p>
        </div>

       
        <div className="footer-links">
          <div className="link-column">
            <h4>Home</h4>
            <p>Service</p>
            <p>Company</p>
            <p>Career</p>
            <p>News</p>
          </div>

          <div className="link-column">
            <h4>Service</h4>
            <p>Technical support</p>
            <p>Testing</p>
            <p>Development</p>
            <p>AWS/Azure</p>
            <p>Consulting</p>
            <p>Information Technology</p>
          </div>

          <div className="link-column">
            <h4>Resources</h4>
            <p>About Us</p>
            <p>Testimonial</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
            <p>Blog</p>
          </div>
        </div>

      
        <div className="footer-contact-btn">
          <span>Contact Us →</span>
        </div>
      </div>

    
      <div className="footer-bottom">
        <h1>(Finsweet</h1>
        <p>©2021 Finsweet</p>
        <div className="social-icons">
          <span><img src={footer1} alt="" /></span>
          <span><img src={footer2} alt="" /></span>
          <span><img src={footer3} alt="" /></span>
          <span><img src={footer4} alt="" /></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
