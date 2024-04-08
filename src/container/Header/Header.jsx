import React from 'react';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

function Header() {
  return (
    <header className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-title">The key to Fine dining</h1>
        <p className="p__opensans" style={{ margin: '32px 0' }}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis
          quam scelerisque sapien. Et, penatibus aliquam amet tellus
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </header>
  );
}

export default Header;
