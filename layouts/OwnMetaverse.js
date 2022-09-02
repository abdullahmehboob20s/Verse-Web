import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-2">
        Build your OWN Metaverse
      </h1>
      <h4 className="text-purple fs-24px font-medium mb-5 lg:mb-7">
        {"It's"} easy
      </h4>
      <p className="fs-16px leading-[1.7] font-light mb-8 text-white">
        If you’re considering or already building a Metaverse presence, our
        platform is where you want it to be! We give you the software, tools, IP
        protection, technical support and 17 years of experience: Everything you
        need to be the Sovereign of your own Metaverse - Faster and Better!
      </p>

      <LearnMoreButton title="Learn More" />
    </>
  );
};

const RightSection = () => {
  return (
    <Image
      alt=""
      layout="fill"
      src="/images/nature.png"
      className="w-full h-full object-cover"
    />
  );
};

function OwnMetaverse() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionTwoClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default OwnMetaverse;
