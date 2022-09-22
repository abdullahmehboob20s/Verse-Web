import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="lg:py-4">
        <h1 className="fs-40px leading-[1] font-bold text-white mb-4">
          INTEROPERABILITY
        </h1>
        <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
          Utherverse is Purpose Built to Be an Interoperable Hub.
        </h4>
        <p className="fs-16px leading-[1.7] font-normal mb-5 text-white">
          The Utherverse is an interoperable hub where many worlds can
          interconnect and exist via a system of permissions. These interlaced
          permissions act as an access control layer between worlds, to govern
          experience or game play, physics, avatars, or authenticate NFT’s and
          connected wallets.
        </p>
        <p className="fs-16px leading-[1.7] font-normal mb-5 text-white">
          This sets up a matrix of checks and balances, that enables us to
          manage scammers, spammers, thieves and frauds, as well as adjudicate
          disputed financial transactions. When users cross borders between
          worlds, their holdings are cross referenced and database queried on
          the Utherverse system. Their goods can then be authenticated, fraud
          detected, and permissions adjusted.
        </p>
        <p className="fs-16px leading-[1.7] font-normal text-white">
          Our users will get all the features of the top cryptocurrencies,
          paired with all the security and recovery options that would normally
          be offered by a credit card.
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
      src="/images/INTEROPERABILITY.png"
      className="w-full h-full object-cover scale-110"
    />
  );
};

function Interoperability() {
  return (
    <SideBySideSection
      SectionOne={RightSection}
      SectionTwo={LeftSection}
      sectionOneClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default Interoperability;
