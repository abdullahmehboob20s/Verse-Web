import BulletPoint from "components/BulletPoint";
import ContactUs from "components/ContactUs";
import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import EmptyBar from "layouts/EmptyBar";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const Bullet = () => {
  return (
    <div className="mt-[.2rem] sm:mt-0 min-w-[1.4rem] sm:min-w-[2rem] lg:min-w-[2.5rem] h-[1.4rem] sm:h-[2rem] lg:h-[2.5rem] bg-purple-gradient-2 rounded-full"></div>
  );
};

function Interconnectivity() {
  return (
    <div>
      <Head>
        <title>Utherverse - Build Your Metaverse</title>
      </Head>

      <div className="mb-16">
        <Navbar />
      </div>

      <div>
        <TitleWithBar
          title="INTERCONNECTED WORLDS"
          subtitle="A CONSTELLATION OF VIRTUAL WORLDS"
        />
      </div>

      <div className="pt-10 sm:pt-14 lg:pt-100px pb-100px relative mb-0px">
        <div className="container">
          <div className="w-full max-w-[60rem] mx-auto">
            <h1 className="fs-56px text-white font-bold text-center mb-5 leading-[1.3]">
              UTHERVERSE IS BUILDING THE NEXT LAYER OF THE INTERNET
            </h1>

            <h4 className="text-purple fs-24px font-semibold text-center mb-6">
              The Utherverse is designed to be a constellation of virtual worlds
              and metaverse offerings, each of which is run by a Sovereign
              operator that is licensed but independent from Utherverse.
            </h4>

            <p className="text-center text-white font-light">
              Each sovereign metaverse has broad authority to set the rules and
              policies that will govern the community in that particular region,
              customize features, look and feel, graphical displays and even the
              user interface that will enable a vast array of unique and
              charmingly different experiences
            </p>
          </div>
        </div>

        <img
          src="images/interconnectivity-bg.png"
          className="absolute top-0 left-0 w-full h-full object-cover -z-50"
          alt=""
        />
      </div>

      <div className="mb-20 lg:mb-100px">
        <div className="container-2">
          <div className="grid md:grid-cols-[.8fr_1fr] items-center gap-50px">
            <div className="md:py-10">
              <h1 className="fs-56px text-center md:text-left text-white font-bold mb-6 lg:mb-10">
                EXPLORE WEB 3.D
              </h1>

              <div className="space-y-5">
                <BulletPoint
                  Bullet={Bullet}
                  alignment="items-start sm:items-center"
                  spacing="space-x-5"
                  title="Users can navigate between interconnected metaverse worlds in much the same way as navigating the web’s hyperlinks."
                />
                <BulletPoint
                  Bullet={Bullet}
                  alignment="items-start sm:items-center"
                  spacing="space-x-5"
                  title="Each virtual world on the network has its own URL."
                />
                <BulletPoint
                  Bullet={Bullet}
                  alignment="items-start sm:items-center"
                  spacing="space-x-5"
                  title="Users move from space to space by clicking doors, interacting with game worlds, or using search engines."
                />
                <BulletPoint
                  Bullet={Bullet}
                  alignment="items-start sm:items-center"
                  spacing="space-x-5"
                  title="Spaces can be Landmarked - analogous to web bookmarks - or URLs entered manually."
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="images/girl-with-phone.png"
                className="w-full max-w-[18rem] md:max-w-none md:w-[90%]"
                alt=""
              />
            </div>
          </div>
        </div>
        <EmptyBar />
      </div>

      <div className="mb-100px lg:mb-150px">
        <div className="container-2">
          <div className="w-full max-w-[50rem] mx-auto mb-16">
            <h1 className="fs-56px text-white font-medium mb-5 text-center">
              Virtual Worlds
            </h1>

            <h2 className="fs-24px text-purple font-medium text-center leading-[1.3] mb-5 md:mb-8">
              Virtual worlds, which are analogous to webpages on the traditional
              Internet, span a number of different categories,
            </h2>

            <p className="fs-16px text-center text-white">
              The most common of which are:
            </p>
          </div>

          <div className="grid sm:grid-cols-[auto_auto] gap-16 lg:gap-100px justify-center">
            <div className="space-y-4">
              <BulletPoint
                title="Social networking"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Real estate"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Conventions"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Education"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Dating"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
            </div>
            <div className="space-y-4">
              <BulletPoint
                title="Adult Entertainment"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Healthcare"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Meetups"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Live Entertainment"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
              <BulletPoint
                title="Gaming"
                spacing="space-x-4"
                textClassName="fs-22px text-lightBlue font-semibold"
              />
            </div>
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
  );
}

export default Interconnectivity;
