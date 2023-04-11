import React from "react";
import question from "../../Assets/question-icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white border-t-2 border-[#3F51B5] p-16">
      <div className="container mx-auto max-w-6xl">
        <footer className="footer">
          <div className="hidden sm:inline-flex flex-col">
            <span className="font-bold text-[15px]">আমাদের সম্পর্কে</span>
            <Link className="text-gray-400 hover:text-gray-700">এই ওয়েবসাইট সম্পর্কিত</Link>
            <Link className="text-gray-400 hover:text-gray-700">শর্তাবলী এবং নীতিমালা</Link>
            <Link className="text-gray-400 hover:text-gray-700">ফিডব্যাক</Link>
          </div>
          <div className="hidden sm:inline-flex flex-col">
            <span className="font-bold text-[15px]">
              চাকরিপ্রার্থীদের জন্য
            </span>
            <Link className="text-gray-400 hover:text-gray-700">নতুন অ্যাকাউন্ট</Link>
            <Link className="text-gray-400 hover:text-gray-700">ক্যারিয়ার পরামর্শ</Link>
            <Link className="text-gray-400 hover:text-gray-700">প্রশ্নাবলী</Link>
          </div>
          <div className="hidden sm:inline-flex flex-col">
            <span className="font-bold text-[15px]">নিয়োগদাতাদের জন্য</span>
            <Link className="text-gray-400 hover:text-gray-700">পণ্য/সার্ভিস</Link>
            <Link className="text-gray-400 hover:text-gray-700">চাকরি পোস্ট</Link>
            <Link className="text-gray-400 hover:text-gray-700">প্রশ্নাবলী</Link>
          </div>
          <div className="mx-auto">
            <span className="font-bold text-[15px]">
              টুলস ও সামাজিক মিডিয়া
            </span>
            <Link className="text-gray-400 hover:text-gray-700">Download Mobile App</Link>
            <Link className="link link-hover">
              <img
                src="https://bdesh.bdjobs.com/images/google-play-badge.svg"
                alt=""
              />
            </Link>
          </div>
          <div className=" mx-auto text-center sm:text-left">
            <span className="font-bold text-[15px] sm:mx-0 mx-auto">
              যোগাযোগ
            </span>
            <Link className="text-gray-400 hover:text-gray-700">
              চাকরি সংক্রান্ত যেকোনো প্রয়োজনে সরাসরি
            </Link>
            <div className="flex justify-center items-center">
              <div>
                <img src={question} alt="" className="" />
              </div>
              <div className="ml-2">
                <p className="text-black font-bold">সাহায্যের জন্য কল করুন</p>
                <p className="text-red-500 font-bold text-2xl">16479</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
