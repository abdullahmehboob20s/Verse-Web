import RevealedBanner from "components/RevealedBanner";
import Divider from "layouts/Divider";
import Hero from "layouts/Hero";
import InterConnectivity from "layouts/InterConnectivity";
import Navbar from "layouts/Navbar";
import OwnMetaverse from "layouts/OwnMetaverse";
import PoweredBy from "layouts/PoweredBy";
import Protected from "layouts/Protected";
import WhyUtherverse from "layouts/WhyUtherverse";

function Index() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
      </div>
      <div className="mb-[100px]">
        <PoweredBy />
      </div>
      <RevealedBanner />
      <WhyUtherverse />
      <Divider img="images/divider-connection.png" />
      <OwnMetaverse />
      <Divider img="images/divider-connection.png" />
      <InterConnectivity />
      <Divider img="images/divider-connection.png" />
      <Protected />
      <Divider img="images/divider-connection.png" />
    </div>
  );
}

export default Index;
