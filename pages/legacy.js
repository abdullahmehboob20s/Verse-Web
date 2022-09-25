import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import BIO from "layouts/Legacy/BIO";
import LegacyFacts from "layouts/Legacy/LegacyFacts";
import Roadmap from "layouts/Legacy/Roadmap";
import Section1 from "layouts/Legacy/Section1";
import Section2 from "layouts/Legacy/Section2";
import Section3 from "layouts/Legacy/Section3";
import React from "react";

function Legacy() {
  return (
    <Layout navbarClassName="mb-20 lg:mb-16">
      <div className="mb-10 lg:mb-20">
        <TitleWithBar
          title="Legacy"
          subtitle="17 YEARS OF METAVERSE EXPERTISE"
        />
      </div>

      <div className="mb-100px lg:mb-150px">
        <Section1 />
      </div>

      <div className="mb-100px lg:mb-150px">
        <Section2 />
      </div>

      <div className="mb-100px lg:mb-150px">
        <Section3 />
      </div>

      <div className="mb-100px lg:mb-150px">
        <Roadmap />
      </div>

      <div className="mb-100px lg:mb-150px">
        <LegacyFacts />
      </div>

      <div className="mb-100px lg:mb-150px">
        <div className="container-2 grid md:grid-cols-2 gap-8 lg:gap-50px">
          <FixedHeightCard bg="bg-purple-gradient-2" height="h-auto">
            <p className="fs-16px font-medium leading-1_4">
              Brian Shuster is currently the CEO of Ideaflood, Inc., an
              intellectual property development and holding company, and
              Utherverse Digital, Inc., the world’s premier Virtual World
              software development company with more than 50 million registered
              users and worldwide franchise operations. He is an industry
              Thought Leader and the Nucleus of the Utherverse Team.
            </p>
          </FixedHeightCard>
          <FixedHeightCard bg="bg-purple-gradient-2" height="h-auto">
            <p className="fs-16px font-medium leading-1_4">
              Over the past 17 years, his visionary work in VR has solved
              critical “show stopping” problems behind the operation and
              expansion of the metaverse. His work is foundational to the very
              fabric of the metaverse.
            </p>
          </FixedHeightCard>
        </div>
      </div>

      <div className="mb-100px lg:mb-150px">
        <BIO />
      </div>
    </Layout>
  );
}

export default Legacy;
