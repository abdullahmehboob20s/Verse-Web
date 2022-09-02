import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-5">
        Patent Protected
      </h1>
      <h4 className="text-purple fs-24px font-medium mb-7">
        Our patented technology is years ahead of the competition.
      </h4>
      <p className="fs-16px font-light mb-9 text-white">
        We have laid the groundwork for the metaverse and we will be forever
        tied to the growth and prosperity of the meta-era.
      </p>

      <LearnMoreButton title="See all Patents" weight="font-bold" />
    </>
  );
};

const RightSection = () => {
  return (
    <img
      src="images/patents.png"
      className="lg:absolute top-[50%] left-1/2 w-[70%] sm:w-1/2 lg:w-[70%] lg:translate-y-[-50%] lg:translate-x-[-50%]"
      alt=""
    />
  );
};

function Protected() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="p-14 pr-0"
      sectionTwoClassName="relative flex items-center justify-center row-start-1 lg:row-start-auto"
      overflow="overflow-visible"
    />
  );
}

export default Protected;
