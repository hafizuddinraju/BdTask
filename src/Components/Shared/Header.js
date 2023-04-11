import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaUserCircle, FaPhone } from "react-icons/fa";
import {MdDoubleArrow} from "react-icons/md"
import jointVenture from "../../Assets/Joint_venture.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle , setToggle] = useState(true)
 
  return (
    <div className="bg-white">
      <header className="bg-[#ECEFF1] text-gray-900 p-2 text-xs hidden sm:block">
        <div className="">
          <div className="container mx-auto max-w-6xl font-bold">
            <div className="flex justify-between items-center">
              <div className="flex-1">
                <ul className="flex space-x-6">
                  <li>
                    <Link className="hover:text-[#1565C0]" to="https://bdjobs.com/">বিডিজবস্</Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#1565C0]" to="jobsearchbn.com">চাকরির খবর</Link>
                  </li>
                  <li>
                    <Link className="hover:text-[#1565C0]" to="https://bdjobs.com/">চাকরিপ্রার্থীর একাউন্ট</Link>
                  </li>
                  <li >
                    <Link className="hover:text-[#1565C0]" to="https://bdjobs.com/">
                      <div className="flex items-center gap-1">
                        <span>নিয়োগকারী সংস্থা/ বিদেশী নিয়োগকর্তা </span>
                      <MdDoubleArrow className="text-xl"/>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center">
                <ul className="flex space-x-4">
                  <li>
                    <button className="bg-blue-500 rounded-full p-1 text-white">
                      <FaFacebook />
                    </button>
                  </li>
                  <li>
                    <button className="bg-red-500 rounded-full p-1 text-white">
                      <FaYoutube />
                    </button>
                  </li>
                </ul>
                <div className="lang ml-4 border-blue-500 border-2">
                  <button className="bg-blue-500 p-1 text-white font-thin">
                    বাংলা
                  </button>
                  <button className="p-1 font-thin">ENG</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
     {/* sign up Header */}
      <div className="navbar container mx-auto max-w-6xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label onClick={()=>setToggle(!toggle)} tabIndex={0} className=" md:hidden lg:hidden">
              <svg
             
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {
              toggle?
              <>
             
               <ul
              tabIndex={0}
              className="dropdown-content mt-3 p-5 mb-3 text-center shadow bg-base-100 rounded-box w-80"
            >
              <ul className="flex flex-col justify-center items-center">
              <li className="mr-4 py-5 ">
                <Link to="/" className="flex items-center">
                  <FaUserCircle className="text-blue-700 mr-1 text-lg" />
                  <span className="inline-block text-blue-400">
                    সাইন ইন / অ্যাকাউন্ট তৈরি
                  </span>
                </Link>
              </li>
              <li className="py-3">
                <Link to="/" className="flex items-center text-gray-900">
                  <FaPhone className=" mr-1" />
                  <span className="inline-block">যোগাযোগ</span>
                </Link>
              </li>
            </ul>
               <hr />
              <li>
                <Link>
                <span className="font-bold text-[13px]">বিডিজবস্</span>
                </Link>
              </li>
              <li>
                <Link>
                <span className="font-bold text-[13px]"> চাকরির খবর</span>
               </Link>
              </li>
              <li>
                <Link>
                <span className="font-bold text-[13px]">চাকরিপ্রার্থীর একাউন্ট</span>
                </Link>
              </li>
              <li>
                <Link>
                <span className="font-bold text-[13px]">নিয়োগকারী সংস্থা/ বিদেশী নিয়োগকর্তা</span>
                </Link>
              </li>
             
            </ul>
              </>
              :
              ""
            }
           
          </div>
          <button className="hidden sm:block">
            <img
              src="https://bdesh.bdjobs.com/images/logo_bdesh.svg"
              alt=""
              className="w-40"
            />
          </button>
        </div>
        <div className="sm:hidden block">
          <img
            src="https://bdesh.bdjobs.com/images/logo_bdesh.svg"
            alt=""
            className="w-40"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <img src={jointVenture} alt="" />
        </div>
        <div className="navbar-end text-sm">
          <div className="flex items-center hidden md:inline-block">
            <ul className="flex items-center">
              <li className="mr-4 ">
                <Link to="/" className="flex items-center">
                  <FaUserCircle className="text-blue-700 mr-1 text-lg" />
                  <span className="hidden md:inline-block text-blue-400">
                    সাইন ইন / অ্যাকাউন্ট তৈরি
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/" className="flex items-center text-gray-900">
                  <FaPhone className=" mr-1" />
                  <span className="hidden md:inline-block">যোগাযোগ</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
