import React, { useState } from "react";
//import Carousel from "../../Components/Carousel";
import MacGrid from "../../Components/MacGrid";
import Footer from "../../Components/Footer";
import productsForSaleDeals from "../../Products/forSaleDeals.js";

import "./home.scss";

const Home = () => {
  return (
    <>
      {/* <Carousel /> */}
      <div className="home">
        <div className="test-home">
          <img
            src={process.env.PUBLIC_URL + "static/global-macspec-logo.png"}
            width="200"
            height="200"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <p className="test-blurb">
            We stock just about every Apple Mac conceivable! Our range is
            extensive, to say the least. If you require the highest spec Mac
            Pro, whilst we fix your mac, we have a mac that will suit your
            needs. No hire is too big or too small, should you wish to hire 40
            Apple Macs or One Apple Mac, our vast range allows us to cater for
            everyone.
          </p>
        </div>
        <h3 className="custom-headings">Latest offers</h3>
        <MacGrid data={productsForSaleDeals.row1} dealsGrid={true} />
        <MacGrid data={productsForSaleDeals.row2} dealsGrid={true} />
        <MacGrid data={productsForSaleDeals.row3} dealsGrid={true} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
