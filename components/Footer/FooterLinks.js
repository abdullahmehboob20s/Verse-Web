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
    <div className="footer-links">
      <div>
        <h4 className="footer-links-title">Vision</h4>
        <div className="space-y-2">
          <Link href="/mission">
            <a className="footer-link">Mission</a>
          </Link>
          <Link href="/vision">
            <a className="footer-link">Vision</a>
          </Link>
          <Link href="/legacy">
            <a className="footer-link">Our legacy</a>
          </Link>
          <Link href="/web3d">
            <a className="footer-link">Web 3.D</a>
          </Link>
          <Link href="/vww">
            <a className="footer-link">VWW</a>
          </Link>
          <Link href="/build">
            <a className="footer-link">Build A Metaverse</a>
          </Link>
          <Link href="/interconnectivity">
            <a className="footer-link">Interconnectivity</a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="footer-links-title">Links</h4>
        <div className="space-y-2">
          <Link href="/aeon">
            <a className="footer-link">Aeon</a>
          </Link>
          <Link href="/mmor">
            <a className="footer-link">MMOR</a>
          </Link>
          <Link href="/unity">
            <a className="footer-link">Unity</a>
          </Link>
          <Link href="/responsibility">
            <a className="footer-link">Responsibility</a>
          </Link>
          <Link href="/operations">
            <a className="footer-link">Operations</a>
          </Link>
          <Link href="/career">
            <a className="footer-link">Careers</a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="footer-links-title">Economy</h4>
        <div className="space-y-2">
          <Link href="/tokenomics">
            <a className="footer-link">Tokenomics</a>
          </Link>
          <Link href="/fnft">
            <a className="footer-link">fNFT</a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="footer-links-title">Other</h4>
        <div className="space-y-2">
          <Link href="/press">
            <a className="footer-link">Press</a>
          </Link>
          <Link href="/">
            <a className="footer-link">Privacy Policy</a>
          </Link>
          <Link href="/">
            <a className="footer-link">Disclaimer</a>
          </Link>
        </div>
      </div>
      <div>
        <h4 className="footer-links-title">Contact Us</h4>
        <div className="space-y-2 mb-6">
          <Link href="/">
            <a className="footer-link">Contact</a>
          </Link>
          <p className="text-xs xl:text-lg text-white font-medium w-fit block">
            Follow us
          </p>
        </div>
        <div className="flex items-center space-x-2 xl:space-x-4">
          <Link href="https://discord.gg/theuthers">
            <a target="_blank" className="text-base xl:text-2xl flex group">
              <FaDiscord className="footer-social-icon" />
            </a>
          </Link>
          <Link href="https://t.me/utherverseannouncements">
            <a target="_blank" className="text-base xl:text-2xl flex group">
              <FaTelegramPlane className="footer-social-icon" />
            </a>
          </Link>
          <Link href="https://twitter.com/Utherverse">
            <a target="_blank" className="text-sm xl:text-xl flex group">
              <FaTwitter className="footer-social-icon" />
            </a>
          </Link>
          <Link href="https://www.facebook.com/UtherverseDigital">
            <a target="_blank" className="text-sm xl:text-xl flex group">
              <FaFacebookF className="footer-social-icon" />
            </a>
          </Link>
          <Link href="https://www.instagram.com/utherverse">
            <a target="_blank" className="text-sm xl:text-xl flex group">
              <FaInstagram className="footer-social-icon" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
