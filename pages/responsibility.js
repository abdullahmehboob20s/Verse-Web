import ContactUs from "components/ContactUs";
import FixedHeightCard from "components/FixedHeightCard";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const Title = ({ img, title }) => {
  return (
    <div className="flex items-center space-x-4">
      <img src={img} className="block w-7" alt="" />
      <h1 className="fs-20px font-semibold text-white">{title}</h1>
    </div>
  );
};

function Responsibility() {
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
          title="RESPONSIBILITY"
          subtitle="STEWARDSHIP FOR A SAFE AND FREE FUTURE METAVERSE"
        />
      </div>

      <div className="mb-150px">
        <TwoColumnsSection
          reverse={true}
          img="images/responsibilty-img-1.png"
          imgHeight="h-full"
          alignTextRightInReverse={false}
        >
          <div className="py-50px">
            <h4 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              THE SHUSTER META PATENT PORTFOLIO
            </h4>
            <h4 className="fs-24px text-purple uppercase font-semibold mb-4">
              The Utherverse business plan is to empower the community - users
              large and small - to thrive in a truly open metaverse. With the
              protection of the Shuster Meta Patent Portfolio, Utherverse can go
              toe to toe with the biggest and most evil players and keep them
              from controlling the metaverse, but we can also protect the
              community from smaller threats as well.
            </h4>

            <p className="fs-16px text-white mb-10 font-light">
              Our Goal is to help rebuild the damage done by social media, and
              provide an open, welcoming platform to nurture community and
              economy in the future. The metaverse will not simply be a place we
              go into. The metaverse will be everywhere around us.
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-150px">
        <div className="container-2">
          <div className="grid grid-cols-2 gap-10">
            <FixedHeightCard
              bg="bg-purple-gradient-2"
              TitleComponent={() => (
                <div className="mb-8">
                  <Title
                    img="images/logo-white.svg"
                    title="A Reliable Metaverse"
                  />
                </div>
              )}
            >
              <p className="fs-16px font-medium">
                As stewards to metaverse critical technology and IP, Utherverse
                wants to ensure that no one becomes a victim of companies that
                are destined to fail (and almost every company that has ever
                tried to make a metaverse work has failed). Virtual properties
                and NFTs are being sold on hype with no realistic prospect of
                ever being successfully deployed in a real metaverse.
              </p>
            </FixedHeightCard>
            <FixedHeightCard
              bg="bg-purple-gradient-2"
              TitleComponent={() => (
                <div className="mb-8">
                  <Title
                    img="images/logo-white.svg"
                    title="3rd Generation Technology"
                  />
                </div>
              )}
            >
              <p className="fs-16px font-medium">
                We don’t want people to buy tokens based on a slick web site or
                video if the company doesn’t actually have a business plan and a
                team capable of building something as complex as a metaverse. It
                is our serious opinion that most companies currently building a
                metaverse, offering properties and token coins, have dangerously
                underestimated the complexity of the task at hand.
              </p>
            </FixedHeightCard>
          </div>
        </div>
      </div>

      <div className="mb-150px">
        <TwoColumnsSection
          img="images/responsibilty-img-1.png"
          imgHeight="h-full"
        >
          <div className="py-50px">
            <h4 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              COMMUNITY SAFETY MANDATE
            </h4>
            <h4 className="fs-24px text-purple uppercase font-semibold mb-4">
              Utherverse is committed to the growth and prosperity of a rich
              community of creators, entrepreneurs and visionaries. It is our
              mission to provide a platform that offers our community maximum
              freedom and privacy, while still affording safety and protection
              from violence, fraud, spam, scams and bots.
            </h4>

            <p className="fs-16px text-white mb-6 font-light">
              “We have set out to combine the best of open, free and
              decentralized offerings with the best policies and practices of
              fraud prevention and user protection.”
            </p>
            <p className="fs-16px text-white opacity-80 font-light">
              -Brian Shuster
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-150px">
        <div className="container-2">
          <div className="grid grid-cols-2 gap-10">
            <FixedHeightCard
              bg="bg-purple-gradient-2"
              TitleComponent={() => (
                <div className="mb-8">
                  <Title
                    img="images/logo-white.svg"
                    title="Foster the Best of Human Nature"
                  />
                </div>
              )}
            >
              <p className="fs-16px font-medium">
                Technology has been abused by many massive social media
                companies that exploit innate human traits to create echo
                chambers and algorithmic leads that maximize profits with the
                side effect of also maximizing hate and anger. The metaverse can
                be the devastating next level of this exploitation, but it does
                not need to be. If the metaverse is purpose built to foster the
                best of human nature, it can become a tool of great nurturing
                and healing. It can bring people back to, and even enhance, our
                ancestral roots of tribal support: Lifting each other up to
                achieve greater heights. But this version of the metaverse is
                far from assured. It will take tremendous effort and vision to
                make this technology work for the good of mankind.o make this
                technology work for the good of mankind.
              </p>
            </FixedHeightCard>
            <FixedHeightCard
              bg="bg-purple-gradient-2"
              TitleComponent={() => (
                <div className="mb-8">
                  <Title
                    img="images/logo-white.svg"
                    title="Safe Environment for Commerce and Community"
                  />
                </div>
              )}
            >
              <p className="fs-16px font-medium">
                We don’t want people to buy tokens based on a slick web site or
                video if the company doesn’t actually have a business plan and a
                team capable of building something as complex as a metaverse. It
                is our serious opinion that most companies currently building a
                metaverse, offering properties and token coins, have dangerously
                underestimated the complexity of the task at hand.
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

export default Responsibility;
