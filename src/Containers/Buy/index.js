import React from "react";
import Quote from "../../Components/Quote";
import MacGrid from "../../Components/MacGrid";
import iMacForSale from "../../Products/iMac";
import "./buy.scss";

const Buy = () => {
  return (
    <>
      <div className="content-container">
        <h2>iMac</h2>
        <MacGrid data={iMacForSale} />
        <Quote />
      </div>
    </>
  );
};

export default Buy;
