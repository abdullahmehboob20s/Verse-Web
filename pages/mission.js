import Accordion from "components/Accordion";
import SocialLinks from "components/Contact/SocialLinks";
import ContactUs from "components/ContactUs";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

function Mission() {
  return (
    <div className="bg-page">
      <div className="relative z-50">
        <Head>
          <title>Utherverse - Mission</title>
        </Head>

        <div className="mb-20 lg:mb-16">
          <Navbar />
        </div>

        <div className="mb-12 lg:mb-100px">
          <TitleWithBar
            title="MISSION"
            subtitle="THE UTHERVERSE - BEST OF ALL WORLDS"
          />
        </div>

        <div className="mb-20 lg:mb-100px relative">
          <img
            src="images/blured-icon.png"
            className="absolute top-[-50%] -z-30 left-[-20%]"
            alt=""
          />

          <TwoColumnsSection img="images/mission-1.png" imgBelowInMobile={true}>
            <h2 className="fs-56px text-gradient-purple font-bold mb-6">
              METAVERSE
            </h2>

            <p className="fs-18px text-white font-medium mb-6">
              While other companies have suddenly realized that the future of
              technology involves the metaverse, the team at Utherverse has been
              actively building it for the past 17 years.
            </p>

            <p className="fs-16px text-white">
              While other companies have suddenly realized that the future of
              technology involves the metaverse, the team at Utherverse has been
              actively building it for the past 17 years.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="mb-100px lg:mb-150px">
          <TwoColumnsSection img="images/mission-2.png" reverse={true}>
            <h2 className="fs-56px text-gradient-purple font-bold mb-6">
              THE NEXT GENERATION <br /> OF THE INTERNET
            </h2>

            <p className="fs-18px text-white font-medium mb-6">
              The Utherverse is not just “a” metaverse. It is the next
              generation of the Internet: a decentralized multiverse, led by a
              new and abundant generation of creators, that is set to deliver
              interconnected, immersive experiences.
            </p>

            <p className="fs-16px text-white">
              The foresight and vision of our founder Brian Shuster has put the
              Utherverse in a key position as a hub around which other visions
              of the metaverse will eventually coalesce, interoperate, and cross
              pollinate.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="mb-100px lg:mb-150px">
          <div className="container-2">
            <div className="max-w-[26rem] mx-auto mb-16">
              <h4 className="fs-28px font-bold text-white text-center leading-[1.3] mb-2">
                “The Visionary starts with a clean piece of paper and
                re-imagines the world.”
              </h4>
              <p className="text-center fs-16px text-white opacity-60 font-light">
                - Macolm Gladwell
              </p>
            </div>
          </div>
          <SocialLinks />
        </div>

        <div className="mb-100px lg:mb-150px relative">
          <img
            src="images/blured-icon.png"
            className="absolute top-[-18rem] left-[-18rem] -z-50"
            alt=""
          />
          <div className="container-2 relative">
            <div className="max-w-[30rem] xl:max-w-[40rem] mx-auto space-y-6 z-20">
              <Accordion title="Patents on Critical Technology">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    Our innovative technology stack has solved many of the “show
                    stopping” issues that newer metaverse companies haven’t even
                    thought about yet.
                  </p>
                  <p className="fs-16px text-white font-medium">
                    More than 50 million players worldwide have downloaded and
                    participated in our existing 2nd generation platform which
                    already included massive technological breakthroughs that
                    have DOZENS OF PATENTS on critical technological processes
                    and methods necessary to operate a “metaverse”.
                  </p>
                  <p className="fs-16px text-white font-medium">
                    We are the only platform that can truly handle MMOR ™
                    (Massive Multiuser Online Reality) scenarios on all devices,
                    without a massive drain on network resources and with a
                    Permissions tech stack that facilitates interoperability
                    between worlds and exchange of goods safely and efficiently.
                  </p>
                </div>
              </Accordion>
              <Accordion title="3rd Generation Platform">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    Our previous platforms were open, community built and driven
                    endeavors, which have been the most successful virtual world
                    platforms in history!
                  </p>
                  <p className="fs-16px text-white font-medium">
                    Our 3rd generation platform is already years ahead of any
                    competitor.
                  </p>
                  <p className="fs-16px text-white font-medium">
                    It is designed to package the best of video games, VR and
                    the Internet into an open, community based massive global
                    web of interconnected metaverse worlds. With more than $40
                    million invested in development thus far, more than 17 years
                    of experience, a massive existing user base and our
                    incredible intellectual property portfolio, we plan to be
                    the dominant company offering the genuine metaverse within
                    18 months of release.
                  </p>
                </div>
              </Accordion>
              <Accordion title="AAA+ Development Team">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    Our development team is a seasoned group of visionaries,
                    with countless game titles under their belts. They have
                    already built and rebuilt multiple iterations of the
                    Utherverse in preparation for our newest platform.
                  </p>
                  <p className="fs-16px text-white font-medium">
                    Legacy worlds built by Utherverse still host an active and
                    dedicated user base. At their peak, millions of monthly
                    users called Utherverse operated worlds, home.
                  </p>
                </div>
              </Accordion>
              <Accordion title="The Utherverse is a co-creative endeavor!">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    We are an open platform. As such, we will build and evolve
                    our world together with the communities of the Internet. We
                    give each of our users the chance to thrive and succeed,
                    while helping to build the best space for everyone.
                  </p>

                  <p className="fs-16px text-white font-medium">
                    Ours is a vision of the metaverse where every user who
                    participates has the space to grow, evolve, and prosper.
                  </p>
                </div>
              </Accordion>

              <img
                src="images/mission-lady.png"
                className="absolute top-[-7rem] -z-20 left-[-6%] h-[28rem] xl:h-[34rem] hidden md:block"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-100px">
          <TwoColumnsSection img="images/mission-3.png" imgBelowInMobile={true}>
            <h2 className="fs-56px text-gradient-purple font-bold mb-6">
              EMPOWER COMMUNITY
            </h2>

            <p className="fs-18px text-white font-medium mb-6">
              The Utherverse business plan is to empower the community - users
              large and small - to thrive in a truly open metaverse.
            </p>

            <p className="fs-16px text-white">
              The Utherverse can go toe to toe with the biggest and most evil
              players and keep them from controlling the metaverse, but we can
              also protect the community from smaller threats to the community.
            </p>
          </TwoColumnsSection>
        </div>

        <div className="mb-20 lg:mb-100px relative">
          <img
            src="images/blured-icon.png"
            className="absolute top-[-70%] right-[-20%] w-[90%] hidden lg:block -z-50"
            alt=""
          />
          <TwoColumnsSection
            img="images/mission-4.png"
            reverse={true}
            imgHeight="h-auto lg:h-full xl:h-530px"
            imgClassName="scale-110"
          >
            <div className="lg:py-10 xl:py-0">
              <h2 className="fs-56px text-gradient-purple font-bold mb-6">
                SHEPHERDS <br /> TO METAVERSE CRITICAL IP
              </h2>

              <p className="fs-18px text-white font-medium mb-6">
                As Shepherds to metaverse critical IP, Utherverse wants to
                ensure that no one becomes a victim of companies that are
                destined to fail; and almost every company that has ever tried
                to make a metaverse work has failed.
              </p>

              <p className="fs-16px text-white">
                Virtual properties and NFTs are being sold on hype with no
                honest prospect of ever being successfully deployed in a real
                metaverse. We don’t want people to buy tokens based on a slick
                web site or video if the company doesn’t actually have a
                business plan and a team capable of building something as
                complex as a metaverse.
              </p>
            </div>
          </TwoColumnsSection>
        </div>

        <div className="mb-20 lg:mb-100px">
          <div className="container-2">
            <div className="max-w-[30rem] xl:max-w-[40rem] mx-auto space-y-6">
              <Accordion title="Reverse Damage done by Web 2.0">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    Our goal is to help rebuild the damage done by social media,
                    and provide an open, welcoming platform to nurture community
                    in the future. The metaverse will not simply be a place we
                    go into. The metaverse will be everywhere around us.
                  </p>
                </div>
              </Accordion>
              <Accordion title="A Revolution in Virtual Reality">
                <div className="space-y-4">
                  <p className="fs-16px text-white font-bold">
                    Now, we are on the brink of launching our third-generation
                    commercial platform which will include all of the openness
                    and features that we’ve been developing and refining for
                    more than a decade.
                  </p>

                  <p className="fs-16px text-white font-medium">
                    With this new set of tools, protocols, technologies and
                    knowledge of operations, a revolution is about to hit the
                    world of VR and metaverse!
                  </p>
                </div>
              </Accordion>
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

export default Mission;
