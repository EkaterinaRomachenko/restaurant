import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus_overlay flex__center">
        <img src={images.G} alt="G" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h2 className="headtext__cormorant">About Us</h2>
          <img src={images.spoon} alt="spoon img" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing
            ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife img" />
        </div>
        <div className="app__aboutus-content_history">
          <h2 className="headtext__cormorant">Our History</h2>
          <img src={images.spoon} alt="spoon img" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi
            volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
