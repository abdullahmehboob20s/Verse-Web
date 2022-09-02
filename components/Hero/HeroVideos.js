import React from "react";

function HeroVideos() {
  return (
    <div className="lg:absolute top-1/2 right-0 max-w-[34rem] lg:max-w-none w-[100%] lg:w-[46%] lg:-translate-y-2/4 -z-10 h-[20rem] sm:h-[28rem] lg:h-[24rem] xl:h-500px flex space-x-4 justify-between items-center mx-auto lg:mx-0 mt-10 lg:mt-0">
      <div className="hero-video-card h-[86%]">
        <video
          loading="lazy"
          src="images/compressed-images/club.mp4"
          muted={true}
          loop={true}
          autoPlay={true}
          defaultmuted={true}
          playsinline={true}
        ></video>
      </div>
      <div className="hero-video-card h-full">
        <video
          loading="lazy"
          src="images/compressed-images/beach.mp4"
          muted={true}
          loop={true}
          autoPlay={true}
          defaultmuted={true}
          playsinline={true}
        ></video>
      </div>
      <div className="hero-video-card h-[86%]">
        <video
          loading="lazy"
          src="images/compressed-images/plaza.mp4"
          muted={true}
          loop={true}
          autoPlay={true}
          defaultmuted={true}
          playsinline={true}
        ></video>
      </div>
    </div>
  );
}

export default HeroVideos;
