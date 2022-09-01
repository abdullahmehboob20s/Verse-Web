import RoadmapCard from "components/RoadmapCard";
import React from "react";

function Roadmap() {
  return (
    <div>
      <div className="container-2">
        <div className="mb-[100px]">
          <h1 className="text-3xl mb-2 text-gradient-purple font-bold text-center">
            ROADMAP
          </h1>
          <p className="text-center text-base text-white font-medium">
            The Evolution of our Company and the Future Roadmap of Utherverse.io
          </p>
        </div>

        <div className="w-[80%] mx-auto relative space-y-20">
          <div className="absolute top-0 left-[50%] translate-x-[-50%] w-[2px] h-full bg-purple"></div>

          <RoadmapCard
            buttonTitle="Click to unfold Q1 2022"
            progress={[
              {
                icon: "V-check-icon-green.svg",
                title: "Utherverse Demo Launch - Completed",
              },
            ]}
          />
          <RoadmapCard
            buttonTitle="Click to unfold Q2 2022"
            reverse={true}
            progress={[
              {
                icon: "V-check-icon-green.svg",
                title: "Alpha Test Begins - Completed",
              },
            ]}
          />
          <RoadmapCard
            buttonTitle="Click to unfold Q3 2022"
            progress={[
              {
                icon: "V-check-icon-blue.svg",
                title: "Alpha Phase 2",
              },
            ]}
          />
          <RoadmapCard
            buttonTitle="Click to unfold Q4 2022"
            reverse={true}
            progress={[
              {
                icon: "V-check-icon-blue.svg",
                title:
                  "Closed Beta - Open for Key Stakeholders - Legacy Users - Power Users",
              },
              {
                icon: "V-check-icon-blue.svg",
                title: "Token Generation Event",
              },
              {
                icon: "V-check-icon-blue.svg",
                title:
                  "Adding user tools - Users Build their own experience: Clothing, props, Private Residences",
              },
            ]}
          />
          <RoadmapCard
            buttonTitle="Click to unfold 2023"
            progress={[
              {
                icon: "V-check-icon-blue.svg",
                title: "Open Beta - Stress Test unlimited users",
              },

              {
                icon: "V-check-icon-blue.svg",
                title:
                  "Closet and Shop system - List / List for sale, clothing and props users build",
              },

              {
                icon: "V-check-icon-blue.svg",
                title: "Commercial and Residential Real Estate and Stores",
              },
              {
                icon: "V-check-icon-blue.svg",
                title:
                  "Fully virtual concerts and conventions w/real world integration",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
