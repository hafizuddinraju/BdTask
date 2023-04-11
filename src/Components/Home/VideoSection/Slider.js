import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import logo from "../../../Assets/Bdjobs-logo.png";
import iom from "../../../Assets/IOM.png";

const Slide = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div className="flex justify-center items-center bg-white h-48">
          <SwiperSlide>
            <div className=" bg-white md:p-10 p-7 rounded-xl">
              <img src={logo} alt="" className="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white md:p-5 md:h-32 h-[88px] rounded-xl">
              <img src={iom} alt="" />
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Slide;