import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="text-[55px] leading-[1] font-bold text-white mb-2">
        Build your OWN Metaverse
      </h1>
      <h4 className="text-purple text-2xl font-medium mb-7">{"It's"} easy</h4>
      <p className="text-base font-light mb-8 text-white">
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
      sectionOneClassName="p-14 pr-0"
      sectionTwoClassName="relative"
    />
  );
}

export default OwnMetaverse;
