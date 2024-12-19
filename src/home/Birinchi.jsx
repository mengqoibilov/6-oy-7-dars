import React from 'react';
import './style.css';
import rasm1 from "./img/rasm1.svg"

const Birinchi= () => {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Transform Your Idea <br /> Into Reality with Finsweet</h1>
        <p>
          The entire Finsweet team knows what’s good with Webflow and <br />
          you can too with 1 week and a good attitude.
        </p>
        <button className="request-btn">Request Quote →</button>
      </div>
      <div className="home-image">
        <img src={rasm1} alt="Meeting" />
      </div>
    </section>
  );
};
export default Birinchi;
