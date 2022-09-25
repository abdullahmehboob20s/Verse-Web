import BulletPoint from "components/BulletPoint";
import React from "react";

function WhatsInTheTrunk() {
  return (
    <div>
      <div className="container grid lg:grid-cols-2 gap-8 md:gap-50px">
        <div>
          <img
            src="images/whatsinthetrunk.png"
            className="max-w-[24rem] mx-auto lg:max-w-none w-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="fs-36px font-semibold mb-6 neon">
            {"WHAT'S"} IN THE TRUNK?
          </h1>

          <p className="fs-16px font-semibold mb-6">
            The Uthers Trunk Drop 1: 3,333 Trunks (buyer picks male or female
            trunk)
          </p>
          <p className="fs-16px mb-8">
            The “Uther Trunk” will be the most valuable of all the asset drops.
            HODLers of an Uther Trunk will receive:
          </p>

          <div className="space-y-2 mb-8">
            <BulletPoint title="One: Studio, Apartment, Sub-Penthouse or Penthouse" />
            <BulletPoint title="Wardrobe accessories, with rarity functions (flaming jacket, glowing hands, etc)" />
            <BulletPoint title="3 Additional Genesis 1 fNFTs Airdrops" />
            <BulletPoint title="Early Access to future Uther collection drops" />
            <BulletPoint title="Beta access to the Utherverse" />
            <BulletPoint title="Direct access to the Utherverse Discord and Community" />
          </div>

          <p className="fs-16px mb-6">
            By HODLing, this will allow you rewards both IRL and in-game.
          </p>
          <p className="fs-16px">
            Each item serves as {"it's"} own NFT and will be able to purchase or
            sell on the secondary market after The Utherverse goes live.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhatsInTheTrunk;
