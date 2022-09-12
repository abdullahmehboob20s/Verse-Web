import Contact from "layouts/Contact";
import Footer from "layouts/Footer";
import Navbar from "layouts/Navbar";
import Head from "next/head";
import React from "react";

function Mission() {
  return (
    <div>
      <Head>
        <title>Utherverse</title>
      </Head>

      <Navbar />

      <div className="mb-16 sm:mb-100px lg:mb-200px">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default Mission;
