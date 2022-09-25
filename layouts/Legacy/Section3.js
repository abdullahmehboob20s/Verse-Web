import BulletPoint from "components/BulletPoint";
import React from "react";

const Bullet = () => {
  return (
    <div className="min-w-[36px] lg:min-w-[44px] w-[36px] lg:w-[44px] h-[36px] lg:h-[44px] overflow-hidden flex items-center justify-center rounded-lg bg-purple-gradient-2">
      <img
        src="images/V-check-icon-green.svg"
        className="brightness-[21.5] w-[50%]"
        alt=""
      />
    </div>
  );
};

function Section3() {
  return (
    <div>
      <div className="container-2 grid lg:grid-cols-2 lg:gap-16 relative">
        <div className="relative">
          <img
            src="images/blured-icon.png"
            className="absolute top-[-10%] hidden lg:block right-0 w-[200px] -z-50"
            alt=""
          />
          <img
            src="images/board.png"
            className="absolute top-0 left-0 -z-20 lg:static w-full opacity-40 lg:opacity-100"
            alt=""
          />
        </div>
        <div className="space-y-4 relative">
          <img
            src="images/blured-icon.png"
            className="absolute top-0 right-[-50%] min-w-[1000px] -z-50"
            alt=""
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="17 years Building and Managing an international network of metaverse worlds"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="50 million Users + Serviced"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="32 billion VR transactions in the Utherverse Economy"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="In US dollar terms, those transactions account for over $15 billion"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Still hosts an active and dedicated user base"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="In US dollar terms, those transactions account for over $15 billion"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Operational 3rd generation platform"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Unlimited User Capacity for Massive Multiuser Online Reality (MMOR™)"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Launched one of the first Virtual Currencies (called RAYS® – 2007)"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Massively Successful Virtual Economy (Still in Use 15 years)"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Presaged NFT’s with Virtual Goods (Non Blockchain)"
          />
          <BulletPoint
            alignment="items-center"
            Bullet={Bullet}
            title="Weddings - 7,847 - Full Blown Weddings have taken place in v2 of Utherverse"
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Section3;
