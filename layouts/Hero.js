import HeroLeft from "components/Hero/HeroLeft";
import HeroVideos from "components/Hero/HeroVideos";

function Hero() {
  return (
    <div className="relative flex items-center pt-20">
      <div className="purple-blur"></div>

      <div className="relative z-20 lg:space-x-24 lg:flex container-2">
        <HeroLeft />
        <HeroVideos />
      </div>
    </div>
  );
}

export default Hero;
