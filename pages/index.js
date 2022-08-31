import Hero from "layouts/Hero";
import Navbar from "layouts/Navbar";
import PoweredBy from "layouts/PoweredBy";

function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="mb-[100px]">
        <PoweredBy />
      </div>
    </div>
  );
}

export default Index;
