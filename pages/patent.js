import PatentCard from "components/PatentCard";
import Layout from "layouts/Layout";
import React from "react";

function Patent() {
  return (
    <Layout navbarClassName="mb-20 lg:mb-16">
      <div className="mb-200px">
        <div className="container-2">
          <h1 className="text-center text-gradient-purple fs-56px mb-3 font-bold">
            Utherverse
            <span className="align-super text-[.6em] text-gradient-purple">
              ®
            </span>
          </h1>
          <p className="fs-16px text-white font-bold mb-3 text-center">
            The Shuster Meta Patent Family
          </p>
          <p className="fs-28px font-semibold text-white text-center mb-10">
            Featured Patents
          </p>

          <div className="flex space-x-4 justify-center">
            <PatentCard index={1} />
            <PatentCard index={2} />
            <PatentCard index={3} />
            <PatentCard index={4} />
            <PatentCard index={5} />
            <PatentCard index={6} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Patent;
