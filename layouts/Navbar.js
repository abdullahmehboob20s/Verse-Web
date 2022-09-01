import Dropdown from "components/Dropdown";
import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const visionDropdownLinks = [
  { link: "/", title: "Mission" },
  { link: "/", title: "Vision" },
  { link: "/", title: "Web 3.D" },
  { link: "/", title: "VWW" },
  { link: "/", title: "Build A Metaverse" },
  { link: "/", title: "Interconnectivity" },
  { link: "/", title: "AEON" },
  { link: "/", title: "MMOR" },
  { link: "/", title: "Unity" },
  { link: "/", title: "Responsibility" },
  { link: "/", title: "Operations" },
];
const economicDropdownLinks = [
  { link: "/", title: "Economics" },
  { link: "/", title: "Tokenomics" },
  { link: "/", title: "Web 3.D" },
  { link: "/", title: "fNFt" },
];

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-[10] border-b-[1px] border-purple">
      <div className="container-2 py-[1.4rem] flex items-center relative space-x-6">
        <Link href="/">
          <a className="w-[9rem] 2xl:w-[10rem] flex items-center justify-center ml-[-8%] mb-[-5.5rem] bg-black">
            <img src="images/logo-primary.png" className="w-[80%]" alt="" />
          </a>
        </Link>
        <div className="flex items-center justify-between flex-1">
          <div className="flex items-center space-x-[5px]">
            <Dropdown title="Vision" links={visionDropdownLinks} />
            <Dropdown title="Economy" links={economicDropdownLinks} />

            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Press
              </a>
            </Link>
            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Patents
              </a>
            </Link>
            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Legacy
              </a>
            </Link>
            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Careers
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-10">
            <Link href="/">
              <a target="_blank" className="text-xl">
                <FaDiscord />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank" className="text-xl">
                <FaTelegramPlane />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank" className="text-xl">
                <FaTwitter />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank" className="text-[1.1rem]">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="/">
              <a target="_blank" className="text-xl">
                <FaInstagram />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
