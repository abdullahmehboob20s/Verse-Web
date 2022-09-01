import React from "react";

function RevealedBanner() {
  return (
    <div className="bg-purple py-1">
      <div className="container flex items-center justify-center space-x-4">
        <img src="images/vr-goggles.png" className="w-11" alt="" />
        <p className="font-animo text-white text-center text-base">
          With 17 years of development, our AEON<sup>™</sup> generation
          metaverse platform will be revealed in Q3 of 2022!
        </p>
      </div>
    </div>
  );
}

export default RevealedBanner;
