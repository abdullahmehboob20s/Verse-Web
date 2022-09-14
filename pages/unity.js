import BulletPoint from "components/BulletPoint";
import ContactUs from "components/ContactUs";
import TitleWithBar from "components/TitleWithBar";
import TwoColumnsSection from "components/TwoColumnsSection";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

const Bullet = ({ img }) => {
  return (
    <img src={img} alt="" className="min-w-[50px] h-[50px] rounded-full" />
  );
};

function Unity() {
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
          title="UNITY"
          subtitle="WE ARE A PERFECT COMPLIMENT TO UNITY"
        />
      </div>

      <div className="mb-100px">
        <TwoColumnsSection
          reverse={true}
          img="images/unity-vr.png"
          imgHeight="h-auto"
          alignTextRightInReverse={false}
        >
          <div>
            <h4 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              A THRIVING DEVELOPER COMMUNITY
            </h4>
            <h4 className="fs-24px text-purple uppercase font-semibold mb-4">
              Platform Agnostic, usable on all your favorite devices: PC Mac,
              Tablets, Oculus, iPhone and Samsung.
            </h4>

            <p className="fs-16px text-white mb-10 font-light">
              From the beginning, Utherverse has been a complement to the Unity
              3D game development system. Our creators chose Unity as the
              foundation on which to build the Utherverse because it is
              cross-platform, powerful, feature-rich, and has a thriving
              developer community already familiar with its art asset pipeline.
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/uinty-img-1.png">
          <div>
            <h1 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              THE VIRTUAL INTERNET
            </h1>

            <h4 className="fs-24px text-purple font-semibold mb-6">
              The proprietary technological breakthroughs by Utherverse now make
              all of this possible in a massively multi-user online environment.
            </h4>

            <p className="fs-16px text-white mb-5 font-light">
              Utherverse combines user-generated content and social networking
              with complex back-end coding to integrate Web 2.0 features into
              our AEON Web3.D browser: video, audio, graphics, animations,
              textures, props, sounds, movement scripts, HTML5-enabled visuals;
              and e-commerce capabilities.
            </p>
            <p className="fs-16px text-white font-light">
              Users are guided to any one of the metaverse worlds by
              hyperlinking on a unique URL in the AEON browser, or they can
              search for worlds by topic using search directories similar to web
              2.0
            </p>
          </div>
        </TwoColumnsSection>
      </div>

      <div className="mb-100px">
        <TwoColumnsSection img="images/unity-img-2.png" reverse={true}>
          <div>
            <h1 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              UNLIKE ANY <br /> STAND-ALONE VR EXPERIENCE
            </h1>

            <h4 className="fs-24px text-purple font-semibold mb-6">
              Think of Unity as an amazing engine and the Utherverse platform
              software as the rest of the car. Together you get a full ride, and
              with Utherverse and Unity, it’s the ride of your dreams!
            </h4>

            <p className="fs-16px text-white font-light">
              Game engines (ex: Unity, Unreal, Source, etc.) are little more
              than a set of code libraries, presented in an integrated
              development environment used to render 3D spaces, special effects,
              and animated characters.
            </p>
          </div>
        </TwoColumnsSection>
      </div>
      <div className="mb-100px">
        <TwoColumnsSection img="images/unity-img-3.png">
          <div>
            <h1 className="fs-56px text-white uppercase font-bold mb-4 leading-[1.1]">
              NETWORKED <br /> VIRTUAL REALITY
            </h1>

            <h4 className="fs-24px text-purple font-semibold mb-6">
              While most game engines provide helpful art, pipeline tools, code
              templates, and pre-implemented logic (patterns) to make game
              development easier; as a rule, “networking” is an after-thought.
            </h4>

            <p className="fs-16px text-white font-light">
              Utherverse provides an always-on, networked, virtual world hosting
              platform to which client applications can connect to engage with
              “instances” (scenes, game areas, or other shared experiences). The
              platform is fully programmable both through scripts which run in
              instances, or through components that extend the server’s core
              functionality. Utherverse Sovereigns can develop full-scale
              MMOR-style products that leverage Utherverse’s extensive
              networking capabilities, built-in security, data storage
              facilities, and other features.
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

export default Unity;
