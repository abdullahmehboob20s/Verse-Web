import LegacyRoadmapCard from "components/LegacyRoadmapCard";
import React from "react";

function Roadmap() {
  return (
    <div>
      <div className="container-2">
        <div className="relative space-y-10 md:space-y-14 pl-8 md:pl-0">
          <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-purple"></div>
          <img
            src="images/blured-daimond.png"
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] -z-50"
            alt=""
          />

          <LegacyRoadmapCard title="2003 / 2004">
            <p className="fs-16px font-medium">
              Company Turns Attention to Metaverse theVWW.com - best of internet
              + best of MMORPGs - Vision of the Holodeck Virtual World Web Web
              2.0 synchronous vs asynchronous web. Web 3.0 everything is real
              time - Experiential Real Time Immersive Web.
            </p>
          </LegacyRoadmapCard>
          <LegacyRoadmapCard title="2005" reverse={true}>
            <p className="fs-16px font-medium">
              Prototype launch platform V1. Red Light World - built on the
              Worlds.com platform1990s version of 3DVR
            </p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2007">
            <p className="fs-16px font-medium">
              Implementation of VR Economy and the creation of RAYS
            </p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2008 / 2009" reverse={true}>
            <p className="fs-16px font-medium">
              V2. was designed to be the first large-scale test of the Metaverse
              (Sandbox) Built on Prototerra Software.
            </p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2010 / 2011">
            <p className="fs-16px font-medium">
              Franchised all over the world - 50 million users peak - Lessons
              learned. This was a sandbox to learn about operating at scale
              Still Exists.
            </p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2011 / 2018" reverse={true}>
            <p className="fs-16px font-medium">
              Start over from scratch V3. Begins - Goal Re Architecting the
              entire web - creating new VWW protocols to plan for web 3.
            </p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2011 / 2018">
            <p className="fs-16px font-medium">V3 Updated and reimagined.</p>
          </LegacyRoadmapCard>

          <LegacyRoadmapCard title="2018" reverse={true}>
            <p className="fs-16px font-medium">
              Commercial Launch V3 planned. Utherverse.io - Light Weight /
              Streamlined Responsive - Smarter Faster Lighter Build Utherverse.
              Multiple Virtual conventions and concerts are being held to this
              day - Many of these communities for V2. still exist today.
            </p>
          </LegacyRoadmapCard>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
