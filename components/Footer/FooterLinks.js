import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function FooterLinks() {
  return (
    <div className="grid grid-cols-[repeat(5,auto)] justify-between px-10 mb-20">
      <div>
        <h4 className="text-2xl text-white font-bold mb-4">Vision</h4>
        <div className="space-y-2">
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Mission
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Vision
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Our legacy
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Web 3.D
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              VWW
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Build A Metaverse
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Interconnectivity
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-white font-bold mb-4">Links</h4>
        <div className="space-y-2">
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Aeon
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              MMOR
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Unity
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Responsibility
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Operations
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Careers
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-white font-bold mb-4">Economy</h4>
        <div className="space-y-2">
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Tokenomics
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              fNFT
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-white font-bold mb-4">Other</h4>
        <div className="space-y-2">
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Press
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Privacy Policy
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Disclaimer
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl text-white font-bold mb-4">Contact Us</h4>
        <div className="space-y-2 mb-6">
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Contact
            </a>
          </Link>
          <Link href="/">
            <a className="text-lg text-white font-light w-fit block transition-all duration-[.2s] hover:text-purple-light">
              Follow us
            </a>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <a target="_blank" className="text-2xl flex group">
              <FaDiscord className="group-hover:fill-purple-light transition-all duration-[.2s]" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank" className="text-2xl flex group">
              <FaTelegramPlane className="group-hover:fill-purple-light transition-all duration-[.2s]" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank" className="text-xl flex group">
              <FaTwitter className="group-hover:fill-purple-light transition-all duration-[.2s]" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank" className="text-xl flex group">
              <FaFacebookF className="group-hover:fill-purple-light transition-all duration-[.2s]" />
            </a>
          </Link>
          <Link href="/">
            <a target="_blank" className="text-xl flex group">
              <FaInstagram className="group-hover:fill-purple-light transition-all duration-[.2s]" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
