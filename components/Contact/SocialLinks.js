import Link from "next/link";
import {
  FaDiscord,
  FaFacebookF,
  FaTelegramPlane,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <>
      <div className="w-fit rounded-xl rounded-bl-none rounded-br-none mx-auto text-base lg:text-xl xl:text-2xl font-bold bg-darkPurple py-3 xs:py-4 px-12 text-center">
        {"We're"} social
      </div>
      <div className="w-fit mx-auto bg-purple p-4 space-x-6 xs:space-x-8 xl:space-x-12 px-9 rounded-full flex items-center justify-between relative">
        <Link href="/">
          <a target="_blank" className="text-2xl lg:text-3xl xl:text-4xl flex">
            <FaDiscord />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-2xl lg:text-3xl xl:text-4xl flex">
            <FaTelegramPlane />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-xl lg:text-2xl xl:text-3xl flex">
            <FaTwitter />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-xl lg:text-2xl xl:text-3xl flex">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-xl lg:text-2xl xl:text-3xl flex">
            <FaInstagram />
          </a>
        </Link>
      </div>
    </>
  );
}

export default SocialLinks;
