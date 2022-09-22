import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="lg:py-4">
        <h1 className="fs-40px leading-[1] font-bold text-white mb-4">
          HYBRID GOODS
        </h1>
        <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
          VIRTUAL GOODS & fNFT Model
        </h4>
        <p className="fs-16px leading-[1.7] font-light text-white">
          The Utherverse platform software will use a hybrid model of NFTs and
          simple virtual goods to deliver the optimal benefits of both. Simple
          virtual goods and services are not NFTs in the sense that they are not
          held on blockchain, but are instead traditionally served files from
          our servers or from local cache. These simple virtual goods have
          advantages over NFTs in that they can are more flexible for mass use
          purposes - faster to load, higher quality to enjoy and better
          performance to enhance user experience.
        </p>
      </div>
    </>
  );
};

const RightSection = () => {
  return (
    <Image
      alt=""
      layout="fill"
      src="/images/hybrid-goods.png"
      className="w-full h-full object-cover"
    />
  );
};

function HybridGoods() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionTwoClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default HybridGoods;
