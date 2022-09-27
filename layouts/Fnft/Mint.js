import Button from "components/Button";
import { useRouter } from "next/router";
import React from "react";
import { FaDiscord } from "react-icons/fa";

function Mint() {
  const router = useRouter();

  return (
    <div>
      <div className="container-2">
        <h1 className="fs-56px neon text-center font-semibold mb-6">
          MINT DATES
        </h1>
        <p className="text-center fs-24px font-medium text-white mb-2">
          Pre-Mint Date is Friday, September 9, 2022.
        </p>
        <p className="text-center fs-24px font-medium text-white mb-8">
          Public Mint Date is Saturday, September 10, 2022.
        </p>

        <div className="space-y-4 max-w-[38rem] mx-auto">
          <Button
            onClick={() => router.push("/mint")}
            className="fs-20px text-white w-full"
            border="border-2 border-white"
          >
            <span>Mint has closed</span>
          </Button>
          <Button className="flex items-center justify-center w-full space-x-4 fs-18px font-medium text-white">
            <span>Join The Discord</span>
            <FaDiscord className="text-xl lg:text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Mint;
