import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div
        name="header"
        className="header-back-Services relative text-main-color"
      >
        <div className="container">
          <div>
            <div className="absolute top-1/2 -translate-y-1/2 sm:top-1/2 px-12">
              <h5 className="relative mb-2 text-xl w-fit left-12 before:absolute before:top-1/2 before:right-[103%] before:-translate-y-1/2 before:w-[60%] before:bg-second-color before:h-[2px]">
                Services
              </h5>
              <h1 className="text-5xl sm:text-6xl">Check Our Services</h1>
            </div>
          </div>
        </div>
        <div className="scroll-downs">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
