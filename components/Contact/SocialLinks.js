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
      <div className="w-fit rounded-xl rounded-bl-none rounded-br-none mx-auto text-2xl font-bold bg-darkPurple py-4 px-12 text-center">
        {"We're"} social
      </div>
      <div className="max-w-[420px] w-full mx-auto bg-purple p-4 px-9 rounded-full flex items-center justify-between relative">
        <Link href="/">
          <a target="_blank" className="text-4xl flex">
            <FaDiscord />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-4xl flex">
            <FaTelegramPlane />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-3xl flex">
            <FaTwitter />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-3xl flex">
            <FaFacebookF />
          </a>
        </Link>
        <Link href="/">
          <a target="_blank" className="text-3xl flex">
            <FaInstagram />
          </a>
        </Link>
      </div>
    </>
  );
}

export default SocialLinks;
