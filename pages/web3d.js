import BulletPoint from "components/BulletPoint";
import ContactUs from "components/ContactUs";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const VBullet = () => {
  return (
    <div className="min-w-[2rem] sm:min-w-[2.4rem] lg:min-w-[3rem] xl:min-w-[3.4rem] h-[2rem] sm:h-[2.4rem] lg:h-[3rem] xl:h-[3.4rem]">
      <img src="images/vBullet.svg" className="w-full" alt="" />
    </div>
  );
};

function Web3d() {
  return (
    <div className="bg-page">
      <div className="z-10">
        <Head>
          <title>Utherverse - Web3D</title>
        </Head>

        <div className="mb-20 lg:mb-16">
          <Navbar />
        </div>

        <div className="mb-14 lg:mb-100px">
          <TitleWithBar
            title={
              <>
                <span>WEB 3.D</span>
                <sup className="text-base align-super">TM</sup>
              </>
            }
            subtitle="THE IMMERSIVE VIRTUAL WEB"
          />
        </div>

        <div className="mb-100px lg:mb-150px">
          <div className="container-2 grid lg:grid-cols-2 gap-10">
            <div className="relative flex items-center justify-center">
              <img
                src="images/glasses-girl.png"
                className="w-full max-w-[6rem] sm:max-w-[8rem] lg:max-w-none lg:w-1/2 lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                alt=""
              />
            </div>
            <div>
              <div className="mb-10">
                <h1 className="fs-56px text-white font-bold leading-[1.2] mb-4">
                  WEB 3.0 + 3DVR = WEB 3.D
                </h1>
                <h4 className="fs-28px text-purple font-bold leading-[1.2]">
                  The newest web layer that is expressed and experienced in
                  immersive virtual reality.
                </h4>
              </div>

              <div className="space-y-6">
                <BulletPoint
                  Bullet={VBullet}
                  spacing="space-x-4 sm:space-x-6"
                  title="Our platform and software are the next stage in the evolution of the World Wide Web, a genuine game-changer for the Metaverse."
                />

                <BulletPoint
                  Bullet={VBullet}
                  spacing="space-x-4 sm:space-x-6"
                  title="Transforming Web 2.0 into an immersive and connected VR universe for business, education, entertainment and community; which we call Web 3.D."
                />

                <BulletPoint
                  Bullet={VBullet}
                  spacing="space-x-4 sm:space-x-6"
                  title="A groundbreaking, new internet software layer integrating Unity® gaming technology with the traditional web functionality for the best of the internet, gaming, and VR all in one."
                />

                <BulletPoint
                  Bullet={VBullet}
                  spacing="space-x-4 sm:space-x-6"
                  title="A groundbreaking, new internet software layer integrating Unity® gaming technology with the traditional web functionality for the best of the internet, gaming, and VR all in one."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-100px lg:mb-150px">
          <div className="container-2">
            <div className="mx-auto max-w-[30rem]">
              <h2 className="fs-28px text-white mb-2 text-center font-semibold">
                “The Foundation of the 3.D internet. This is the WordPress® for
                the metaverse.”
              </h2>
              <p className="fs-24px text-white opacity-60 text-center font-light">
                - Brian Shuster
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-100px">
          <TwoColumnsSection
            img="images/web3d-img-1.png"
            reverse={true}
            imgAboveInMobile={true}
          >
            <h2 className="fs-56px text-white font-bold mb-6">
              NEW OPPORTUNITIES
            </h2>

            <p className="fs-24px text-purple font-medium mb-6">
              The Web 3.D internet is opening new kinds of opportunities that
              could never have been realized under the old web system.
            </p>

            <p className="fs-16px text-white">
              Businesses that benefit from groups of users interacting with each
              other for maximum value, such as live entertainment events,
              conventions and classes as well as businesses that are enhanced by
              users being in a real-world space or dealing with 3D objects such
              as real-estate, interior design and shopping, will all realize
              huge gains within the metaverse.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="mb-20 lg:mb-100px">
          <TwoColumnsSection img="images/web3d-img-2.png">
            <h2 className="fs-56px text-white font-bold mb-6">
              THE VIRTUAL INTERNET
            </h2>

            <p className="fs-24px text-purple font-medium mb-6">
              The proprietary technological breakthroughs by Utherverse now make
              all of this possible in a massively multi-user online environment.
            </p>

            <p className="fs-16px text-white mb-6">
              Utherverse combines user-generated content and social networking
              with complex back-end coding to integrate Web 2.0 features into
              our AEON Web3.D browser: video, audio, graphics, animations,
              textures, props, sounds, movement scripts, HTML5-enabled visuals;
              and e-commerce capabilities.
            </p>
            <p className="fs-16px text-white">
              Users are guided to any one of the metaverse worlds by
              hyperlinking on a unique URL in the AEON browser, or they can
              search for worlds by topic using search directories similar to web
              2.0
            </p>
          </TwoColumnsSection>
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

export default Web3d;
