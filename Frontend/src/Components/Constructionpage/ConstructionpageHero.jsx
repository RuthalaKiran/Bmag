import React, { useEffect, useState } from "react";
import bulletgif from "../../assets/bulletgif.gif";
import scrooldownimg from "../../assets/scrooldownimg.png";
import Didyouknow from "./Didyouknow";

const ConstructionpageHero = ({ theme }) => {


  return (
    <div className="flex flex-col gap-5 w-full items-center mt-16 sm:mt-10 ">
      <div className="top w-full xl:w-[clamp(100%,50vw,100%)] flex flex-col items-start px-3 md:px-2">
        <div className="up  flex  w-full items-center justify-between gap-[30px] ">
          <div className="flex flex-col relative">
            <p className="md:text-[16px] text-[clamp(10px,2vw,12px)] absolute -top-[4px] xs:-top-[2px] sm:top-1 lg:top-3 lg:left-1 xl:top-6 dark:text-white text-black">
              When this site will be done?
            </p>
            <p className="xl:text-[clamp(6.6rem,8.6vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(1.5rem,9vw,7rem)] font-[900] dark:text-white text-[#A2122C]">
              IT’S LIKE
            </p>
          </div>
          <div className=" sm:pr-4">
            <img
              src={bulletgif}
              className=" xl:h-36 xl:w-96 lg:h-32 lg:w-80 md:h-24 md:w-64 sm:h-24 sm:w-64 h-16 w-40   object-cover rounded-[90px]"
              alt=""
            />
          </div>
        </div>
        <div className="middle  w-full ">
          <p className="xl:text-[clamp(6.6rem,8.4vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(2rem,9.5vw,15rem)] font-[900] relative xl:bottom-10 lg:bottom-8 sm:bottom-5 bottom-2 dark:text-white text-[#A2122C]">
            POLITICS <span className="dark:text-[#A2122C]">RELIGION</span>{" "}
          </p>
        </div>
        <div className="down w-full flex items-start justify-between ">
          <div className="relative lg:bottom-20 md:bottom-[50px] sm:bottom-[40px] bottom-[15px]  flex items-end gap-1 ">
            <p className="xl:text-[clamp(6.6rem,8.4vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(1.9rem,8.5vw,7rem)] font-[900] dark:text-white text-[#A2122C]">
              AND <span className="dark:text-[#A2122C]">SEX</span>
            </p>
            <p className="relative md:text-[16px] text-[10px] xl:-top-9 lg:-top-7 md:-top-5 sm:-top-5 xs:-top-[15px] -top-[10px] dark:text-white text-black">
              Why talk about it.
            </p>
          </div>
          <div className="flex w-[80px] h-[80px]  xs:w-[90px] sx:h-[90px] sm:w-[95px] sm:h-[95px]  md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] mr-5 xs:mr-10 sm:mr-20 pb-10 rounded-full items-center justify-center">
            <img
              src={scrooldownimg}
              className="animate-[spin_10s_linear_infinite] object-cover rounded-full"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-[95%] md:w-full">
        <Didyouknow/>
      </div>
    </div>
  );
};

export default ConstructionpageHero;
