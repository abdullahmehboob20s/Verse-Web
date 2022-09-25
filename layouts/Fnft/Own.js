import VerticalDivider from "components/VerticalDivider";
import React from "react";

function Own() {
  return (
    <div>
      <div className="container-2 divider-layout text-center lg:text-left items-center">
        <div>
          <p className="fs-24px text-white uppercase font-medium mb-5">
            THE UTHERS ARE <br className="hidden lg:block" /> UNLIKE ANY NFT
            BEFORE!
          </p>
          <h1 className="fs-40px neon font-semibold mb-6 leading-1_2">
            OWN THE FIRST fNFT EVER CREATED!
          </h1>
          <p className="fs-20px text-white uppercase font-medium leading-1_6">
            These priceless and rare{" "}
            <span className="neon-secondary font-semibold">
              GENESIS fNFT Trunks
            </span>{" "}
            are (f)unctional NFTs that come alive! The few that possess them,
            will own the most valuable and rare possessions of any Metaverse
            within the Utherverse.
          </p>
        </div>
        <VerticalDivider />
        <div className="max-w-[22rem] mx-auto w-full lg:max-w-none">
          <img src="images/own-banner.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Own;
