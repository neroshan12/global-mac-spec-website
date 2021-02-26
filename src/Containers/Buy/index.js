import React from "react";
import Quote from "../../Components/Quote";
import MacGrid from "../../Components/MacGrid";
import forSale from "../../Products/forSale";
import "./buy.scss";

const Buy = () => {
  return (
    <>
      <div className="content-container">
        <MacGrid data={forSale} />
        <Quote />
      </div>
    </>
  );
};

export default Buy;
