import BulletPoint from "components/BulletPoint";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Layout from "layouts/Layout";
import Head from "next/head";
import React from "react";

const Bullet = ({ img }) => {
  return (
    <img
      src={img}
      alt=""
      className="min-w-[32px] sm:min-w-[40px] xl:min-w-[50px] h-8 sm:h-10 xl:h-[50px] rounded-full"
    />
  );
};

function Mmor() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <Head>
        <title>Utherverse - Build Your Metaverse</title>
      </Head>

      <div className="mb-14 lg:mb-100px">
        <TitleWithBar
          title="MMOR EVENTS"
          subtitle="THE NEW PARADIGM FOR GLOBAL EXPERIENCES"
        />
      </div>

      <div className="z-10">
        <TwoColumnsSection
          reverse={true}
          img="images/club-inner.png"
          imgHeight="h-full"
          imgAboveInMobile={true}
          imgClassName="scale-110"
        >
          <div className="lg:py-50px">
            <h4 className="fs-24px text-white uppercase font-bold mb-4">
              MASSIVELY MULTIUSER ONLINE REALITY EXPERIENCES ARE THE MOST
              EXCITING NEW PROPOSITION FOR THE METAVERSE!
            </h4>

            <p className="fs-16px text-white mb-10 font-light">
              Imagine global events, arenas filled with millions of people, each
              experience a great view. Anything Goes Visuals. Virtual
              Conferences, Tradeshows, Education. Record and replay immersive
              experiential recordings of any event. Experience the same event
              thousands of different ways.
            </p>

            <div className="space-y-5">
              <BulletPoint
                Bullet={() => <Bullet img="images/vision-daimond.png" />}
                reverse={true}
                title="Utherverse develops licensed virtual world experiences and integrates global brand partnerships for the metaverse"
              />
              <BulletPoint
                Bullet={() => <Bullet img="images/blob-img-R.png" />}
                reverse={true}
                title="We build & monetize deeply immersive, social MMOR experiences using patented technology"
              />
              <BulletPoint
                Bullet={() => <Bullet img="images/vision-daimond.png" />}
                reverse={true}
                title="Utherverse develops licensed virtual world experiences and integrates global brand partnerships for the metaverse"
              />
            </div>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="py-20 lg:py-200px">
        <div className="container-2 sm:grid grid-cols-[.3fr_1fr_.3fr] gap-50px items-center">
          <div className="hidden sm:block">
            <img src="images/quote.png" className="w-full" alt="" />
          </div>
          <div>
            <div className="w-full mx-auto max-w-[32rem]">
              <h1 className="fs-28px text-white font-bold text-center mb-4">
                Imagine global events, arenas filled with millions of people,
              </h1>
              <h1 className="fs-28px text-white font-bold text-center">
                each experience a great view. Anything Goes Visuals.
              </h1>
            </div>
          </div>
          <div className="hidden sm:block">
            <img src="images/quote.png" className="w-full rotate-180" alt="" />
          </div>
        </div>
      </div>

      <div className="mb-20 lg:mb-100px">
        <TwoColumnsSection
          img="images/people-in-bar.png"
          imgHeight="h-full"
          imgClassName="scale-110"
        >
          <div className="lg:py-50px">
            <h1 className="fs-56px text-white uppercase font-bold mb-4">
              VIRTUAL FESTIVALS
            </h1>

            <h4 className="fs-24px text-purple font-semibold mb-4">
              Ticket Packages, Digital Goods, Dynamic Advertising, Sponsorship
            </h4>

            <p className="text-sm text-white mb-10 font-semibold">
              New Money for Artists, Brands, Venues,Advertisers & Sponsors
            </p>

            <div className="space-y-5">
              <BulletPoint
                Bullet={() => <Bullet img="images/vision-daimond.png" />}
                title="Create your own MMOR portal, host your own events anytime you want Stream 360-degree content live or on demand"
              />
              <BulletPoint
                Bullet={() => <Bullet img="images/blob-img-R.png" />}
                title="Engage millions of fans that can never attend your events in person, bring your global fanbase and social followers into your branded metaverse space"
              />
              <BulletPoint
                Bullet={() => <Bullet img="images/vision-daimond.png" />}
                title="Generate new, multi-level revenue streams from secure blockchain micro-transactions, advertising and sponsorships using smart contracts"
              />
              <BulletPoint
                Bullet={() => <Bullet img="images/blob-img-R.png" />}
                title="Sell virtual and real-world tickets & merchandise, VIP packages, NFTs, fNFTs, virtual executive suites, new products, meet & greets."
              />
            </div>
          </div>
        </TwoColumnsSection>
      </div>
    </Layout>
  );
}

export default Mmor;
