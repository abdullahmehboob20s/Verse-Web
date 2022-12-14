import Dropdown from "components/Dropdown";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const visionDropdownLinks = [
  { link: "/mission", title: "Mission" },
  { link: "/vision", title: "Vision" },
  { link: "/web3d", title: "Web 3.D" },
  { link: "/vww", title: "VWW" },
  { link: "/build", title: "Build A Metaverse" },
  { link: "/interconnectivity", title: "Interconnectivity" },
  { link: "/aeon", title: "AEON" },
  { link: "/mmor", title: "MMOR" },
  { link: "/unity", title: "Unity" },
  { link: "/responsibility", title: "Responsibility" },
  { link: "/operations", title: "Operations" },
];
const economicDropdownLinks = [
  { link: "/economics", title: "Economics" },
  { link: "/tokenomics", title: "Tokenomics" },
  { link: "/fnft", title: "fNFt" },
];

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsSidebarOpen(false));

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style["height"] = "100vh";
      document.body.style["overflow-y"] = "hidden";
    } else {
      document.body.style["height"] = "auto";
      document.body.style["overflow-y"] = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <nav className="bg-black relative z-50 top-0 left-0 w-full border-b-1px border-purple">
      <div className="container-2 h-[3.4rem] lg:h-auto lg:py-[1rem] xl:py-[1.4rem] flex justify-end lg:justify-[unset] items-center relative space-x-6">
        <Link href="/">
          <a className="flex items-center justify-center translate-x-[-50%] lg:translate-x-[unset] left-[50%] bottom-[-82%] absolute lg:static lg:ml-[-8%] lg:mb-[-4rem] xl:mb-[-5.5rem]">
            <div className="absolute top-[43%] -translate-y-1/2 left-0 w-full h-1px bg-black z-[-1]"></div>
            <img
              src="images/logo-primary.png"
              className="min-w-[6rem] w-[6rem] xl:min-w-[8rem] xl:w-[8rem]"
              alt=""
            />
          </a>
        </Link>

        <button
          className="text-2xl fill-purple text-purple flex lg:hidden"
          onClick={() => setIsSidebarOpen((val) => !val)}
        >
          <IoMenu />
        </button>
        <div
          ref={sidebarRef}
          className={`flex flex-col lg:flex-row lg:items-center justify-between flex-1 fixed top-0 right-0 lg:static border-l-1px border-purple lg:border-none w-[300px] h-full lg:h-auto lg:w-auto bg-black p-12 lg:p-0 overflow-y-auto lg:overflow-visible transition-all duration-.3s lg:translate-x-0 z-[120] ${
            isSidebarOpen ? "translate-x-0" : "translate-x-[300px]"
          }`}
        >
          {/*  */}

          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-1 xl:space-x-[5px]">
            <div className="flex items-center justify-between lg:hidden mb-8">
              <Link href="/">
                <a className="flex items-center justify-center bg-black w-1/3">
                  <img
                    src="images/logo-primary.png"
                    className="w-full"
                    alt=""
                  />
                </a>
              </Link>

              <button
                className="text-2xl text-white"
                onClick={() => setIsSidebarOpen((val) => !val)}
              >
                <IoCloseSharp />
              </button>
            </div>

            <Dropdown title="Vision" links={visionDropdownLinks} />
            <Dropdown title="Economy" links={economicDropdownLinks} />

            <Link href="/press">
              <a className="py-1 lg:py-[2px] px-3 xl:px-[20px] text-sm lg:text-xs xl:text-base font-medium rounded-[3px] transition-all duration-.3s hover:bg-purple-gradient border-1px border-purple lg:border-none">
                Press
              </a>
            </Link>
            <Link href="/patent">
              <a className="py-1 lg:py-[2px] px-3 xl:px-[20px] text-sm lg:text-xs xl:text-base font-medium rounded-[3px] transition-all duration-.3s hover:bg-purple-gradient border-1px border-purple lg:border-none">
                Patents
              </a>
            </Link>
            <Link href="/legacy">
              <a className="py-1 lg:py-[2px] px-3 xl:px-[20px] text-sm lg:text-xs xl:text-base font-medium rounded-[3px] transition-all duration-.3s hover:bg-purple-gradient border-1px border-purple lg:border-none">
                Legacy
              </a>
            </Link>
            <Link href="/career">
              <a className="py-1 lg:py-[2px] px-3 xl:px-[20px] text-sm lg:text-xs xl:text-base font-medium rounded-[3px] transition-all duration-.3s hover:bg-purple-gradient border-1px border-purple lg:border-none">
                Careers
              </a>
            </Link>
          </div>

          <div className="flex items-center justify-between lg:justify-start space-x-5 xl:space-x-10">
            <Link href="https://discord.gg/theuthers">
              <a target="_blank" className="text-lg lg:text-base xl:text-xl">
                <FaDiscord />
              </a>
            </Link>
            <Link href="https://t.me/utherverseannouncements">
              <a target="_blank" className="text-lg lg:text-base xl:text-xl">
                <FaTelegramPlane />
              </a>
            </Link>
            <Link href="https://twitter.com/Utherverse">
              <a target="_blank" className="text-lg lg:text-base xl:text-xl">
                <FaTwitter />
              </a>
            </Link>
            <Link href="https://www.facebook.com/UtherverseDigital">
              <a
                target="_blank"
                className="text-base lg:text-sm xl:text-[1.1rem]"
              >
                <FaFacebookF />
              </a>
            </Link>
            <Link href="https://www.instagram.com/utherverse">
              <a target="_blank" className="text-lg lg:text-base xl:text-xl">
                <FaInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className={`black-screen ${isSidebarOpen ? "show" : ""}`}></div>
    </nav>
  );
}

export default Navbar;
