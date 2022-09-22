import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import CreatorEconomy from "layouts/Economics/CreatorEconomy";
import HybridGoods from "layouts/Economics/HybridGoods";
import Interoperability from "layouts/Economics/Interoperability";
import MetaWallet from "layouts/Economics/MetaWallet";
import RealState from "layouts/Economics/RealState";
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

      <div className="mb-14 lg:mb-100px">
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

        <TwoColumnsSection img="images/musicstore.png" imgHeight="h-full">
          <div className="lg:py-9">
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

      <div className="mb-20 sm:mb-100px">
        <CreatorEconomy />
      </div>

      <div className="mb-20 sm:mb-100px">
        <UnlimitedOpportunities />
      </div>

      <div className="mb-20 sm:mb-100px">
        <div className="container two-cols-grid">
          <FixedHeightCard
            bg="bg-purple-gradient-2"
            title="Open your Business!"
          >
            <p className="fs-16px text-white font-medium">
              If you’re not ready to build your own metaverse just yet, you can
              still participate as a business, where you can buy or rent virtual
              destinations and build an empire within your choice of any of the
              existing Sovereign virtual worlds.
            </p>
          </FixedHeightCard>
          <FixedHeightCard
            bg="bg-purple-gradient-2"
            title="Be a Player-Entrepreneur!"
          >
            <p className="fs-16px text-white font-medium">
              As a Player, you can sell virtual services, products and content,
              or just play for fun and enjoyment - and you’ll get paid just for
              playing!
            </p>
          </FixedHeightCard>
          <FixedHeightCard
            bg="bg-purple-gradient-2"
            title="Import and Sell Digital Creations"
          >
            <p className="fs-16px text-white font-medium">
              Ours is an open platform built on the Unity® Engine to encourage
              an in-world and out-of-world transactional community. Import your
              Unity creations to begin selling them on our marketplace.
            </p>
          </FixedHeightCard>
          <FixedHeightCard bg="bg-purple-gradient-2" title="Play to Earn">
            <p className="fs-16px text-white font-medium">
              New and experienced users earn wUTHER just for participating (paid
              to play), for selling their virtual goods, or for working with and
              within the world in a rich and vast landscape of new
              opportunities.
            </p>
          </FixedHeightCard>
        </div>
      </div>

      <div className="mb-20 sm:mb-100px">
        <HybridGoods />
      </div>

      <div className="mb-20 sm:mb-100px">
        <div className="container three-cols-grid">
          <FixedHeightCard
            height="h-auto"
            bg="bg-purple-gradient-2"
            title="Virtual Goods"
            titleClassName="text-center"
          >
            <p className="fs-16px text-white font-medium">
              Common resources that are designed to be inexpensive or common
              files. Things like basic avatar skin textures, basic clothing
              meshes and textures, simple objects and props along with building
              blocks and geometric shape items.
            </p>
          </FixedHeightCard>
          <FixedHeightCard
            height="h-auto"
            bg="bg-purple-gradient-2"
            title="NFTs"
            titleClassName="text-center"
          >
            <p className="fs-16px text-white font-medium">
              Non-Fungible Tokens, of higher value (in terms of usefulness or
              uniqueness) virtual goods that make sense to be minted as NFTs.
              NFTs can be highly collectable and therefore highly valuable
              digital assets, interoperable via the blockchain.
            </p>
          </FixedHeightCard>
          <FixedHeightCard
            height="h-auto"
            bg="bg-purple-gradient-2"
            title="fNFT"
            titleClassName="text-center"
          >
            <p className="fs-16px text-white font-medium">
              Functional NFT’s, are dynamic tokens that represent goods with
              utility, that function in the Utherverse. They are much more than
              flat profile pic jpgs or artwork. They can be combined with one
              another (Dress with shoes), used in-world (car), created
              (building) and traded.
            </p>
          </FixedHeightCard>
        </div>
      </div>

      <div className="mb-20 sm:mb-100px">
        <Interoperability />
      </div>

      <div className="mb-20 sm:mb-100px">
        <MetaWallet />
      </div>

      <div className="mb-20 sm:mb-100px">
        <RealState />
      </div>
    </Layout>
  );
}

export default Economics;
