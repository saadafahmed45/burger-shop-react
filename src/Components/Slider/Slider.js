import React from 'react';
import './Slider.css'
import { Carousel } from 'react-bootstrap';
import c1 from '../Images/pexels-andrea-piacquadio-919436.jpg'
import c2 from '../Images/pexels-freestocksorg-291762.jpg'
import c3 from '../Images/pexels-ron-lach-9594685.jpg'
import BtnavBar from '../BtnavBar/BtnavBar';
const Slider = () => {
    return (
        <div>
            <Carousel fade>
              
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1>Second slide label</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={c3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;