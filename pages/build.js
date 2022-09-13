import BulletPoint from "components/BulletPoint";
import ContactUs from "components/ContactUs";
import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const Bullet = ({ img }) => {
  return <img src={img} alt="" className="w-12 h-12 rounded-full" />;
};

function Build() {
  return (
    <div>
      <Head>
        <title>Utherverse - Build Your Metaverse</title>
      </Head>

      <div className="mb-16">
        <Navbar />
      </div>

      <div className="mb-100px">
        <TitleWithBar
          title="BUILD YOUR METAVERSE"
          subtitle="WE ARE A PERFECT COMPLIMENT TO UNITY"
        />
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/build-img-1.png" reverse={true}>
          <p className="fs-56px text-white font-bold mb-6 leading-[1.2]">
            BECOME <br /> A SOVEREIGN
          </p>
          <p className="fs-24px text-purple font-bold mb-6 leading-[1.2]">
            Utherverse Provides the Tools and Expertise
          </p>

          <p className="fs-16px text-white mb-6">
            Using the power of the Utherverse, you can quickly tilt up your own
            Sovereign Metaverse!
          </p>
          <p className="fs-16px text-white font-bold">A Virtual Sovereign</p>
          <p className="fs-16px text-white mb-6">
            As a Sovereign, you own your own metaverse, hosted on our platform
            and interconnected to a whole constellation of virtual worlds. Your
            fans, followers and customers go straight to your metaverse; but you
            also earn royalties from everything they do anywhere they go on the
            entire network.
          </p>
          <p className="fs-16px text-white">
            We provide full back-end support, servers, hosting and secure
            blockchain payment gateways, as well as in-world payment systems for
            gas free, frictionless micro-transactions.
          </p>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/build-img-2.png">
          <p className="fs-56px text-white font-bold mb-6 leading-[1.2]">
            YOUR VISION
          </p>
          <p className="fs-24px text-purple font-bold mb-6 leading-[1.2]">
            You’ll be able to bring businesses and players into your world. You
            can hold your own events and sell your own virtual real estate, NFTs
            and offerings using our advanced platform tools and our proven
            business models.
          </p>

          <p className="fs-16px text-white mb-6">
            Using the power of the Utherverse, you can quickly tilt up your own
            Sovereign Metaverse! We can use your existing artwork or assets; you
            can have your own team build for you; or you can have us build out
            your metaverse.
          </p>
          <p className="fs-16px text-white">
            Your ideas, your design, your taste, your fans, your designer, your
            content, your partners and your brands can all be brought into the
            metaverse together, using our platform and tools.
          </p>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection
          img="images/build-img-3.png"
          imgHeight="h-full"
          reverse={true}
        >
          <div className="py-8">
            <div className="mb-50px">
              <p className="fs-56px text-white font-bold mb-6 leading-[1.2]">
                UTHERVERSE SOVEREIGN SERVICES (USS™)
              </p>
              <p className="fs-24px text-purple font-bold mb-6 leading-[1.2]">
                Our USS Platform is a turnkey metaverse development solution,
                offering clients fully customized immersive worlds, maintained
                and supported by Utherverse.
              </p>

              <p className="fs-16px text-white">
                All of our metaverse offerings are networked and interoperable,
                allowing users the ability to carry their profiles and secure
                metawallets from one virtual world to the next.
              </p>
            </div>
            <div className="space-y-4">
              <BulletPoint
                title="We will build your metaverse"
                reverse={true}
                alignment="items-center"
                spacing="space-x-6"
                Bullet={() => <Bullet img="images/vision-light.png" />}
              />
              <BulletPoint
                title="Mint NFTs for real and virtual goods"
                reverse={true}
                alignment="items-center"
                spacing="space-x-6"
                Bullet={() => <Bullet img="images/vision-leafs.png" />}
              />
              <BulletPoint
                title="Animate NFT characters and artwork"
                reverse={true}
                alignment="items-center"
                spacing="space-x-6"
                Bullet={() => <Bullet img="images/vision-person.png" />}
              />
              <BulletPoint
                title="Develop games around your brand"
                reverse={true}
                alignment="items-center"
                spacing="space-x-6"
                Bullet={() => <Bullet img="images/vision-daimond.png" />}
              />
            </div>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-150px">
        <div className="container-2">
          <div className="grid grid-cols-2 gap-10">
            <FixedHeightCard bg="bg-purple-gradient-2" title="Our Network">
              <p className="fs-16px text-white font-medium">
                By being a part of our network, you’ll have instant access to a
                huge base of users that will find your world, services and
                offerings and pour in. You can trade doors and teleport points
                with other businesses, and you have the opportunity to buy or
                sell actual visitors to and from your regions - something you
                can’t do if you have a stand-alone offering. Businesses will get
                listed on the first and only metaverse search engine, where
                users of the Utherverse go to find locations to visit and to
                Landmark. That’s built-in exposure for any offering you want to
                launch.
              </p>
            </FixedHeightCard>
            <FixedHeightCard
              bg="bg-purple-gradient-2"
              title="Master Affiliate Program (MAP)"
            >
              <p className="fs-16px text-white font-medium">
                Our Master Affiliate Program (MAP) provides additional revenue
                streams when your users spend anywhere in our network of
                metaverses. Once “in-network” your users will generate revenue
                for you in perpetuity.
              </p>
            </FixedHeightCard>
          </div>
        </div>
      </div>

      <div className="mb-100px">
        <div className="container-2">
          <ContactUs showImageBanner={false} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Build;
