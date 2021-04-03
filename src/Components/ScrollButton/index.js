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
      {/* <button
        className="scrollTop"
        onClick={scrollTop}
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
          right: showScroll ? "2rem" : "",
          bottom: showScroll ? "1rem" : "",
        }}
      >
        <img
          height="10"
          width="10"
          src={process.env.PUBLIC_URL + "static/up-arrow.png"}
        />
      </button> */}

      <input
        style={{
          height: 40,
          display: showScroll ? "flex" : "none",
          right: showScroll ? "2rem" : "",
          bottom: showScroll ? "1rem" : "",
          backgroundColor: showScroll ? "#bfd7ea" : "",
          borderRadius: showScroll ? "2rem" : "",
        }}
        type="image"
        onClick={scrollTop}
        src={process.env.PUBLIC_URL + "static/up-arrow.png"}
        name="scrollTop"
        class="scrollTop"
        id="scrollTop"
      />
    </div>
  );
};

export default ScrollButton;
