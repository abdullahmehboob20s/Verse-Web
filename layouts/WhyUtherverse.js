import LearnMoreButton from "components/LearnMoreButton";
import Image from "next/image";
import React from "react";

function WhyUtherverse() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-[100%] lg:w-[80%] xl:w-[70%] h-full -z-20">
        <Image
          src="/images/pensive.png"
          layout="fill"
          alt=""
          loading="lazy"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-light-gray-bg block xl:hidden"></div>

      <div className="container-2 flex items-center lg:justify-end">
        <div className="py-7 w-full max-w-[26rem] lg:max-w-none lg:w-1/2">
          <h1 className="text-xl sm:text-2xl xl:text-4xl font-bold mb-4 xl:mb-5">
            <span className="text-purple">Why</span> Utherverse is for you
          </h1>
          <h2 className="fs-56px font-bold mb-6 leading-[1]">
            Meet AEON <sup className="text-xs align-super">TM</sup>
          </h2>

          <h4 className="fs-24px text-purple mb-6">
            Utherverse is Building the Next Layer of the Internet.
          </h4>

          <p className="fs-16px text-white leading-[1.6] font-light mb-8 xl:mb-10">
            Users of the Utherverse will access this new Internet layer using a
            new kind of Internet Browser, named Aeon™. Aeon™ is a web 3.D
            browser with powerful new search engine tools.
          </p>

          <div className="mb-10 sm:mb-12">
            <LearnMoreButton title="Learn More" />
          </div>

          <div className="p-4 xl:p-5 font-medium text-center text-white text-xs xl:text-sm bg-purple-gradient-2 rounded-xl xl:rounded-[20px]">
            VR spaces that are being billed as “the metaverse” will be the
            equivalent of websites on the new Virtual World Web (VWW™) that is
            the Utherverse!
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUtherverse;
