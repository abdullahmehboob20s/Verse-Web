import React from "react";

function LegacyFacts() {
  return (
    <div className="relative">
      <img
        src="images/blured-icon.png"
        className="absolute top-0 right-[-20%] w-[800px] -z-50"
        alt=""
      />

      <div className="container-2 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-14">
        <div>
          <img
            src="images/author.png"
            className="max-w-[20rem] mx-auto lg:max-w-none w-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="fs-56px font-bold text-white mb-4">LEGACY FACTS</h1>

          <h4 className="fs-24px text-purple mb-6 font-bold">
            “The Visionary starts with a clean piece of paper and re-imagines
            the world.”
          </h4>

          <p className="fs-18px text-purple font-medium mb-5">
            -Macolm Gladwell
          </p>

          <p className="fs-16px text-white font-light mb-5">
            In no place is this statement more poignant than when describing the
            visionary, that is Brian Shuster. He is truly the mind behind the
            Metaverse. Where domineering forces push a dogma of top down, closed
            source technocratic meta reality - Brian shines as a beacon for
            humanity. His sole purpose is to counterbalance the harm that social
            media has done to society; to create harmony between an expansive
            technological futureverse and a true human experience. Techno
            Humanitarian, Thought Leader, Pioneer.
          </p>
          <p className="fs-16px text-white font-light mb-5">
            Neil Stephenson’s SNOW CRASH allowed us to imagine the world as a
            techno future in a 3DVR reality. Brian’s vision and imagination made
            it a reality almost 30 years later.
          </p>
          <p className="fs-16px text-white font-light">
            Brian Shuster is a futurist and an innovator. He has been awarded
            countless patents and pending patents on a wide range of internet
            and computer technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegacyFacts;
