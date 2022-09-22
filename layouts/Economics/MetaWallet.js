import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="lg:py-4">
        <h1 className="fs-40px leading-[1] font-bold text-white mb-4">
          METAWALLET
        </h1>
        <h4 className="text-purple fs-24px font-semibold mb-5 lg:mb-7">
          Each User Will Be Outfitted with a Meta Wallet
        </h4>
        <p className="fs-16px leading-[1.7] font-light mb-5 text-white">
          Our wallet system allows users to interact with theirs, NFTs and fNFTs
          on various blockchains and allow approved 3rd party tokens to have
          utility in the Utherverse and affiliated worlds with qualifying
          permissions.
        </p>
        <p className="fs-16px leading-[1.7] font-light text-white">
          Users will be able to swap and trade in-world using multiple
          currencies. Approved tokens will process using Utherverse’s approved
          smart contract requirements. Utherverse is exploring partnerships with
          industry standard bearers to integrate into our system.
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
      src="/images/meta-wallet.png"
      className="w-full h-full object-cover"
    />
  );
};

function MetaWallet() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionTwoClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[12rem] md:h-[16rem] lg:h-auto"
    />
  );
}

export default MetaWallet;
