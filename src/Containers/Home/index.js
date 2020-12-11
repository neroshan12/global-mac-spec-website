import React from "react";
import Carousel from "../../Components/Carousel";
import MacGrid from "../../Components/MacGrid";
import productsForSaleDeals from "../../Products/forSaleDeals.js";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home">
        <h3>Latest deals</h3>
        <MacGrid data={productsForSaleDeals.row1} />
        <MacGrid data={productsForSaleDeals.row2} />
        <MacGrid data={productsForSaleDeals.row3} />
      </div>
    </div>
  );
};

export default Home;
