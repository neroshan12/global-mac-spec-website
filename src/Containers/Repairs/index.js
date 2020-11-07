import React from "react";

const Repairs = () => {
  return (
    <div>
      <h1>Repairs</h1>

      <img src={process.env.PUBLIC_URL + "static/repairs/battery.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/drops.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/hard-drive.png"}></img>
      <img src={process.env.PUBLIC_URL + "static/repairs/screen.png"}></img>
    </div>
  );
};

export default Repairs;
