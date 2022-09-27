import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import React from "react";

function mint() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <div className="mb-12 lg:mb-100px">
        <TitleWithBar
          title="MINT THE UTHERS fNFT"
          subtitle="UTHERVERSE GENESIS 1 fNFTs"
        />
      </div>
    </Layout>
  );
}

export default mint;
