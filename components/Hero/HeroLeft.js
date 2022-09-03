import React from "react";
import HeroButton from "./HeroButton";

function HeroLeft() {
  return (
    <div className="text-center lg:text-left lg:w-[50%] flex flex-col items-center lg:items-start">
      <h1 className="text-5xl xl:text-7xl text-purple font-bold relative leading-[1] mb-2 xl:mb-4">
        Utherverse
        <sup className="text-purple text-base font-normal align-super">®</sup>
      </h1>
      <p className="text-xl sm:text-2xl xl:text-4xl text-white font-medium mb-4 xl:mb-7">
        Best Of All Worlds
        <span className="text-[.25em] align-super font-medium"> TM</span>
      </p>

      <p className="max-w-[18rem] lg:max-w-none text-sm xl:text-base text-white font-light mb-6 xl:mb-8">
        Combining the best of the Internet, Video Gaming and{" "}
        <br className="hidden lg:block" /> Virtual Reality
      </p>

      <div className="flex justify-center lg:justify-start items-center mb-9 flex-wrap -mx-1 xl:mx-[-0.5rem]">
        <HeroButton className="m-1 xl:m-2 bg-purple-gradient">
          Whitepaper
        </HeroButton>
        <HeroButton className="m-1 xl:m-2 bg-purple">Tokenomics</HeroButton>
        <HeroButton className="m-1 xl:m-2 bg-purple">
          <span className="lowercase">f</span>Nft™
        </HeroButton>
        <HeroButton className="m-1 xl:m-2 hover:bg-purple-gradient">
          Participate in IDO
        </HeroButton>
      </div>

      <p className="font-medium text-white bg-darkPurple text-xs leading-[1.6] rounded-[5px] w-full max-w-[550px] py-[14px] px-5 mx-auto lg:mx-0">
        <span className="font-bold">Contract address:</span>{" "}
        <span className="opacity-[.7]">
          Once the token launches the official contract address will be here.
          Please be aware of scams. This token has not yet launched!
        </span>
      </p>
    </div>
  );
}

export default HeroLeft;
