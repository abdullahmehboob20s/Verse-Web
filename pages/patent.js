import PatentCard from "components/PatentCard";
import Layout from "layouts/Layout";
import React from "react";

// SIR YOU CAN DEFINE YOUR CONTENT HERE OR YOU CAN PASS INDIVIDIVALYY (there too many, thatswhy i didn't do that)
const PopupContent = () => {
  return (
    <>
      <h1 className="fs-32px text-white mb-4 font-medium">
        2. Recording and Playing Back
      </h1>

      <p className="fs-16px font-semibold mb-4 text-white">
        Patent Numbers:{" "}
        <a
          rel="noreferrer"
          className="text-lightBlue hover:text-white"
          href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&amp;Sect2=HITOFF&amp;d=PALL&amp;p=1&amp;u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&amp;r=1&amp;f=G&amp;l=50&amp;s1=9,724,605.PN.&amp;OS=PN/9,724,605&amp;RS=PN/9,724,605"
          target="_blank"
        >
          9,724,605
        </a>{" "}
        entitled “Method, System and Apparatus of Recording and Playing Back an
        Experience in a Virtual Worlds System”
      </p>

      <p className="fs-16px font-semibold mb-4 text-white">
        <b>ABSTRACT:</b> A recorded experience in a virtual worlds system may be
        played back by one or more servers instantiating a new instance of a
        scene using one or more processors of the one or more servers and
        playing back the recorded experience in the new instance by modeling
        objects of a recorded initial scene state of the recorded experience in
        the new instance and updating the recorded initial scene state based on
        subsequent recorded changes over a time period, a recorded experience
        file includes the recorded initial scene state and the subsequent
        recorded changes and is stored in one or more memories of the one or
        more servers. One or more client devices are in communication with the
        one or more servers to participate in the new instance. (
        <a
          rel="noreferrer"
          href="https://patents.justia.com/patent/20210069591"
          target="_blank"
          className="text-lightBlue hover:text-white"
        >
          Justia Patents
        </a>
        )
      </p>
    </>
  );
};

