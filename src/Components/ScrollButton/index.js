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
          right: showScroll ? "2rem" : "",
          bottom: showScroll ? "1rem" : "",
        }}
      >
        UP
      </button>
    </div>
  );
};

export default ScrollButton;
