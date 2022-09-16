import ContactUs from "components/ContactUs";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import VisionCard from "components/VisionCard";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

function Vision() {
  return (
    <div className="bg-page">
      <div className="z-10">
        <Head>
          <title>Utherverse - Vision</title>
        </Head>

        <div className="mb-20 lg:mb-16">
          <Navbar />
        </div>

        <div className="mb-14 lg:mb-100px">
          <TitleWithBar
            title="VISION"
            subtitle="WELCOMING IMMERSIVE COMMUNITY"
          />
        </div>

        <div className="mb-20 lg:mb-100px">
          <TwoColumnsSection
            ImgComponent={() => {
              return (
                <video
                  src="images/vision-video-1.mp4"
                  muted=""
                  autoPlay={true}
                  loop={true}
                  className="w-full h-full object-cover"
                ></video>
              );
            }}
            reverse={true}
          >
            <h2 className="fs-24px text-gradient-purple font-bold mb-6">
              The Metaverse will be the final phase of the Internet, and there
              will ultimately be only one dominant metaverse platform.
            </h2>
            <p className="fs-16px text-white mb-6">
              The dominant metaverse can be an open and uplifting one; or it
              could be a closed, algorithmically oppressing one that is driven
              by profits over people.
            </p>

            <p className="fs-18px text-white font-medium mb-6">
              The path that our generation chooses today will decide the fate of
              our species for millennia.
            </p>

            <p className="fs-16px text-white">
              It is the hope of our team that the creation of a welcoming,
              immersive Virtual World Web where true freedom, exercised
              responsibly, is the highest priority, will bring people around the
              world closer together in a vitalizing spirit of partnership and
              friendship.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="mb-100px lg:mb-150px">
          <TwoColumnsSection img="images/vission-banner-2.png">
            <h2 className="fs-56px text-white font-bold mb-6">CORE VALUES</h2>
            <p className="fs-24px text-purple mb-6">
              It is the purpose and intention of Utherverse, to create a new
              kind of human interaction within in a 3D environment.
            </p>

            <p className="fs-16px text-white">
              It provides access to the highest quality entertainment,
              education, and business opportunities, while offering rewarding
              social experiences that will be available to every person,
              anywhere in the world. Utherverse is driven to undo the harm of
              Web 2.0 social media companies by providing a new kind of honest
              and heartfelt socially interactive experience that will unite
              people globally, so that they can meet, interact, learn, benefit,
              work, and play together without barriers and limitations imposed
              by the physical world.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="relative z-10">
          <img
            src="images/blured-icon.png"
            className="absolute bottom-[-70%] right-[-20%] -z-50 hidden lg:block"
            alt=""
          />
          <div className="container">
            <div className="grid lg:grid-cols-3 max-w-[22rem] mx-auto lg:max-w-none gap-16 lg:gap-10 mb-100px lg:mb-150px">
              <VisionCard
                title="Community"
                img="images/vision-person.png"
                desc="For over 15 years, Utherverse has been entrusted to meet the needs of those we serve in the Virtual Reality community. We welcome you to co-create with us."
                points={[
                  "Co-Creation (User built)",
                  "Fun & Engaging",
                  "UTHER Coin",
                  "Marketplace",
                  "Lifestyle",
                  "Diversity",
                  "Inclusion",
                  "Utility (Gamification + Monetization)",
                ]}
              />
              <VisionCard
                title="Counterbalance"
                img="images/vision-lolly.png"
                desc="It’s essential that we create with the focus of keeping human-technology interaction quintessentially human. Together we will maintain harmony between an expansive technological “futureverse” and a true human experience."
                points={[
                  "Humanitarianism & Charity",
                  "Accessibility",
                  "Freedom of Expression",
                  "Safety",
                  "Permission",
                  "Protocol",
                  "Governance",
                  "Blockchain Interoperability",
                ]}
              />
              <VisionCard
                title="Innovation"
                img="images/vision-light.png"
                desc="We think big, imagine the imaginable and provide solutions before there is a problem. We’ve had a lot of time to think about how humans will interact with technology in the future, and we are innovating solutions for the future today."
                points={[
                  "Patented Technology Powering our MMOR™ (Massive Multiuser Online Reality)",
                  "Next Generation Haptics and Adaptics™ Product Lines & Features",
                  "Innovative Immersive Display headset technology",
                ]}
              />
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-100px">
          <div className="container-2">
            <ContactUs showImageBanner={false} />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Vision;
