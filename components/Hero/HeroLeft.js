import React from "react";
import HeroButton from "./HeroButton";

function HeroLeft() {
  return (
    <div className="w-[50%]">
      <h1 className="text-7xl 2xl:text-[100px] text-purple font-bold relative w-fit leading-[1] mb-4 2xl:mb-9">
        Utherverse{" "}
        <sup className="text-purple text-base font-normal absolute top-[1em] left-[100%]">
          ®
        </sup>
      </h1>
      <p className="text-4xl 2xl:text-[40px] text-white font-medium mb-7">
        Best Of All Worlds
        <span className="text-[.25em] align-super font-medium"> TM</span>
      </p>

      <p className="text-base text-white font-light mb-8 2xl:mb-10">
        Combining the best of the Internet, Video Gaming and{" "}
        <br className="hidden sm:block" /> Virtual Reality
      </p>

      <div className="flex items-center mb-9 flex-wrap mx-[-0.5rem]">
        <HeroButton className="m-2 bg-purple-gradient">Whitepaper</HeroButton>
        <HeroButton className="m-2 bg-purple">Tokenomics</HeroButton>
        <HeroButton className="m-2 bg-purple">
          <span className="lowercase">f</span>Nft™
        </HeroButton>
        <HeroButton className="m-2 hover:bg-purple-gradient">
          Participate in IDO
        </HeroButton>
      </div>

      <p className="font-medium text-white bg-darkPurple text-xs leading-[1.6] rounded-[5px] w-full max-w-[550px] py-[14px] px-5">
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
