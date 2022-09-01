import LearnMoreButton from "components/LearnMoreButton";
import React from "react";

function WhyUtherverse() {
  return (
    <div className="relative">
      <img
        src="images/pensive.png"
        className="absolute top-0 left-0 w-[70%] h-full object-cover z-[-1]"
        alt=""
      />

      <div className="container-2 flex items-center justify-end">
        <div className="p-7 w-1/2">
          <h1 className="text-4xl font-bold mb-5">
            <span className="text-purple ">Why</span> Utherverse is for you
          </h1>
          <h2 className="text-[55px] font-bold mb-6 leading-[1]">
            Meet AEON <sup className="text-xs align-super">TM</sup>
          </h2>

          <h4 className="text-2xl text-purple mb-6">
            Utherverse is Building the Next Layer of the Internet.
          </h4>

          <p className="text-base text-white leading-[1.6] font-light mb-10">
            Users of the Utherverse will access this new Internet layer using a
            new kind of Internet Browser, named Aeon™. Aeon™ is a web 3.D
            browser with powerful new search engine tools.
          </p>

          <div className="mb-12">
            <LearnMoreButton title="Learn More" />
          </div>

          <div className="p-5 font-medium text-center text-white text-sm bg-purple-gradient-2 rounded-[20px]">
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
