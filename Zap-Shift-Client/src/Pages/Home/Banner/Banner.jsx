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
    <div className="relative">
      <Carousel autoPlay={true} infiniteLoop={true} className="w-full mx-auto">
        <img src={bannerImg1} />
        <img src={bannerImg2} />
        <img src={bannerImg3} />
      </Carousel>
      <div className="absolute top-14/20 left-5/23 -translate-x-1/2 -translate-y-1/2 flex flex-row flex-wrap justify-center">
        <Link to={"/track"} className="btn max-h-14 btn-primary rounded-full">
          Trak Your Parcel
        </Link>
        <img src={Arrow} alt="" className="h-11" />
        <Link to={"/rider-apply"} className="btn ml-4 max-h-14">
          Be a Rider
        </Link>
      </div>
    </div>
  );
};

export default Banner;
