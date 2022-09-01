import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="space-y-3">
        <img src="images/32-billion.png" className="w-[90%]" alt="" />
        <p className="text-yellow  text-[40px] font-light">Transactions</p>
      </div>

      <div>
        <div className="space-y-3 mb-6">
          <img src="images/15-billion-dollars.png" className="w-[90%]" alt="" />
          <p className="text-yellow  text-[40px] font-light">US dollars</p>
        </div>

        <p className="text-sm font-light text-white opacity-[.4]">
          *When calculated at the long-standing exchange rate of $0.075 ® / $
        </p>
      </div>
    </>
  );
};

const RightSection = () => {
  return (
    <>
      <h1 className="text-[55px] leading-[1] font-bold text-white mb-5">
        Utherverse Economy
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

function Economy() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="p-14 pr-0 flex flex-col justify-center space-y-10"
      sectionTwoClassName="p-14 pl-0"
    />
  );
}

export default Economy;
