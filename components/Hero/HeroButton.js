import Link from "next/link";
import React from "react";

function HeroButton({ target, link = "/", className, children }) {
  return (
    <Link href={link}>
      <a
        target={target}
        className={`${className} py-2 xl:py-10px leading-[1] px-3 xl:px-4 transition-all duration-.3s uppercase border-1px border-purple rounded-[7px] text-[10px] xl:text-sm font-medium text-white w-fit`}
      >
        {children}
      </a>
    </Link>
  );
}

export default HeroButton;
