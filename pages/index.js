import RevealedBanner from "components/RevealedBanner";
import Divider from "layouts/Divider";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import PoweredBy from "layouts/PoweredBy";
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
      <div>
        <RevealedBanner />
      </div>
      <div>
        <WhyUtherverse />
      </div>
      <div>
        <Divider img="images/divider-connection.png" />
      </div>
    </div>
  );
}

export default Index;