function Patent() {
  return (
    <Layout navbarClassName="mb-20 lg:mb-16">
      <div className="mb-20 lg:mb-150px">
        <div className="container">
          <h1 className="text-center text-gradient-purple fs-56px mb-3 font-bold">
            Utherverse
            <span className="align-super text-[.6em] text-gradient-purple">
              ®
            </span>
          </h1>
          <p className="fs-16px text-white font-bold mb-3 text-center">
            The Shuster Meta Patent Family
          </p>

          <div className="mb-14">
            <p className="fs-28px font-semibold text-white text-center mb-4 lg:mb-8">
              Featured Patents
            </p>

            <div className="flex flex-wrap justify-center">
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/1.jpg"
                  index={1}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/2.jpg"
                  index={2}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/3.jpg"
                  index={3}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/4.jpg"
                  index={4}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/5.jpg"
                  index={5}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
              <div className="m-2">
                <PatentCard
                  img="images/patents/flist/6.jpg"
                  index={6}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
            </div>
          </div>
          {/* <div>
            <p className="fs-28px font-semibold text-white text-center mb-4 lg:mb-8">
              Patent List
            </p>

            <div>
              <div className="flex items-center justify-center flex-wrap mb-8">
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/1.jpg"
                    index={1}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/2.jpg"
                    index={2}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/3.jpg"
                    index={3}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/4.jpg"
                    index={4}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/5.jpg"
                    index={5}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="w-fit mx-2">
                  <PatentCard
                    img="images/patents/list/6.jpg"
                    index={6}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
              </div>
              <div className="flex flex-wrap justify-center mb-10 lg:mb-12">
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/7.jpg"
                    index={7}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/8.jpg"
                    index={8}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/9.jpg"
                    index={9}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/10.jpg"
                    index={10}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/11.jpg"
                    index={11}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/12.jpg"
                    index={12}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/13.jpg"
                    index={13}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mb-10 lg:mb-12">
                <div>
                  <div className="flex space-x-4 justify-center mb-6">
                    <PatentCard
                      img="images/patents/list/14.jpg"
                      index={14}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/15.jpg"
                      index={15}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/16.jpg"
                      index={16}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/17.jpg"
                      index={17}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                  </div>{" "}
                  <div className="flex space-x-4 justify-center">
                    <PatentCard
                      img="images/patents/list/18.jpg"
                      index={18}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/19.jpg"
                      index={19}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/20.jpg"
                      index={20}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/21.jpg"
                      index={21}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="images/safe-silver.png"
                    className="max-w-[24rem] lg:max-w-none w-full"
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex space-x-4 justify-center mb-6">
                    <PatentCard
                      img="images/patents/list/22.jpg"
                      index={22}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/23.jpg"
                      index={23}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/24.jpg"
                      index={24}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/25.jpg"
                      index={25}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                  </div>{" "}
                  <div className="flex space-x-4 justify-center">
                    <PatentCard
                      img="images/patents/list/26.jpg"
                      index={26}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/27.jpg"
                      index={27}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/28.jpg"
                      index={28}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                    <PatentCard
                      img="images/patents/list/29.jpg"
                      index={29}
                      tooltipContent="this is tooltip"
                    >
                      <PopupContent />
                    </PatentCard>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center mb-6">
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/30.jpg"
                    index={30}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/31.jpg"
                    index={31}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/32.jpg"
                    index={32}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/33.jpg"
                    index={33}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/34.jpg"
                    index={34}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/35.jpg"
                    index={35}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
                <div className="m-2">
                  <PatentCard
                    img="images/patents/list/36.jpg"
                    index={36}
                    tooltipContent="this is tooltip"
                  >
                    <PopupContent />
                  </PatentCard>
                </div>
              </div>
              <div className="flex space-x-4 justify-center mb-6">
                <PatentCard
                  img="images/patents/list/37.jpg"
                  index={37}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
                <PatentCard
                  img="images/patents/list/38.jpg"
                  index={38}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
                <PatentCard
                  img="images/patents/list/39.jpg"
                  index={39}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
                <PatentCard
                  img="images/patents/list/40.jpg"
                  index={40}
                  tooltipContent="this is tooltip"
                >
                  <PopupContent />
                </PatentCard>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="mb-14 lg:mb-100px">
        <div className="container-2 grid text-center lg:text-left lg:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-center">
          <div className="flex items-center justify-center">
            <img
              src="images/safe-silver.png"
              className="max-w-[12rem] md:max-w-[18rem] lg:max-w-none w-full lg:w-[90%]"
              alt=""
            />
          </div>
          <div>
            <div className="mb-6">
              <h4 className="fs-24px text-white font-semibold uppercase mb-4">
                PATENT SEARCH
              </h4>

              <p className="fs-16px font-light">
                Links to Patent Protection from USPTO:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple hover:text-white font-medium"
                  href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&amp;Sect2=HITOFF&amp;p=1&amp;u=/netahtml/PTO/search-bool.html&amp;r=0&amp;f=S&amp;l=50&amp;TERM1=shuster;+brian&amp;FIELD1=INNM&amp;co1=NOT&amp;TERM2=19970224&amp;FIELD2=APD&amp;d=PTXT"
                >
                  Brian Shuster
                </a>
                ,{" "}
                <a
                  className="text-purple hover:text-white font-medium"
                  rel="noreferrer"
                  target="_blank"
                  href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&amp;Sect2=HITOFF&amp;p=1&amp;u=/netahtml/PTO/search-bool.html&amp;r=0&amp;f=S&amp;l=50&amp;TERM1=shuster;+gary&amp;FIELD1=INNM&amp;co1=NOT&amp;TERM2=19970224&amp;FIELD2=APD&amp;d=PTXT"
                >
                  Gary Shuster
                </a>
              </p>
            </div>

            <div>
              <h4 className="fs-24px text-white font-semibold uppercase mb-4">
                ACTIVE PATENT PROTECTION
              </h4>

              <p className="mb-6 fs-16px text-white font-light">
                Technologies and Patents that we’ve developed are involved in
                litigation. Here is a link to current litigation with Epic
                Games®
              </p>

              <p className="mb-6 fs-16px text-white font-light">
                Summary Litigation with{" "}
                <a
                  href="https://unicourt.com/case/pc-db5-utherverse-gaming-llc-v-epic-games-inc-931118"
                  className="text-purple font-medium hover:text-white"
                >
                  EPIC GAMES
                </a>
                ,{" "}
                <a
                  href="https://insight.rpxcorp.com/litigation_documents/14276506"
                  className="text-purple font-medium hover:text-white"
                >
                  ENTIRE EPIC GAMES{" "}
                </a>{" "}
                Complaint.
              </p>

              <p className="mb-6 fs-16px text-white font-light">
                Here is a link to current litigation with ELECTRONIC ARTS LLC®.{" "}
                <a
                  href="https://www.scribd.com/document/428595634/STONE-INTERACTIVE-VENTURES-LLC-Vs-Electronic-Arts"
                  className="text-purple font-medium hover:text-white"
                >
                  Summary Litigation with ELECTRONIC ARTS®
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Patent;
