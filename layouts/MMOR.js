import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      className="absolute top-0 left-0 object-cover w-full h-full"
    >
      <source src="images/restaurant-plaza.mp4"></source>
    </video>
  );
};

const RightSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-2">
        MMOR<sup className="font-medium text-[.5em] align-super">™</sup>
      </h1>
      <h4 className="font-medium text-purple fs-24px mb-7">
        Massively Multiuser Online Reality
      </h4>
      <p className="fs-16px font-normal mb-8 text-white leading-[1.6]">
        The Utherverse is the only platform that can truly handle MMOR
        (Massively Multiuser Online Reality) events on all devices, without a
        massiv drain on network resources. Our Innovative technology stack has
        alread solved many of the “show stopping” issues that newer metaverse
        companie haven’t even realized are problems yet.
      </p>

      <LearnMoreButton anchor={true} link="/mmor" title="Learn More" />
    </>
  );
};

function MMOR() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="relative h-[10rem] xs:h-[14rem] lg:h-auto"
      sectionTwoClassName=""
    />
  );
}

export default MMOR;
