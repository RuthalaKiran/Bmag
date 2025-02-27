import React, { useEffect, useState } from "react";
import bulletgif from "../../assets/bulletgif.gif";
import scrooldownimg from "../../assets/scrooldownimg.png";

const ConstructionpageHero = ({ theme }) => {
  const caseStudies = [
    "Nike's 'Just Do It' was inspired by a death row inmate’s last words.",
    "Coca-Cola made Santa’s suit red for marketing—before that, he wore green!",
    "Tesla spends $0 on ads but gets millions in free marketing from social media.",
    "McDonald’s logo is yellow because it makes people feel hungry!",
    "The first-ever online ad had a 44% click rate—now, most struggle to hit 1%.",
    "Spotify once made fun of users' playlists in hilarious billboards.",
    "People remember emotions in ads more than the product itself.",
    "Red and yellow make you hungry—that’s why fast food chains use them!",
    "The world's most expensive ad cost $33 million—by Chanel.",
    "Super Bowl ads cost $7 million for just 30 seconds of airtime!",
  ];

  const [randomFact, setRandomFact] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * caseStudies.length);
    setRandomFact(caseStudies[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col gap-5 w-full items-center mt-16 sm:mt-10 ">
      <div className="top w-full xl:w-[clamp(100%,50vw,100%)] flex flex-col items-start px-3 md:px-2">
        <div className="up  flex  w-full items-center justify-between gap-[30px] ">
          <div className="flex flex-col relative">
            <p className="md:text-[16px] text-[11px] absolute -top-[2px] sm:top-1 lg:top-3 lg:left-1 xl:top-6 dark:text-white text-black">
              When this site will be done?
            </p>
            <p className="xl:text-[clamp(6.6rem,8.6vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(2rem,9.1vw,7rem)] font-[900] dark:text-white text-[#A2122C]">
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
          <p className="xl:text-[clamp(6.6rem,8.4vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(2rem,9.7vw,15rem)] font-[900] relative xl:bottom-10 lg:bottom-8 sm:bottom-5 bottom-2 dark:text-white text-[#A2122C]">
            POLITICS <span className="dark:text-[#A2122C]">RELIGION</span>{" "}
          </p>
        </div>
        <div className="down w-full flex items-start justify-between ">
          <div className="relative lg:bottom-20 md:bottom-[50px] sm:bottom-[40px] bottom-[15px]  flex items-end gap-1 ">
            <p className="xl:text-[clamp(6.6rem,8.4vw,15rem)] lg:text-[clamp(5rem,8vw,10rem)] md:text-[clamp(4rem,9.1vw,12rem)] sm:text-[clamp(4rem,10vw,10rem)] text-[clamp(2.1rem,9.1vw,7rem)] font-[900] dark:text-white text-[#A2122C]">
              AND <span className="dark:text-[#A2122C]">SEX</span>
            </p>
            <p className="relative md:text-[16px] text-[11px] xl:-top-9 lg:-top-7 md:-top-5 sm:-top-5 xs:-top-[15px] -top-[10px] dark:text-white text-black">
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

      <div className=" sm:z-0 bottom w-[91%] pt-20 sm:pt-10 md:pt-0 relative ">
        <p className="pl-3 pb-1 text-[15px] xs:text-[18px] text-[#F3D226] font-[900]">
          Did you know?
        </p>
        <div className="dark:bg-[#FFFFFF] bg-[#A2122C] rounded-[20px]   py-2 px-5 flex  justify-center">
          <p className="dark:text-[#A2122C] z-10 sm:w-[80%] md:w-[90%] text-white font-[800] flex justify-center text-[clamp(0.9rem,3vw,3rem)] sm:text-[20px]">
            {randomFact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConstructionpageHero;
