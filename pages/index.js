import RevealedBanner from "components/RevealedBanner";
import BuiltOnUnity from "layouts/BuiltOnUnity";
import Contact from "layouts/Contact";
import Divider from "layouts/Divider";
import Economy from "layouts/Economy";
import Hero from "layouts/Hero";
import InterConnectivity from "layouts/InterConnectivity";
import Layout from "layouts/Layout";
import MMOR from "layouts/MMOR";
import OwnMetaverse from "layouts/OwnMetaverse";
import PoweredBy from "layouts/PoweredBy";
import Protected from "layouts/Protected";
import Roadmap from "layouts/Roadmap";
import UtherverseTokenomics from "layouts/UtherverseTokenomics";
import WhyUtherverse from "layouts/WhyUtherverse";
import Head from "next/head";

function Index() {
  return (
    <Layout showContactUs={false}>
      <Head>
        <title>Utherverse</title>
      </Head>

      <div className="mb-16 lg:mb-100px">
        <Hero />
      </div>
      <div className="mb-20 lg:mb-100px">
        <PoweredBy />
      </div>
      <RevealedBanner />
      <WhyUtherverse />
      <Divider img="images/divider-connection.png" />
      <OwnMetaverse />
      <Divider img="images/divider-wifi.png" />
      <InterConnectivity />
      <Divider img="images/divider-shield.png" />
      <Protected />
      <Divider img="images/divider-chart.png" showArrow={true} />
      <Economy />
      <Divider img="images/divider-logo.png" />
      <UtherverseTokenomics />
      <Divider img="images/divider-connection.png" />
      <MMOR />
      <Divider img="images/divider-unity.png" />
      <BuiltOnUnity />
      <Divider img="images/unity-logo.png" />
      <div className="mb-20 sm:mb-100px lg:mb-200px">
        <Roadmap />
      </div>
      <div className="mb-16 sm:mb-100px lg:mb-200px">
        <Contact />
      </div>
    </Layout>
  );
}

export default Index;
