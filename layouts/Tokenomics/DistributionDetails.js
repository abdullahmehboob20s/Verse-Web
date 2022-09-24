import React from "react";

const Row = ({
  title,
  subtitle,
  colOneClassName,
  colTwoClassName,
  fontSize = "text-xs sm:text-sm lg:text-base xl:text-lg",
}) => {
  return (
    <tr>
      <td
        className={`${fontSize} text-white font-black py-3 sm:py-4 px-4 sm:px-6 ${colOneClassName}`}
      >
        {title}
      </td>
      <td
        className={`${fontSize} text-white font-normal py-3 sm:py-4 px-4 sm:px-6 ${colTwoClassName}`}
      >
        {subtitle}
      </td>
    </tr>
  );
};

function DistributionDetails() {
  return (
    <div className="relative">
      <img
        src="images/blured-icon.png"
        className="absolute top-0 -z-50 w-full left-[-10%] opacity-80"
        alt=""
      />
      <div className="container-2">
        <h6 className="fs-28px text-purple font-semibold mb-6 md:mb-10 text-center">
          Distribution Details
        </h6>

        <div className="grid gap-16 items-center">
          <div>
            <div className="mb-12">
              <p className="text-center fs-30px font-light text-white mb-4">
                Total Token Supply
              </p>
              <h1 className="text-center fs-56px text-white font-black">
                3,000,000,000
              </h1>
            </div>
            {/* <div className="space-y-1">
          <p className="fs-18px text-white font-normal">
            <span className="font-black">UTHERVERSE TEAM</span> -
            450,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">MARKETING</span> - 360,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">FOUNDATION AND TREASURY</span> -
            360,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">NUSR RESERVE</span> - 300,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">
              FUNDING TREASURY (FUTURE RAISES)
            </span>{" "}
            - 240,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">FUNDING ROUNDS</span> -
            150,000,000
          </p>
          <div className="pl-5 space-y-1">
            <p className="fs-16px text-white font-normal">
              <span className="font-black">PRIVATE SALE ROUND A</span> -
              41,600,000
            </p>
            <p className="fs-16px text-white font-normal">
              <span className="font-black">PRIVATE SALE ROUND B </span> -
              33,333,000
            </p>
            <p className="fs-16px text-white font-normal">
              <span className="font-black">PRE-SALE ROUND A </span> -
              27,777,000
            </p>
            <p className="fs-16px text-white font-normal">
              <span className="font-black">PRE-SALE ROUND B</span> -
              25,000,000
            </p>
            <p className="fs-16px text-white font-normal">
              <span className="font-black">CROWD SALE ROUND</span> -
              22,727,000
            </p>
          </div>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">STRATEGIC PARTNERS</span> -
            150,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">ECOSYSTEM INCENTIVES</span> -
            300,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">STAKING </span> - 300,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">LIQUIDITY </span> - 60,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">ADVISORS/INFLUENCERS</span> -
            240,000,000
          </p>
          <p className="fs-18px text-white font-normal">
            <span className="font-black">INTELLECTUAL PROPERTY </span> -
            90,000,000
          </p>
        </div> */}

            <table className="w-full border-table max-w-[40rem] mx-auto">
              <Row title="UTHERVERSE TEAM" subtitle="450,000,000" />
              <Row title="MARKETING" subtitle="360,000,000" />
              <Row title="FOUNDATION AND TREASURY" subtitle="360,000,000" />
              <Row title="NUSR RESERVE" subtitle="300,000,000" />
              <Row
                title="FUNDING TREASURY (FUTURE RAISES)"
                subtitle="240,000,000"
              />
              <Row title="FUNDING ROUNDS" subtitle="150,000,000" />
              <Row
                title="PRIVATE SALE ROUND A"
                subtitle="41,600,000"
                colOneClassName="relative left-[6%]"
                fontSize="text-xs sm:text-sm lg:text-base"
              />
              <Row
                title="PRIVATE SALE ROUND B"
                subtitle="33,333,000"
                colOneClassName="relative left-[6%]"
                fontSize="text-xs sm:text-sm lg:text-base"
              />
              <Row
                title="PRE-SALE ROUND A"
                subtitle="27,777,000"
                colOneClassName="relative left-[6%]"
                fontSize="text-xs sm:text-sm lg:text-base"
              />
              <Row
                title="PRE-SALE ROUND B"
                subtitle="25,000,000"
                colOneClassName="relative left-[6%]"
                fontSize="text-xs sm:text-sm lg:text-base"
              />
              <Row
                title="CROWD SALE ROUND"
                subtitle="22,727,000"
                colOneClassName="relative left-[6%]"
                fontSize="text-xs sm:text-sm lg:text-base"
              />
              <Row title="STRATEGIC PARTNERS" subtitle="150,000,000" />
              <Row title="ECOSYSTEM INCENTIVES" subtitle="300,000,000" />
              <Row title="STAKING" subtitle="300,000,000" />
              <Row title="LIQUIDITY" subtitle="60,000,000" />
              <Row title="ADVISORS/INFLUENCERS" subtitle="240,000,000" />
              <Row title="INTELLECTUAL PROPERTY" subtitle="90,000,000" />
            </table>
          </div>
          <div>
            <img
              src="images/total-token-supply.png"
              className="w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistributionDetails;
