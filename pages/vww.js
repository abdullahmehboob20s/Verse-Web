import Accordion from "components/Accordion";
import SocialLinks from "components/Contact/SocialLinks";
import ContactUs from "components/ContactUs";
import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

function Vww() {
  return (
    <div>
      <Head>
        <title>Utherverse - Vww</title>
      </Head>

      <div className="mb-16">
        <Navbar />
      </div>

      <div className="mb-100px">
        <TitleWithBar
          title={
            <>
              <span>THE VIRTUAL WORLD WEB</span>
              <sup className="text-base align-super">®</sup>
            </>
          }
          subtitle="A WEB PROTOCOL FOR THE METAVERSE"
        />
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/vww-img-1.png" reverse={true}>
          <p className="fs-28px text-purple font-bold mb-6 leading-[1.2]">
            The VWW® is the next stage in the evolution of the World Wide Web.
          </p>

          <p className="fs-16px text-white">
            It is transforming the medium from a collection of flat web-pages
            into an immersive and interactive universe of business, education
            and entertainment. This protocol operates on the most advanced,
            secure and flexible internet infrastructure ever designed, utilizing
            breakout browser technology (Aeon™) that enables surfing the web in
            3D, virtual reality and augmented reality, all while retaining
            traditional flat-web browsing capabilities.
          </p>
        </TwoColumnsSection>
      </div>

      <div className="mb-150px">
        <div className="container-2">
          <div className="grid grid-cols-2 gap-10">
            <FixedHeightCard>
              <p className="fs-16px text-white font-medium">
                Designed to bring the enormous value of the internet to
                industries that had largely been left out due to the solitary
                and two-dimensional limitations of the flat-web. Massive
                business segments, such as real-estate, conventions, education,
                large-scale meetups and live entertainment, as well as thousands
                of smaller market opportunities were left unfulfilled by the
                prior internet iteration.
              </p>
            </FixedHeightCard>
            <FixedHeightCard>
              <p className="fs-16px text-white font-medium">
                By bringing together technologies from the flat web, video
                games, mobile devices, social networking and virtual reality,
                the VWW represents a single platform upon which companies,
                governments, universities and individuals can connect and
                interact in new, unlimited real and unreal ways. Technology and
                experience are compelling today, and they are designed to adapt
                to the foreseeable and imminent virtual reality phenomenon that
                will revolutionize the technology landscape.
              </p>
            </FixedHeightCard>
          </div>
        </div>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection
          img="images/vww-img-2.png"
          reverse={true}
          imgHeight="h-full"
        >
          <div className="py-7">
            <p className="fs-56px text-white font-bold mb-6">
              DESIGNED <br /> TO REPLACE <br /> THE FLAT WEB
            </p>
            <p className="fs-24px text-purple font-bold mb-6 leading-[1.3]">
              The Utherverse VWW is designed to replace the flat-web as the
              dominant medium for human interactions. It is such a disruptive
              innovation that it is impossible to overstate the potential impact
              on all private and public institutions and individuals.
            </p>

            <p className="fs-16px text-white mb-6">
              The transformation is in line with the magnitude of the
              introduction of the internet itself – if the internet had been
              introduced and owned by a privately-held corporation.
            </p>
            <p className="fs-16px text-white">
              Built on top of Unity® the fastest growing game development and
              interactive 3D platform, the Utherverse system builds on Unity’s
              vision of democratizing game development and expands it from just
              games to encompass all forms of social VR development.
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/vww-img-3.png" imgHeight="h-full">
          <div className="py-7">
            <p className="fs-56px text-white font-bold mb-6">
              INTERACTIVE <br /> TOOL SET
            </p>

            <p className="fs-16px text-white mb-6">
              The platform offers a toolset for creating interactive
              multi-player experiences that can be as unique as their creators;
              including online games, entertainment venues, social networks,
              educational environments, services and shopping or even
              architectural visualizations.
            </p>
            <p className="fs-16px text-white mb-6">
              Because the VWW is a system that operates both the platform and
              the browser, files and downloads are managed in extraordinary ways
              that result in efficiencies and better end-user experiences.
            </p>
            <p className="fs-24px text-purple font-bold leading-[1.3]">
              The Utherverse system is a software platform for building and
              presenting engaging virtual experiences. As such, it isn’t purpose
              built to do specific things like online banking or providing news;
              but rather as a protocol to enable the rapid creation of any
              imaginable type of elaborate virtual reality offerings.
            </p>
          </div>
        </TwoColumnsSection>
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

export default Vww;
