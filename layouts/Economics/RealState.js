import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <Image
      alt=""
      layout="fill"
      src="/images/real-state.png"
      className="w-full h-full object-cover scale-110"
    />
  );
};

const RightSection = () => {
  return (
    <>
      <div className="lg:py-4">
        <h1 className="fs-40px leading-[1] font-bold text-white mb-4">
          REAL ESTATE
        </h1>
        <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
          Utherverse Presents a Stylized Vision of Real-World Cities.
        </h4>
        <p className="fs-16px leading-[1.7] font-light mb-5 text-white">
          We are taking the best of architecture and landmarks to reimagine them
          in fun and versatile new ways. Our goal is to present a “best of” our
          beloved cities, with the limitless possibilities presented by virtual
          reality.
        </p>
        <p className="fs-16px leading-[1.7] font-light text-white">
          Uther cities will be ideal for brand and night life partnerships and
          local landmark collaborations. We are excited to build a metaverse
          vision of our favorite cities with community stake holders and brand
          visionaries.
        </p>
      </div>
    </>
  );
};

function RealState() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default RealState;
