import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Best Homemade Authentic Taste Ever</h3>
            <p>If you want to get authentic taste you can order from us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Here You Get Many Packages</h3>
            <p>We have many types of food packages in reasonable price.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>We Always think About Client Satisfaction</h3>
            <p> 
              All time we try our best to deliver fresh food.Client is our first priority.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
