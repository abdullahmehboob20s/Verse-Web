import HeroLeft from "components/Hero/HeroLeft";
import HeroVideos from "components/Hero/HeroVideos";

function Hero() {
  return (
    <div className="lg:pb-16 relative flex items-center pt-20 xl:pt-24">
      <div className="purple-blur"></div>

      <div className="container-2 relative z-20">
        <HeroLeft />
        {/* <HeroVideos /> */}
      </div>
    </div>
  );
}

export default Hero;
