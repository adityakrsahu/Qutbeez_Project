import React from 'react';
import imgabout from '../images/abt3.jpg'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <img src={imgabout} alt="About Qutbeez" />
        <h1>ABOUT QUTBEEZ</h1>
      </div>
      <div className="about-us-featured">
        <div className="about-us-featured-item">
          <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Featured Product 1" />
          <button>BUY NOW</button>
        </div>
        <div className="about-us-featured-item">
          <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Featured Product 2" />
          <button>BUY NOW</button>
        </div>
      </div>
      <div className="about-us-founders">
        <h2>The Founders</h2>
        <div className="founders-list">
          <div className="founder">
            <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Founder 1" />
          </div>
          <div className="founder">
            <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Founder 2" />
          </div>
          <div className="founder">
            <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Founder 3" />
          </div>
          <div className="founder">
            <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Founder 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;