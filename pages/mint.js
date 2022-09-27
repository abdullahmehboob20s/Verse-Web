import Counter from "components/Mint/Counter";
import Slider from "components/Mint/Slider";
import TotalCost from "components/Mint/TotalCost";
import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import React from "react";

function Mint() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <div className="mb-12 lg:mb-100px">
        <TitleWithBar
          title="MINT THE UTHERS fNFT"
          subtitle="UTHERVERSE GENESIS 1 fNFTs"
        />
      </div>

      <div className="mb-20 lg:mb-150px">
        <div className="container-2 grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-20">
          <div className="flex flex-col justify-center text-center">
            <div className="mb-4 bg-purple-gradient-2 text-center fs-16px w-fit font-medium mx-auto rounded-md px-4">
              THE UTHERS fNFT
            </div>
            <Slider />
          </div>
          <div className="text-center lg:text-left">
            <h1
              className="fs-40px text-white font-bold mb-3"
              style={{ lineHeight: 1.2 }}
            >
              The <span className="text-purple">UTHERS</span> by Utherverse
            </h1>
            <p className="fs-16px font-semibold text-white mb-4">
              Minting has closed.
            </p>

            <div className="bg-purple rounded-lg py-5 px-6 mb-8">
              <p className="fs-20px text-white font-medium mb-4">
                Mint 1 UTHERS fNFT for
              </p>

              <div className="flex items-center justify-center lg:justify-start fs-20px">
                <div className="mr-8 flex items-center">
                  <img
                    className="w-[.8em] mr-4"
                    src="images/ether.svg"
                    alt=""
                  />
                  <span className="fs-inherit text-white font-medium">-</span>
                </div>
                <div>
                  <span className="fs-inherit text-white font-medium">ETH</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="fs-20px font-medium mb-2">How many?</h4>
                <Counter />
              </div>
              <div>
                <h4 className="fs-20px font-medium mb-2">Total Cost</h4>
                <TotalCost />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="fs-16px mb-2 font-medium block w-fit cursor-pointer mx-auto lg:mx-0"
                htmlFor="purchase_type"
              >
                Choose Gender
              </label>
              <select
                className="text-white text-center lg:text-left border-0 fs-16px mb-3 font-medium block w-full rounded-md px-4 py-2 custom-select"
                id="purchase_type"
              >
                <option value="male" selected="">
                  Male
                </option>
                <option value="female">Female</option>
              </select>
            </div>

            <p className="fs-16px font-medium">Minting has closed.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Mint;
