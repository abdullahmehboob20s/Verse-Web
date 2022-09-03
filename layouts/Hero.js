import HeroLeft from "components/Hero/HeroLeft";
import HeroVideos from "components/Hero/HeroVideos";

function Hero() {
  return (
    <div className="relative flex items-center pt-20">
      <div className="purple-blur"></div>

      <div className="container-2 relative z-20">
        <HeroLeft />
        {/* <HeroVideos /> */}
      </div>
    </div>
  );
}

export default Hero;
