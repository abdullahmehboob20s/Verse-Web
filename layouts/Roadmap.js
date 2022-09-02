import RoadmapCard from "components/RoadmapCard";
import React from "react";

function Roadmap() {
  return (
    <div>
      <div className="container-2">
        <div className="mb-16 md:mb-100px">
          <h1 className="text-2xl md:text-3xl mb-2 text-gradient-purple font-bold text-center">
            ROADMAP
          </h1>
          <p className="text-center text-xs md:text-base text-white font-medium">
            The Evolution of our Company and the Future Roadmap of Utherverse.io
          </p>
        </div>

        <div className="xl:w-[80%] mx-auto relative space-y-10 md:space-y-20 pl-8 md:ml-0">
          <div className="absolute top-0 left-0 md:left-[50%] md:translate-x-[-50%] w-[2px] h-full bg-purple"></div>

          <RoadmapCard
            question="Q1 2022"
            progress={[
              {
                icon: "V-check-icon-green.svg",
                title: "Utherverse Demo Launch - Completed",
              },
            ]}
          />
          <RoadmapCard
            question="Q2 2022"
            reverse={true}
            progress={[
              {
                icon: "V-check-icon-green.svg",
                title: "Alpha Test Begins - Completed",
              },
            ]}
          />
          <RoadmapCard
            question="Q3 2022"
            progress={[
              {
                icon: "V-check-icon-blue.svg",
                title: "Alpha Phase 2",
              },
            ]}
          />
          <RoadmapCard
            question="Q4 2022"
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
            question="2023"
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
