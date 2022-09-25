import FooterBottom from "components/Footer/FooterBottom";
import Divider from "layouts/Divider";
import Faq from "layouts/Fnft/Faq";
import Hero from "layouts/Fnft/Hero";
import Mint from "layouts/Fnft/Mint";
import Own from "layouts/Fnft/Own";
import Technology from "layouts/Fnft/Technology";
import VirtualApartments from "layouts/Fnft/VirtualApartments";
import WhatsInTheTrunk from "layouts/Fnft/WhatsInTheTrunk";
import Layout from "layouts/Layout";
import Head from "next/head";
import React from "react";

function Fnft() {
  return (
    <Layout showFooter={false} showContactUs={false}>
      <Head>
        <title>Utherverse - Tokenomics</title>
      </Head>

      <div className="mb-20 lg:mb-100px">
        <Hero />
      </div>

      <div>
        <Own />
      </div>
      <Divider img="images/divider-connection.png" />
      <div className="mb-20 lg:mb-100px">
        <Technology />
      </div>
      <div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="w-full mx-auto"
        >
          <source src="images/technology-video.mp4" type="video/mp4" />
        </video>
      </div>

      <Divider img="images/divider-connection.png" />

      <div className="mb-20 lg:mb-100px">
        <VirtualApartments />
      </div>

      <div className="mb-20 lg:mb-150px">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="w-full max-auto"
        >
          <source src="images/realestate.mp4" type="video/mp4" />
        </video>
      </div>

      <div>
        <Mint />
      </div>

      <Divider img="images/divider-connection.png" />

      <WhatsInTheTrunk />

      <Divider img="images/divider-connection.png" />

      <div className="mb-20 lg:mb-150px">
        <Faq />
      </div>

      <div className="mb-20">
        <div className="container-2">
          <FooterBottom />
        </div>
      </div>
    </Layout>
  );
}

export default Fnft;
