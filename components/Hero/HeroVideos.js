import React from "react";

function HeroVideos() {
  return (
    <div className="absolute top-[50%] right-0 w-[46%] translate-y-[-50%] z-[-1] h-[500px] flex space-x-4 justify-between items-center">
      <div className="hero-video-card flex-1 relative overflow-hidden h-[86%]">
        <video
          loading="lazy"
          src="images/compressed/club.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
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
          className="absolute top-0 left-0 w-full h-full object-cover"
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
          className="absolute top-0 left-0 w-full h-full object-cover"
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
