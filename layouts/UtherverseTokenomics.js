import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="text-[55px] leading-[1] font-bold text-white mb-6">
        Utherverse Tokenomics
      </h1>
      <h4 className="text-purple text-2xl font-medium mb-7">
        The Tokenomics of Utherverse are designed to govern a sustainable
        economy utilizing our UTHER Coin along with a frictionless mirror token
        for in-world trade.
      </h4>
      <p className="text-base font-light mb-8 text-white">
        Business will be done between decentralized blockchains in wholly new
        ways, as they interoperate via our platform. This will be the true
        realization of web 3.D
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
      src="/images/phone-tokens.png"
      loading="lazy"
      objectFit="cover"
      className=""
    />
  );
};

function UtherverseTokenomics() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="p-14 pr-0"
      sectionTwoClassName="relative"
    />
  );
}

export default UtherverseTokenomics;
