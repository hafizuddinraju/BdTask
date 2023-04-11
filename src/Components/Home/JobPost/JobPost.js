import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import countryBg from "../../../Assets/countrys-job-bg.png";

const JobPost = () => {
  const data = [
    {
      id: 1,
      number: "৪৫ টি",
      text: "খালি পদ রয়েছে",
      name: "সংযুক্ত আরব আমীরাত",
    },
    {
      id: 2,
      number: "৩৫ টি",
      text: "খালি পদ রয়েছে",
      name: "সৌদি আরব",
    },
    {
      id: 3,
      number: "২৫ টি",
      text: "খালি পদ রয়েছে",
      name: "জাপান",
    },
    {
      id: 4,
      number: "১১ টি",
      text: "খালি পদ রয়েছে",
      name: "দক্ষিণকোরিয়া",
    },
    {
      id: 5,
      number: "৬ টি",
      text: "খালি পদ রয়েছে",
      name: "মালয়েশিয়া",
    },
    {
      id: 6,
      number: "৬ টি",
      text: "খালি পদ রয়েছে",
      name: "ওমান",
    },
    {
      id: 7,
      number: "১ টি",
      text: "খালি পদ রয়েছে",
      name: "জর্ডান",
    },
    {
      id: 8,
      number: "১ টি",
      text: "খালি পদ রয়েছে",
      name: "ডেনমার্ক",
    },
  ];
  return (
    <div
      className="h-80 "
      style={{
        backgroundImage: `url(${countryBg})`,
      }}
    >
      <div className="bg-[#19A094] opacity-80 h-full">
        <div>
          <h1 className="text-center text-2xl text-white font-bold bg-[#19A094] opacity-100 p-10">
            বিভিন্ন দেশের চাকরি
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              365: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper container mx-auto max-w-6xl cursor-pointer"
          >
            <div className="">
              {data.map((index) => (
                <SwiperSlide className="" key={index.id}>
                  <div className="bg-[#F7FBFB] rounded">
                    <div className="p-5">
                      <h3 className="text-green-500 font-bold text-lg">{index.number}</h3>
                      <p>খালি পদ রয়েছে</p>
                    </div>
                    <div className="bg-black p-2 text-white rounded-b">
                      <p className="font-bold">{index.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default JobPost;
