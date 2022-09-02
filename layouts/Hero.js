import HeroLeft from "components/Hero/HeroLeft";
import HeroVideos from "components/Hero/HeroVideos";

function Hero() {
  return (
    <div className="lg:min-h-screen flex items-center pt-36 lg:py-0">
      <div className="container-2 relative">
        <HeroLeft />
        {/* <HeroVideos /> */}
      </div>
    </div>
  );
}

export default Hero;
