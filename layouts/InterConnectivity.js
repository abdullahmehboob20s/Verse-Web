import BulletPoint from "components/BulletPoint";
import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const RightSection = () => {
  return (
    <>
      <h1 className="fs-56px leading-[1] font-bold text-white mb-5">
        Interconnectivity
      </h1>
      <h4 className="text-purple fs-24px font-medium mb-7">
        Built to be an interoperable hub where millions of unique worlds and
        games can interconnect and coexist via a system of permission
      </h4>
      <p className="fs-16px font-light mb-4 text-white">
        Think of the Utherverse as a web 3.D browser where you can:
      </p>

      <div className="mb-10 ml-2 sm:ml-4 space-y-1">
        <BulletPoint title="“Landmark” your favorite places" />
        <BulletPoint title="icon Search millions of worlds" />
        <BulletPoint title="Jump into and out of events" />
      </div>

      <LearnMoreButton
        anchor={true}
        link="/interconnectivity"
        title="Learn More"
      />
    </>
  );
};

const LeftSection = () => {
  return (
    <img
      src="images/orbit-collage.png"
      className="lg:absolute top-[50%] left-0 lg:translate-y-[-50%] object-cover w-full sm:w-1/2 lg:w-full"
      alt=""
    />
  );
};

function InterConnectivity() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      SectionTwo={RightSection}
      sectionOneClassName="relative flex justify-center items-center"
      overflow="ovreflow-visible"
    />
  );
}

export default InterConnectivity;
