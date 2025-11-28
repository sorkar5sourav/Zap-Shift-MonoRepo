import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./TestimonialSlider.css";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  // console.log(reviews);
  return (
    <div className="my-24">
      <div className="text-center mb-24">
        <h3 className="text-3xl text-center font-bold my-8">Review</h3>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          spaceBetween={30}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
            1500: { slidesPerView: 5 },
          }}
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <ReviewCard review={review}></ReviewCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="controls">
          <button className="prev-btn nav-btn">←</button>
          <div className="custom-pagination"></div>
          <button className="next-btn nav-btn">→</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
