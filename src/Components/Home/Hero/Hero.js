import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { GoBriefcase, GoGlobe, GoLocation } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbTool } from "react-icons/tb";
import image0 from "../../../Assets/slide-00.jpg";
import image1 from "../../../Assets/slide-01.jpg";
import image2 from "../../../Assets/slide-02.jpg";
import image3 from "../../../Assets/slide-03.jpg";
import image4 from "../../../Assets/slide-04.jpg";
import image5 from "../../../Assets/slide-05.jpg";
import bg1 from "../../../Assets/banner-bg-l.png";
import bg2 from "../../../Assets/banner-bg-r.png";
import submitBio from "../../../Assets/submit_biodata.png";

const Hero = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3">
        {/* job search */}
        <div
          className="bg-repeat-x bg-bottom order-4 sm:order-3 lg:order-1"
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        >
          <div className="">
            <div className="text-white bg-[#2E7FDA] bg-opacity-90">
              <div className="flex flex-row lg:justify-end">
                <div className="sm:p-10 p-5">
                  <div>
                    <h3 className="mb-4 font-bold text-xl text-center sm:text-left">
                      সঠিক চাকরি খুঁজে নিন
                    </h3>
                    <h4 className="mb-4 font-bold flex">
                      <span className="text-xl mr-2">
                        <GoBriefcase />
                      </span>
                      কাঙ্ক্ষিত পেশা
                    </h4>
                    <input
                      type="text"
                      placeholder="ড্রাইভার, ইলেকট্রিশিয়ান ইত্যাদি"
                      className="input w-full lg:w-[262px] text-xs bg-white mb-4 text-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold flex">
                      <span className="text-xl mr-2">
                        <GoGlobe />
                      </span>
                      দক্ষতার ধরন
                    </h4>
                    <select className="select w-full lg:w-[262px] bg-white text-gray-500">
                      <option disabled selected>
                        দক্ষতার ধরন নির্বাচন
                      </option>
                      <option>সম্পূর্ণ দক্ষ</option>
                      <option>মাঝারি দক্ষ</option>
                      <option>কম দক্ষ</option>
                    </select>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold flex mt-4">
                      <span className="text-xl mr-2">
                        <GoLocation />
                      </span>
                      দেশ
                    </h4>
                    <select className="select w-full lg:w-[262px] bg-white text-gray-500">
                      <option disabled selected>
                        দেশ নির্বাচন
                      </option>
                      <option>সংযুক্ত আরব আমীরাত (United Arab Emirates)</option>
                      <option>সৌদি আরব (Saudi Arabia)</option>
                      <option>জাপান (Japan)</option>
                      <option>দক্ষিণকোরিয়া (South Korea)</option>
                      <option>মালয়েশিয়া (Malaysia)</option>
                      <option>ওমান (Oman)</option>
                      <option>জর্ডান (Jordan)</option>
                      <option>ডেনমার্ক (Denmark)</option>
                    </select>
                  </div>
                  <button className="btn btn-warning mt-4 w-full md:w-auto">
                    অনুসন্ধান
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper order-1 lg:order-2"
        >
          <SwiperSlide>
            <img src={image0} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image5} alt="" />
          </SwiperSlide>
        </Swiper>
        <div class="w-full order-1 sm:order-1 lg:hidden block bg-white p-5">
          <div className="flex justify-between container mx-auto item">
            <div className="text-center">
              <div className="bg-red-500 rounded-full p-2 inline-block">
                <span className="text-white">
                  {" "}
                  <HiOutlineUsers className="text-4xl" />
                </span>
              </div>
              <div className="">
                <p className="font-bold text-gray-900 text-sm">
                  কর্মী প্রয়োজন
                </p>
                <p className="text-red-500 font-bold">১৩০</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 rounded-full  p-2 inline-block">
                <span className="text-white">
                  {" "}
                  <TbTool className="text-4xl" />
                </span>
              </div>
              <div className="">
                <p className="font-bold text-gray-900 text-sm">চাকরির সংখ্যা</p>
                <p className="text-green-500 font-bold">১২</p>
              </div>
            </div>
            <div>
              <div className="text-center">
                <div className="bg-[#FF9800] rounded-full p-2  inline-block">
                  <span className="text-white">
                    {" "}
                    <GoGlobe className="text-4xl" />
                  </span>
                </div>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm ">
                  বিভিন্ন দেশের <br />
                  চাকরি
                </p>
                <p className="text-[#FF9800] font-bold">৮</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:order-4  order-3 lg::order-3">
          <div
            className="w-full  bg-repeat-x bg-bottom"
            style={{
              backgroundImage: `url(${bg2})`,
            }}
          >
            <div className="">
              <div className="text-white bg-[#2E7FDA] bg-opacity-80  ">
                <div className="flex flex-row justify-start">
                  <div className="p-4">
                    <div>
                      <h3 className="mb-4 font-bold mt-4">
                        বিভিন্ন দেশে কর্মী প্রয়োজন
                      </h3>
                      <ul>
                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbna71a.html?locationId=310">
                            সংযুক্ত আরব আমীরাত (৪৫)
                          </a>
                        </li>

                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbn470b.html?locationId=276">
                            সৌদি আরব (৩৫)
                          </a>
                        </li>

                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbnafa2.html?locationId=202">
                            জাপান (২৫)
                          </a>
                        </li>

                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbnd62b.html?locationId=287">
                            দক্ষিণকোরিয়া (১১)
                          </a>
                        </li>

                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbn3f0a.html?locationId=222">
                            মালয়েশিয়া (৬)
                          </a>
                        </li>

                        <li className="mb-4 font-thin text-gray-200">
                          <a href="jobsearchbnd71a.html?locationId=252">
                            ওমান (৬)
                          </a>
                        </li>
                        <li className="mb-6 font-thin text-gray-200">
                          <a href="jobsearchbnd71a.html?locationId=252">
                            সব দেশ
                          </a>
                        </li>
                      </ul>
                      <button className="btn btn-warning bg-[#FFDC79] mt-[6px] font-bold rounded-lg text-gray-950 w-40">
                        <img src={submitBio} alt="" />
                        Submit your <br />
                        Biodata
                      </button>
                    </div>
                    <button className="btn flex flex-col hover:bg-white bg-white mt-[6px] font-bold rounded-lg text-gray-950 w-40">
                      <img
                        src="https://bdesh.bdjobs.com/images/bdesh_jatra.svg"
                        alt=""
                      />
                      <div className="text-[10px]">অভিবাসন বিষয়ক তথ্য</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full   order-4 sm:order-2 hidden lg:block">
        <div className="w-full  bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-3">
              <div className="flex p-4">
                <div className="bg-red-500 rounded-full p-4 inline-block">
                  <span className="text-white">
                    {" "}
                    <HiOutlineUsers className="text-4xl" />
                  </span>
                </div>
                <div className="mt-3 ml-4">
                  <p className="font-bold text-gray-900">কর্মী প্রয়োজন</p>
                  <p className="text-red-500 font-bold">১৩০</p>
                </div>
              </div>
              <div className="flex p-4">
                <div className="bg-green-500 rounded-full p-4 inline-block">
                  <span className="text-white">
                    {" "}
                    <TbTool className="text-4xl" />
                  </span>
                </div>
                <div className="mt-3 ml-4">
                  <p className="text-gray-900 font-bold">চাকরির সংখ্যা</p>
                  <p className="font-bold text-green-500">১২</p>
                </div>
              </div>
              <div className="flex p-4">
                <div className="bg-[#FF9800] rounded-full p-4 inline-block">
                  <span className="text-white">
                    {" "}
                    <GoGlobe className="text-4xl" />
                  </span>
                </div>
                <div className="mt-3 ml-4">
                  <p className="text-gray-900 font-bold">বিভিন্ন দেশের চাকরি</p>
                  <p className="text-[#FF9800]">৮</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
