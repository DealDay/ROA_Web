import React from "react";

import "./Homepage.css";

import Carousel, {
  CarouselItem,
} from "../Shared/Components/UIElements/Carousel";

const Homepage = () => {
  return (
    <React.Fragment>
      <div>
        <Carousel>
          <CarouselItem>
            <img
              className="carousel_size"
              alt=""
              src="Images/HomeImages/image3.jpg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="carousel_size"
              alt=""
              src="Images/HomeImages/image4.jpg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="carousel_size"
              alt=""
              src="Images/HomeImages/image2.jpg"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="carousel_size"
              alt=""
              src="Images/HomeImages/image1.jpg"
            />
          </CarouselItem>
        </Carousel>
      </div>
      <div className="level1-area">
        <div className="text">New Collections</div>
        <div>
          <ul className="bag">
            <li>
              <img
                className="bag_size"
                alt=""
                src="Images/HomeImages/bag2.png"
              />
            </li>
            <li>
              <img
                className="bag_size"
                alt=""
                src="Images/HomeImages/20190904-_K4A7817.jpg"
              />
            </li>
            <li>
              <img
                className="bag_size"
                alt=""
                src="Images/HomeImages/bag1.png"
              />
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Homepage;
