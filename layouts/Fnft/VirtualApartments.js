import VerticalDivider from "components/VerticalDivider";
import React from "react";

function VirtualApartments() {
  return (
    <div>
      <div className="container-2 divider-layout items-center">
        <div>
          <h2 className="neon fs-32px text-center leading-1_2 font-semibold">
            YOUR OWN PRIVATE LUXURY VIRTUAL APARTMENT
          </h2>
        </div>
        <VerticalDivider spacing="py-6 lg:py-0 lg:px-14" />
        <div>
          <p className="fs-20px text-center">
            Located right in the heart of the{" "}
            <span className="neon-secondary font-bold">
              UTHERVERSE MAIN CONCERT PLAZA!
            </span>{" "}
            This <span className="neon-secondary font-bold">EXCLUSIVE</span> and{" "}
            <span className="neon-secondary font-bold">SECURE</span> building
            overlooks the most spectacular commercial district of theaters,
            shops, nightclubs and an outdoor concert arena!
          </p>
        </div>
      </div>
    </div>
  );
}

export default VirtualApartments;
