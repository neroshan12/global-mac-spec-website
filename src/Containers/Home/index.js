import React from "react";
import Carousel from "../../Components/Carousel";
import MacGrid from "../../Components/MacGrid";
import Footer from "../../Components/Footer";
import productsForSaleDeals from "../../Products/forSaleDeals.js";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div>
        <Carousel />
        <div className="home">
          <h3>Latest deals</h3>
          <MacGrid data={productsForSaleDeals.row1} dealsGrid={true} />
          <MacGrid data={productsForSaleDeals.row2} dealsGrid={true} />
          <MacGrid data={productsForSaleDeals.row3} dealsGrid={true} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
