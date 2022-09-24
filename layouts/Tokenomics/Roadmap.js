import TokenomicsRoadmapCard from "components/TokenomicsRoadmapCard";
import React from "react";

function Roadmap() {
  return (
    <div className="container-2 grid md:grid-cols-2 gap-6 md:gap-0 relative">
      <div className="absolute w-[2px] bg-purple-gradient-2 h-full z-20 left-1/2 -translate-x-1/2 top-0 overflow-visible hidden md:block">
        <div className="absolute w-6 bottom-[100%] left-1/2 -translate-x-1/2">
          <img src="images/V-check-icon-blue.svg" className="w-full" alt="" />
        </div>

        <div className="absolute w-6 top-[100%] left-1/2 -translate-x-1/2">
          <img
            src="images/V-check-icon-blue.svg"
            className="w-full rotate-180"
            alt=""
          />
        </div>
      </div>

      <div className="space-y-6 md:space-y-16 flex flex-col justify-center relative">
        <TokenomicsRoadmapCard
          bg="bg-purple-gradient-2"
          title="Staking Rewards / Staking Multipliers"
          height="h-auto"
        >
          <p className="fs-16px text-white font-medium">
            Utherverse will verify our transactions and process payments using
            Proof of Stake. This allows users to earn rewards and multipliers on
            their holdings. Staking rewards, paid in UTHER, will be determined
            and modified based on the most current market conditions.
          </p>
        </TokenomicsRoadmapCard>
        <TokenomicsRoadmapCard
          bg="bg-purple-gradient-2"
          title="Halving Rewards"
          height="h-auto"
        >
          <p className="fs-16px text-white font-medium">
            New User Supply Reserve (Issued monthly for the first 250 million
            users after product launch. With first 25 million users releasing 5%
            of UTHER total supply, and halving after that and halving again with
            each new 25 million users, until 225 million have become members of
            the Utherverse, after which, when an additional 25 million users
            join the platform, it will trigger the distribution of all remaining
            UTHER from the NUSR).
          </p>
        </TokenomicsRoadmapCard>
        <TokenomicsRoadmapCard
          bg="bg-purple-gradient-2"
          title="Decentralized Cryptocurrency"
          height="h-auto"
        >
          <p className="fs-16px text-white font-medium">
            In contrast, the master token, UTHER Coin, is adecentralized
            cryptocurrency. It can be used to transactfully out of the virtual
            world platform using traditionalcrypto wallets and on a multitude of
            distributed ledgers.This gives stakeholders all the benefit and
            security of atrue cryptocurrency for off-platform purposes.
          </p>
        </TokenomicsRoadmapCard>
      </div>
      <div className="space-y-6 md:space-y-16 flex flex-col justify-center">
        <TokenomicsRoadmapCard
          reverse={true}
          bg="bg-purple-gradient-2"
          title="Redistribution"
          height="h-auto"
        >
          <p className="fs-16px text-white font-medium">
            Coins issued from NUSR are distributed into company reserve, and
            then redistributed by the company to all stakeholders according to
            then current apportionment plan which includes distributing UTHER
            Coins to: affiliates, users, Utherverse Sovereigns and to the
            company.
          </p>
        </TokenomicsRoadmapCard>
        <TokenomicsRoadmapCard
          reverse={true}
          bg="bg-purple-gradient-2"
          title="Frictionless Transactions"
          height="h-auto"
        >
          <p className="fs-16px text-white font-medium">
            Our 1:1 coin system enables us to offer safe, fast, and free
            (frictionless) transactions for virtual goods and fNFT™ from within
            our platform; and because users of wUTHER are transacting on our
            platform, we can provide direct adjudication and restitution in any
            cases of fraud and disputes.
          </p>
        </TokenomicsRoadmapCard>
      </div>
    </div>
  );
}

export default Roadmap;
