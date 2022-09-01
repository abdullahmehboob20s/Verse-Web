import BulletPoint from "components/BulletPoint";
import LearnMoreButton from "components/LearnMoreButton";
import SideBySideSection from "components/SideBySideSection";
import React from "react";

const LeftSection = () => {
  return (
    <>
      <h1 className="text-[55px] leading-[1] font-bold text-white mb-5">
        Interconnectivity
      </h1>
      <h4 className="text-purple text-2xl font-medium mb-7">
        Built to be an interoperable hub where millions of unique worlds and
        games can interconnect and coexist via a system of permission
      </h4>
      <p className="text-base font-light mb-4 text-white">
        Think of the Utherverse as a web 3.D browser where you can:
      </p>

      <div className="mb-10 ml-4 space-y-1">
        <BulletPoint title="“Landmark” your favorite places" />
        <BulletPoint title="icon Search millions of worlds" />
        <BulletPoint title="Jump into and out of events" />
      </div>

      <LearnMoreButton title="Learn More" />
    </>
  );
};

function InterConnectivity() {
  return (
    <SideBySideSection
      SectionOne={LeftSection}
      sectionOneClassName="col-start-2 col-end-3 p-14 pl-0"
      overflow="ovreflow-visible"
    >
      <div className="col-start-1 col-end-2 row-start-1 relative w-full">
        <img
          src="images/orbit-collage.png"
          className="absolute top-[50%] left-0 translate-y-[-50%] object-cover w-full"
          alt=""
        />
      </div>
    </SideBySideSection>
  );
}

export default InterConnectivity;
