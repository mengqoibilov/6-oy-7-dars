import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo"> (Finsweet</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>

        <li><a href="#">Career</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact us</a></li>
        <li><a href="#" className="clone">Clone project →</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;



