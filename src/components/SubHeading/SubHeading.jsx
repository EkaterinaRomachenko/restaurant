import React from 'react';
import { images } from '../../constants';

function SubHeading({ title }) {
  return (
    <div className="app__sub-heading" style={{ margin: '0 0 16px' }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} className="spoon__img" alt="Изображение ложки" />
    </div>
  );
}

export default SubHeading;
