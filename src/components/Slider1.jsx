import React from "react";

const Slider1 = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <ul id="sb-slider" className="sb-slider">
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2969141180"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/1.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Creative Lifesaver</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2968268187"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/2.jpg"
                alt="image2"
              />
            </a>
            <div className="sb-description">
              <h3>Honest Entertainer</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2968114825"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/3.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Brave Astronaut</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2968122059"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/4.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Affectionate Decision Maker</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2969119944"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/5.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Faithful Investor</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2968126177"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/6.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Groundbreaking Artist</h3>
            </div>
          </li>
          <li>
            <a
              href="http://www.flickr.com/photos/strupler/2968945158"
              target="_blank"
            >
              <img
                src="https://tympanus.net/Development/Slicebox/images/7.jpg"
                alt="image1"
              />
            </a>
            <div className="sb-description">
              <h3>Selfless Philantropist</h3>
            </div>
          </li>
        </ul>
        <div id="shadow" className="shadow" />
        <div id="nav-arrows" className="nav-arrows">
          <a href="#">Next</a>
          <a href="#">Previous</a>
        </div>
      </div>
    </div>
  );
};

export default Slider1;
