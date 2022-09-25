import FixedHeightCard from "components/FixedHeightCard";
import React from "react";

function Section2() {
  return (
    <div className="container-2 grid md:grid-cols-2 gap-10 lg:gap-16">
      <div>
        <FixedHeightCard
          title="The Shuster Meta Patent Family"
          height="h-auto"
          bg="bg-purple-gradient-2"
        >
          <p className="fs-16px font-medium">
            The Utherverse owned and licensed patent portfolio, known as the
            “The Shuster Meta Patent Family”, comprises critical technological
            processes and methods necessary to operate a “metaverse”. In many
            ways, we are the founders of the metaverse and we will be forever
            tied to the development and prosperity of the meta-era.
          </p>
        </FixedHeightCard>
      </div>
      <div>
        <h1 className="fs-56px text-white font-black mb-5 leading-1_2">
          A RELIABLE METAVERSE
        </h1>
        <p className="fs-24px text-purple leading-1_4 mb-5 font-semibold">
          Our virtual economy, established in 2007, still operates successfully
          to this day with over 32 billion transactions and the equivalent 15
          billion dollars transacted.
        </p>

        <p className="fs-16px text-white font-light">
          Our 15 years of virtual economic governance give us critical insight
          into the operation and maintenance of a successful metaverse economy.
          The Utherverse has stood toe to toe with all previous Web 3.D
          competitors and outlasted them all: There.com, Google Lively, Project
          Sansar and dozens of others. Today we renew our commitment to rise up
          as the standard bearer for a brighter future in the metaverse.
        </p>
      </div>
    </div>
  );
}

export default Section2;
