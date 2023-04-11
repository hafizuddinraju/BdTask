import React from "react";
import Hero from "./Hero/Hero";
import Content from "../Content/Content";
import VideoSection from "./VideoSection/VideoSection";
import JobPost from "./JobPost/JobPost";

const Home = () => {
  return (
    <div>
      <Hero />
      <Content></Content>
      <JobPost/>
      <VideoSection />
    </div>
  );
};

export default Home;
