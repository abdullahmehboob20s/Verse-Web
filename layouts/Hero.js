import HeroLeft from "components/Hero/HeroLeft";
import HeroVideos from "components/Hero/HeroVideos";

function Hero() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="container-2 relative">
        <HeroLeft />
        <HeroVideos />
      </div>
    </div>
  );
}

export default Hero;
