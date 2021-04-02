import React, { useState } from "react";
import "./scrollButton.scss";

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
          // position: showScroll ? "fixed" : "",
          right: showScroll ? 5 : "",
          bottom: showScroll ? 5 : "",
        }}
      >
        UP
      </button>
    </div>
  );
};

export default ScrollButton;
