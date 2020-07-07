import React from 'react';
import './style.css';
import Social from '../Social'

const  Header= (props) => {
  return(
    <header className="header">
      <nav className="headerMin">
      <a href="#a">Home</a>
      <a href="#a">About Us</a>
      <a href="#a">Contact Us</a>
      </nav>
      <div className="social">
      <Social />
      </div>
    </header>
   )

 }

export default Header;