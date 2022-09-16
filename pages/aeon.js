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

const Bullet = ({ img }) => {
  return (
    <img
      src={img}
      alt=""
      className="min-w-[40px] xl:min-w-[50px] h-10 xl:h-[50px] rounded-full"
    />
  );
};

function Aeon() {
  return (
    <div>
      <Head>
        <title>Utherverse - Build Your Metaverse</title>
      </Head>

      <div className="mb-20 lg:mb-16">
        <Navbar />
      </div>

      <div>
        <TitleWithBar
          title={<span>THE AEON™ BROWSER</span>}
          subtitle="DESTINED TO BECOME THE PRIMARY INTERNET PLATFORM."
        />
      </div>

      <div className="py-12 md:py-20 lg:py-100px relative mb-50px">
        <div className="container-2">
          <div className="w-full max-w-[40rem]">
            <h1 className="fs-40px text-white font-bold  mb-8 leading-[1.3]">
              Utherverse has created a new layer of the Internet that sits on
              top of the flat World Wide Web (WWW) layer.
            </h1>

            <p className="fs-16px font-medium text-white">
              When it is populated, this Virtual World Web (VWW™) will be
              comprised of millions interconnected metaverse worlds that is
              destined to become the primary Internet platform. Users of the
              Utherverse VWW will access this new Internet layer using a new
              kind of Internet Browser (named Aeon).
            </p>
          </div>
        </div>

        <img
          src="images/network-globe.png"
          className="absolute top-1/2 md:bottom-[-16%] right-0 w-100% md:w-[80%] -z-50"
          alt=""
        />
      </div>

      <div className="mb-20 lg:mb-100px">
        <div className="container-2">
          <div className="grid lg:grid-cols-2">
            <FixedHeightCard title="A Virtual Constellation">
              <p className="fs-16px text-white font-medium">
                Other companies billing their VR spaces as “the metaverse” will
                be the equivalent of websites, while you can think of the
                Utherverse as being the World Wide Web itself. Competitors are
                just nodes in a vast constellation of this new Virtual World
                Web.
              </p>
            </FixedHeightCard>
          </div>
        </div>
      </div>

      <div className="py-50px xl:py-100px bg-gradient-to-r from-transparent to-[#7f20fc52]">
        <TwoColumnsSection img="images/man.png">
          <div>
            <div className="mb-10">
              <h1 className="fs-56px text-white font-bold mb-6">
                A 3.D WEB BROWSER
              </h1>
              <p className="fs-24px text-purple leading-[1.2] font-semibold mb-4">
                As a fully featured metaverse browser it will enable users to
                jump from location to location, search the metaverse and give a
                suite of tools similar to what you would find in a flat-web
                browser updated for the metaverse.
              </p>

              <p className="text-sm text-white font-light">
                Aeon is a web 3.D browser with powerful new search engine tools,
                where you can:
              </p>
            </div>

            <div className="space-y-4">
              <BulletPoint
                title="“Landmark” your favorite places"
                spacing="space-x-4"
                alignment="items-center"
                Bullet={() => <Bullet img="images/blob-img-location.png" />}
              />
              <BulletPoint
                title="Search millions of worlds"
                spacing="space-x-4"
                alignment="items-center"
                Bullet={() => <Bullet img="images/vision-lolly.png" />}
              />
              <BulletPoint
                title="Jump into and out of events"
                spacing="space-x-4"
                alignment="items-center"
                Bullet={() => <Bullet img="images/blob-img-spring.png" />}
              />
            </div>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-20 lg:mb-100px">
        <div className="py-100px lg:py-150px xl:py-200px relative">
          <div className="container-2">
            <h1 className="fs-34px font-bold uppercase text-center mb-4">
              MILLIONS OF INTERCONNECTED METAVERSE WORLDS
            </h1>

            <p className="text-center fs-16px mx-auto w-full max-w-[44rem]">
              With the Aeon Browser, users will be able to surf to millions of
              interconnected Metaverse offerings, all built by other users,
              entrepreneurs, celebrities, businesses and governments. Millions
              of worlds and games will be networked for interoperability, and
              discoverable via our powerful new Web 3.D search engine.
            </p>
          </div>

          <img
            src="images/clubabc.png"
            className="absolute top-0 left-0 w-full h-full -z-50 opacity-80"
            alt=""
          />
        </div>
        <EmptyBar />
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

export default Aeon;
