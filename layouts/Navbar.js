import Link from "next/link";
import React from "react";
import {
  FaDiscord,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

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
            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Vision
              </a>
            </Link>
            <Link href="/">
              <a className="py-[2px] px-[20px] font-medium rounded-[3px] transition-all duration-[.3s] hover:bg-purple-gradient">
                Economy
              </a>
            </Link>
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
