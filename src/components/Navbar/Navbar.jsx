import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Логотип ресторана" />
      </div>
      <ul className="app__navbar-list">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#pages">Pages</a>
        </li>
        <li className="p__opensans">
          <a href="#contacts">Contact Us</a>
        </li>
        <li className="p__opensans">
          <a href="#blog">Block</a>
        </li>
        <li className="p__opensans">
          <a href="#landing">Landing</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / registration
        </a>
        <span className="app__navbar-line"></span>
        <a href="/" className="p__opensans">
          book table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen-list">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#pages">Pages</a>
              </li>
              <li className="p__opensans">
                <a href="#contacts">Contact Us</a>
              </li>
              <li className="p__opensans">
                <a href="#blog">Block</a>
              </li>
              <li className="p__opensans">
                <a href="#landing">Landing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
