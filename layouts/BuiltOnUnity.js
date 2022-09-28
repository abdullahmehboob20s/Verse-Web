import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import Image from "next/image";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <div className="mb-6 sm:mb-8 flex items-center space-x-6 w-fit">
        <h1 className="fs-56px leading-[1] font-bold text-white">Built on</h1>
        <img
          src="images/unity-logo-and-wordmark.svg"
          className="w-24 xl:w-40"
          alt=""
        />
      </div>

      <p className="fs-16px font-normal mb-6 text-white leading-[1.6]">
        The Utherverse is an open platform, built on the Unity Engine so our
        developers can provide you the best photorealistic avatars and
        environments. Our Avatars are Full-Bodied with movements that are
        physically and anatomically cutting edge.
      </p>
      <p className="fs-16px font-normal mb-10 text-white leading-[1.6]">
        Platform Agnostic, usable on all your favourite devices: PC Mac,
        Tablets, Oculus, iOS and Android. Unity already has a massive community
        and they’ll be able to jump right in to the Utherverse and bring all
        their experience and creations along.
      </p>

      <LearnMoreButton anchor={true} link="/unity" title="Learn More" />
    </>
  );
};

const RightSection = () => {
  return (
    <>
      <Image
        alt=""
        layout="fill"
        src="/images/vr-section-background.png"
        objectFit="cover"
        loading="lazy"
      />
    </>
  );
};

function BuiltOnUnity() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName=""
      sectionTwoClassName="relative row-start-1 lg:row-start-auto h-[10rem] sm:h-[16rem] lg:h-auto"
    />
  );
}

export default BuiltOnUnity;
