import RevealedBanner from "components/RevealedBanner";
import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import PoweredBy from "layouts/PoweredBy";
import WhyUtherverse from "layouts/WhyUtherverse";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-[100px]">
        <PoweredBy />
      </div>
      <RevealedBanner />
      <div className="mb-[100px]">
        <WhyUtherverse />
      </div>
    </div>
  );
}

export default Index;
