import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-4">
        UNLIMITED OPPORTUNITIES
      </h1>
      <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
        The Utherverse is built with utility at its core.
      </h4>
      <p className="fs-16px leading-[1.7] font-light text-white">
        Creatives, Designers and Makers can earn by building out worlds,
        designing wearables and objects, providing virtual services and
        entertainment, or engaging in any of the other millions of fun and
        interesting new business opportunities and virtual jobs.
      </p>
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

function UnlimitedOpportunities() {
  return (
    <SideBySideSection
      SectionOne={RightSection}
      SectionTwo={LeftSection}
      sectionOneClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default UnlimitedOpportunities;
