import React from 'react';

import './MenuItem.css';

function MenuItem({ title, price, tags }) {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <p className=" p__cormorant" style={{ color: '#DCCA87' }}>
            {title}
          </p>
        </div>
        <span className="app__menuItem-line"></span>
        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="app__menuItem-sub">
        <p className="p__cormorant" style={{ color: '#AAA' }}>
          {tags}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
