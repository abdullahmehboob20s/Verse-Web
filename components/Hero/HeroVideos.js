import React from "react";

function HeroVideos() {
  return (
    <div className="lg:absolute top-1/2 right-0 max-w-[34rem] lg:max-w-none w-[100%] lg:w-[46%] lg:-translate-y-2/4 -z-10 h-[20rem] sm:h-[28rem] xl:h-500px flex space-x-4 justify-between items-center mx-auto lg:mx-0 mt-10 lg:mt-0">
      <div className="hero-video-card flex-1 relative overflow-hidden h-[86%]">
        <video
          loading="lazy"
          src="images/compressed/club.mp4"
          className="absolute top-0 left-[50%] translate-x-[-50%] w-full h-full object-cover"
          muted={true}
          loop={true}
          autoPlay={true}
          defaultmuted={true}
          playsinline={true}
        ></video>
      </div>
      <div className="hero-video-card flex-1 relative overflow-hidden h-full">
        <video
          loading="lazy"
          src="images/compressed/beach.mp4"
          className="absolute top-0 left-[50%] translate-x-[-50%] w-full h-full object-cover"
          muted={true}
          loop={true}
          autoPlay={true}
          defaultmuted={true}
          playsinline={true}
        ></video>
      </div>
      <div className="hero-video-card flex-1 relative overflow-hidden h-[86%]">
        <video
          loading="lazy"
          src="images/compressed/plaza.mp4"
          className="absolute top-0 left-[50%] translate-x-[-50%] w-full h-full object-cover"
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
