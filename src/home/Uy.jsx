import React from 'react';
import './style.css';

const Uy = () => {
  return (
    <>
      <nav className='navbar'>
        <h1>Finsweet</h1>
        <ul className='ull'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Clone project →</a></li>
        </ul>
      </nav>


      
      <section class="services-section">
    <div class="content">
      <h3>Our Services</h3>
      <h1>We Build Software Solutions that Solve Clients Business Challenges</h1>
      <p>
        Through True Rich Attended does no end it his mother since favourable 
        real had half every him case in packages enquire we up ecstatic.
      </p>
      <button class="btn">Request A Quote →</button>
    </div>

    <div className="list">
      <p>Technical support</p>
      <p>Development <span>→</span></p>
      <p>AWS/Azure</p>
      <p>Consulting</p>
      <p>Information Technology</p>
    </div>
  </section>
    </>
  );
};

export default Uy;