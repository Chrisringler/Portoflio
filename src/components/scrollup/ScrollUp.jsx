import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  const handleScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };

  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector('.scrollup');
    if (this.scrollY >= 560) {
      scrollup.classList.add("show-scroll");
    } else {
      scrollup.classList.remove("show-scroll");
    }
  });

  return (
    <button className="scrollup" onClick={handleScrollUp}>
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </button>
  );
};

export default ScrollUp;

