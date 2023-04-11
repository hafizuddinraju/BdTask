import React, { useState } from "react";
import video from "../../../Assets/promo-video-home.jpg";
import "react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import Slide from "./Slider";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-[#ECEFF1] lg:p-10 p-2">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <div>
              <h3 className="text-black md:text-xl lg:p-5 text-sm font-bold  p-2">
                আস্থা ও নির্ভরতায় বিদেশ জবস্
              </h3>
              <img
                src={video}
                alt=""
                onClick={() => setOpen(true)}
                className="rounded-2xl"
              />
            </div>
          </div>
          <div>
            <h3 className="text-black md:text-xl lg:p-5 text-sm  font-bold p-2">
              যৌথ ব্যবস্থাপনায়
            </h3>
            <Slide />
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="e3wpqRBmWGU"
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default VideoSection;