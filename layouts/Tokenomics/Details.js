import React from "react";

function Details() {
  return (
    <div className="relative">
      <img
        src="images/blured-icon.png"
        className="absolute top-[-80%] -z-50 w-full left-[-10%] opacity-80"
        alt=""
      />

      <div className="container grid lg:grid-cols-2 gap-14 sm:pr-20 relative">
        <div>
          <h4 className="fs-34px text-white font-black mb-4">
            1:1 COIN SYSTEM
          </h4>
          <p className="fs-22px font-semibold text-purple mb-6">
            All the Features of Top Cryptocurrencies with the security of a
            Credit Card.
          </p>

          <div className="space-y-4">
            <p className="fs-16px text-white font-light">
              Just as the Utherverse metaverse combines the best of video games
              with the best of the internet, our economy is designed to provide
              stakeholders with the best of crypto and the best of finance. That
              means participants wil get all the features of the top
              cryptocurrencies, but those features will be paired with all the
              security and recovery options that would normally be offered by a
              credit card. Our unique system of crypto and system paired coins
              makes this possible.
            </p>
            <p className="fs-16px text-white font-light">
              The Utherverse Economy will operate using a 1:1 coin system
              pairing our UTHER staking token with the in-world transactional
              wUTHER. wUTHER IS not tied to any blockchain, and operates solely
              from our internal ledger.
            </p>
          </div>
        </div>
        <div>
          <h4 className="fs-34px text-white font-black mb-4">wUTHER</h4>
          <p className="fs-22px font-semibold text-purple mb-6">
            In-World Exchange Token (1:1 wUTHER:UTHER)
          </p>

          <div className="space-y-4">
            <p className="fs-16px text-white font-light">
              Utherverse is creating an in- {'"World UTHER token"'} that can
              transact without touching the blockchain because all such wUTHER
              transactions take place from registered members of our system in a
              system-system transfer.
            </p>
            <p className="fs-16px text-white font-light">
              {"It's"} only when the wUTHER needs to be moved to an externally
              usable wallet that would be converted to UTHER. wUTHER converts to
              UTHER at 1:1, but transfer out of the network to live wallet will
              incur a transaction fee that will go to the company reserve.
            </p>
          </div>
        </div>

        <img
          src="images/tokenomics-girl.png"
          className="static sm:absolute top-0 md:top-1/2 -z-20 md:-translate-y-1/2 right-[-22%] md:left-[94%] max-w-[10rem] w-full mx-auto sm:mx-0 sm:w-auto sm:max-w-none sm:h-[32rem] md:h-[34rem] lg:h-[36rem]"
          alt=""
        />
      </div>
    </div>
  );
}

export default Details;
