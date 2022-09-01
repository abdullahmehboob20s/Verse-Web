import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="text-[55px] leading-[1] font-bold text-white mb-5">
        Patent Protected
      </h1>
      <h4 className="text-purple text-2xl font-medium mb-7">
        Our patented technology is years ahead of the competition.
      </h4>
      <p className="text-base font-light mb-9 text-white">
        We have laid the groundwork for the metaverse and we will be forever
        tied to the growth and prosperity of the meta-era.
      </p>

      <LearnMoreButton title="See all Patents" weight="font-bold" />
    </>
  );
};

function Protected() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      sectionOneClassName="pr-0"
      sectionTwoClassName="relative"
      overflow="overflow-visible"
    >
      <div className="relative">
        <img
          src="images/patents.png"
          className="absolute top-[50%] left-1/2 w-[70%] translate-y-[-50%] translate-x-[-50%]"
          alt=""
        />
      </div>
    </SideBySideSection>
  );
}

export default Protected;
