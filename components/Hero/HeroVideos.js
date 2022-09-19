import React from "react";

function HeroVideos() {
  const videos = [
    {
      src: "/images/club.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
    {
      src: "/images/beach.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[280px] md:min-w-[140px] md:min-h-[420px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[475px] 2xl:min-h-[550px]",
    },
    {
      src: "/images/plaza.mp4",
      style:
        "min-w-[84px] sm:min-w-[120px] min-h-[250px] md:min-w-[140px] md:min-h-[380px] lg:min-w-[160px]    xl:min-w-[180px] 2xl:min-w-[200px] lg:min-h-[420px] 2xl:min-h-[500px]",
    },
  ];
  return (
    <div className="max-w-[34rem] lg:max-w-none w-[100%] lg:w-[46%] -z-10 h-[20rem] sm:h-[28rem] lg:h-[24rem] xl:h-500px flex space-x-4 justify-center lg:justify-between items-center mx-auto lg:mx-0 mt-10 lg:mt-0">
      {videos.map((video, index) => {
        return (
          <div
            key={index}
            className={`-skew relative  overflow-hidden ${video.style}`}
          >
            <div className="left-[50%]  skew w-full h-full absolute">
              <video
                className={`object-cover w-full h-full -translate min-w-[300px] `}
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HeroVideos;
