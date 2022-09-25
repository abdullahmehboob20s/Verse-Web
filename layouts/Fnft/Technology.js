import React from "react";
import VerticalDivider from "components/VerticalDivider";

function Technology() {
  return (
    <div>
      <div className="container-2 divider-layout items-center">
        <div>
          <h2 className="neon fs-32px text-center leading-1_2 font-semibold">
            A MASSIVE, FUNCTIONAL + PHOTOREALISTIC WARDROBE
          </h2>
        </div>
        <VerticalDivider spacing="py-6 lg:py-0 lg:px-14" />
        <div>
          <p className="fs-24px text-center">
            Cutting edge technology <br /> that brings the fabric to life
          </p>
        </div>
      </div>
    </div>
  );
}

export default Technology;
