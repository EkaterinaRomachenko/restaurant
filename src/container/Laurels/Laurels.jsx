import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, AwardCard } from '../../components';
import './Laurels.css';

function Laurels() {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition" />
        <h2 className="headtext__cormorant">Our Laurels</h2>
        <div className="app__laurels-awards">
          {data.awards.map((award) => (
            <AwardCard {...award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels img" />
      </div>
    </div>
  );
}

export default Laurels;
