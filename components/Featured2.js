import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Featured2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
        <Image src="/Images/product2.jpg" alt='Za' objectFit="cover" width="500" height="500"/>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Featured2
