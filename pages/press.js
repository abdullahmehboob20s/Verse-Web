import ArticalCard from "components/ArticalCard";
import TitleWithBar from "components/TitleWithBar";
import Layout from "layouts/Layout";
import Head from "next/head";
import React from "react";

function Press() {
  return (
    <Layout className="bg-page" navbarClassName="mb-20 lg:mb-16">
      <Head>
        <title>Utherverse - Press</title>
      </Head>

      <div className="mb-12 lg:mb-50px">
        <TitleWithBar
          title="PRESS"
          subtitle={
            <>
              <span className="font-medium">
                USHERING IN THE NEW AGE OF THE METAVERSE.
                <br />
                UTHERVERSE HAS BEEN A VOCAL PROPONENT FOR THE METAVERSE FOR
                DECADES.
              </span>
            </>
          }
        />
      </div>

      <div className="mb-20 lg:mb-100px">
        <div className="container-2 flex items-center flex-wrap justify-center">
          <img src="images/cnn.png" alt="" className="my-3 mx-6" />
          <img src="images/forbes.png" alt="" className="my-3 mx-6" />
          <img src="images/hypergrid.png" alt="" className="my-3 mx-6" />
          <img src="images/inc.png" alt="" className="my-3 mx-6" />
          <img src="images/financial.png" alt="" className="my-3 mx-6" />
          <img src="images/gamesindustry.png" alt="" className="my-3 mx-6" />
          <img src="images/newsweek.png" alt="" className="my-3 mx-6" />
          <img src="images/bizbash.png" alt="" className="my-3 mx-6" />
          <img src="images/campustechnology.png" alt="" className="my-3 mx-6" />
          <img src="images/cinemablend.png" alt="" className="my-3 mx-6" />
          <img src="images/wired.png" alt="" className="my-3 mx-6" />
          <img src="images/toronto.png" alt="" className="my-3 mx-6" />
          <img src="images/entrepeneur.png" alt="" className="my-3 mx-6" />
          <img src="images/vancouver.png" alt="" className="my-3 mx-6" />
          <img src="images/getting.png" alt="" className="my-3 mx-6" />
          <img src="images/hollywoodtimes.png" alt="" className="my-3 mx-6" />
          <img src="images/nzherland.png" alt="" className="my-3 mx-6" />
          <img src="images/G.png" alt="" className="my-3 mx-6" />
          <img src="images/venturebeat.png" alt="" className="my-3 mx-6" />
          <img src="images/new.png" alt="" className="my-3 mx-6" />
        </div>
      </div>

      <div className="mb-100px lg:mb-150px">
        <div className="container-2">
          <div className="max-w-[50rem] mx-auto space-y-6 md:space-y-10">
            <ArticalCard
              title="Crypto: Russia/Ukraine Conflict Poses New Ethical Questions"
              date="July 27, 2022"
              link="/"
            />
            <ArticalCard
              title="Crypto: Russia/Ukraine Conflict Poses New Ethical Questions"
              date="July 27, 2022"
              link="/"
            />
            <ArticalCard
              title="Crypto: Russia/Ukraine Conflict Poses New Ethical Questions"
              date="July 27, 2022"
              link="/"
            />
            <ArticalCard
              title="Crypto: Russia/Ukraine Conflict Poses New Ethical Questions"
              date="July 27, 2022"
              link="/"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Press;
