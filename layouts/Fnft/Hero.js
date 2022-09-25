import Button from "components/Button";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function Hero() {
  return (
    <div id="fnft-hero">
      <div className="container-2 z-10 relative pb-4 lg:pb-100px py-20 lg:py-100px">
        <div className="mb-4 lg:mb-0">
          <div className="mb-6 text-center lg:text-left">
            <h4 className="fs-28px text-white font-medium mb-4">
              This trunk has
            </h4>
            <h1 className="text-3xl md:text-4xl lg:text-5xl neon font-semibold mb-4">
              AN UNIMAGINABLE POWER
            </h1>
            <h4 className="fs-24px text-white font-medium mb-4">
              Your future comes down to this moment…
            </h4>
            <h4 className="neon-secondary fs-24px font-semibold">
              WHAT WILL YOU DO?
            </h4>
          </div>

          <Button className="flex mx-auto lg:mx-0 items-center space-x-4 fs-18px font-medium text-white">
            <span>Join The Discord</span>
            <FaDiscord className="text-xl lg:text-2xl" />
          </Button>
        </div>

        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="-z-50 lg:absolute right-0 top-1/2 lg:-translate-y-1/2 w-full lg:w-auto mx-auto lg:max-h-[100%] lg:-right-36"
        >
          <source src="images/male-trunk.mov" type="video/quicktime" />
          <source src="images/male-trunk.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
