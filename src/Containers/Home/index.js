import React from "react";
import Carousel from "../../Components/Carousel";
import MacGrid from "../../Components/MacGrid";
import "./home.scss";

const Home = () => {
  return (
    <div>
      <Carousel />
      <div className="home">
        <h3>Latest deals</h3>
        <MacGrid />
      </div>
    </div>
  );
};

export default Home;
