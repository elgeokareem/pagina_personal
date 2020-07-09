import React, { Component } from "react";
import Slider from "react-slick";
import Particles from "react-tsparticles"
import particles_config from "../config/tsparticles"

import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../backend/public/CSS/carousel.css"


function SimpleSlider ()  {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="contenedor-carousel-particles">

      <Particles
      id={null}
      className="particlesContainer"
      params={particles_config}
      />
      <Slider
      className="carrusel"
      {...settings}
      >
        <div>
          <img
          src="./img/slider_1.jpg"
          alt="1"
          className="carousel-image"
          />
        </div>
        <div>
          <img
          src="./img/slider_2.jpg"
          alt="2"
          className="carousel-image"
          />
        </div>
        <div>
          <img
          src="./img/slider_3.jpg"
          alt="3"
          className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider