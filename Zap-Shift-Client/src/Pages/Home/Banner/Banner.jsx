import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true} className="w-full mx-auto">
      <img src={bannerImg1} />
      <img src={bannerImg2} />
      <img src={bannerImg3} />
    </Carousel>
  );
};

export default Banner;
