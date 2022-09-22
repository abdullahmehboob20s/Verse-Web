import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-4">
        A CREATOR ECONOMY
      </h1>
      <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
        The Utherverse is built with utility at its core.
      </h4>
      <p className="fs-16px leading-[1.7] font-light text-white">
        Visionaries, Creatives, Entrepreneurs Create a life in the Utherverse.
        With millions of entrepreneurs and businesses establishing unique
        metaverse worlds to sell and promote their digital and real-world goods
        and services, the Utherverse will become the new Virtual World Web where
        you can come to earn, learn, and play - on your way to other world
        experiences.
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

function CreatorEconomy() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionTwoClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default CreatorEconomy;
