import BulletPoint from "components/BulletPoint";
import React from "react";

function Faq() {
  return (
    <div>
      <div className="container-2">
        <h1 className="fs-56px font-semibold text-center neon mb-10 md:mb-16">
          FAQ
        </h1>

        <div className="space-y-14 max-w-[44rem] mx-auto">
          <div>
            <h2 className="fs-36px mb-6 neon-secondary italic font-semibold">
              What is an fNFT?
            </h2>
            <div className="space-y-4">
              <p className="fs-18px font-normal">
                fNFTS are much more than flat profile pic, JPEGS, or artwork.
                fNFTs are dynamic tokens that represent goods with utility, that
                function in the metaverse. They are much more than flat profile
                pic jpgs or artwork.
              </p>
              <p className="fs-18px font-normal">
                fNFTs can be combined with one another (dress + shoes), used
                in-world (car), created and traded.
              </p>
              <p className="fs-18px font-normal">
                These digital assets bring real functionality to the NFT space
                as well as build a bridge into into The Utherverse.
              </p>
            </div>
          </div>
          <div>
            <h2 className="fs-36px mb-6 neon-secondary italic font-semibold">
              How Many fNFTs are being minted?
            </h2>
            <p className="fs-18px font-normal mb-4">
              The fNFTs will be minted in 3 Drops.
            </p>
            <div className="space-y-2">
              <BulletPoint title="Drop 1: Up to 3,333 “The Uthers” Trunks (includes property, clothing, community access, beta, VIP access)" />
              <BulletPoint title="Drop 2: The Uthers Digital Colthing Collection" />
              <BulletPoint title="Supply: Up to 4,444 in addition to the Trunk supply" />
              <BulletPoint title="Drop 3: Utherverse Real Estate" />
              <BulletPoint title="Supply: A total of up to 14,444 Exclusive Apartments" />
            </div>
          </div>
          <div>
            <h2 className="fs-36px mb-6 neon-secondary italic font-semibold">
              What is the rarity of these fNFTs?
            </h2>
            <div className="space-y-4">
              <p className="fs-18px font-normal">
                All clothing and accessories will be exclusive to these fNFTs
                and not available for purchase until the secondary market opens
                after The Utherverse goes live.
              </p>
              <p className="fs-18px font-normal">
                Some clothing in each drop will have special visual effects
                attributes, rareness and uniqueness.
              </p>
              <p className="fs-18px font-normal">
                Apartments will have rarity and will include one of: Studio,
                Apartment, Sub-Penthouse or Penthouse.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
