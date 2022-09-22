import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import CreatorEconomy from "layouts/Economics/CreatorEconomy";
import UnlimitedOpportunities from "layouts/Economics/UnlimitedOpportunities";
import Layout from "layouts/Layout";
import Head from "next/head";
import React from "react";

function Economics() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <Head>
        <title>Utherverse - Mission</title>
      </Head>

      <div className="mb-12 lg:mb-100px">
        <TitleWithBar
          variant={2}
          title="ECONOMICS"
          subtitle="The Most Reliable Metaverse Platform"
        />
      </div>

      <div className="mb-20 lg:mb-100px relative">
        <img
          src="images/blured-icon.png"
          className="absolute top-[-50%] -z-30 left-[-20%]"
          alt=""
        />

        <TwoColumnsSection
          img="images/mission-1.png"
          imgHeight="h-full"
          imgBelowInMobile={true}
        >
          <div className="py-9">
            <h2 className="fs-36px text-white font-bold mb-6 leading-1_2">
              Our 15 years of virtual economic governance give us critical
              insight into the operation and maintenance of a successful
              metaverse economy.
            </h2>

            <p className="fs-16px text-white font-normal mb-6">
              Utherverse is the most experienced and reliable metaverse platform
              to build your business on. Our virtual economy, established in
              2008, still operates successfully to this day with over 32 billion
              transactions and the equivalent 15 billion dollars transacted.
            </p>

            <p className="fs-16px text-white font-normal">
              For our 3rd generation offering we have incorporated the best of
              blockchain to provide our users decentralized interoperability.
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <CreatorEconomy />
      </div>

      <div className="mb-100px">
        <UnlimitedOpportunities />
      </div>
    </Layout>
  );
}

export default Economics;
