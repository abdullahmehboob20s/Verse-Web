import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import Head from "next/head";
import React from "react";
import Contact from "layouts/Contact";
import Uther from "layouts/Tokenomics/Uther";
import DistributionDetails from "layouts/Tokenomics/DistributionDetails";
import Roadmap from "layouts/Tokenomics/Roadmap";
import Details from "layouts/Tokenomics/Details";

function Tokenomics() {
  return (
    <Layout navbarClassName="mb-20 lg:mb-16" showContactUs={false}>
      <Head>
        <title>Utherverse - Tokenomics</title>
      </Head>

      <div className="mb-14 lg:mb-20">
        <TitleWithBar
          title="TOKENOMICS"
          subtitle="The Utherverse will act as a centralized hub for interoperable world connectivity."
        />
      </div>

      <div className="mb-20 md:mb-100px lg:mb-150px">
        <Uther />
      </div>

      <div className="mb-20 md:mb-100px lg:mb-150px">
        <DistributionDetails />
      </div>

      <div className="mb-20 md:mb-100px lg:mb-200px">
        <Roadmap />
      </div>

      <div className="mb-20 md:mb-100px lg:mb-200px">
        <Details />
      </div>

      <div className="mb-16 sm:mb-100px lg:mb-150px">
        <Contact />
      </div>
    </Layout>
  );
}

export default Tokenomics;
