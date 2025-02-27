import React, { useEffect, useState } from "react";
import darkmode from "../../assets/darkmode.png"; 
import lightmode from "../../assets/lightmode.png";  


const Darkmode = ({theme,settheme}) => {


  const ele = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      ele.classList.add("dark");
    } else {
      ele.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="sm:pr-3">
      <div
        className="relative "
        onClick={() => {
          settheme((prev) => (prev == "dark" ? "light" : "dark"));
        }}
      >
        <div
          className={`dark absolute transition duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        >
         <img src={lightmode} className="w-20 cursor-pointer transition duration-300" alt="" />
        </div>
        <div
          className={`light transition duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
        >
          <img src={darkmode} className="w-20 cursor-pointer transition duration-300 " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Darkmode;
