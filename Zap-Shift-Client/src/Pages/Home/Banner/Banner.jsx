import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/Banner1.png";
import bannerImg2 from "../../../assets/banner/Banner2.png";
import bannerImg3 from "../../../assets/banner/Banner3.png";
import Arrow from "../../../assets/Images/Frame 4.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={bannerImg1} />
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
