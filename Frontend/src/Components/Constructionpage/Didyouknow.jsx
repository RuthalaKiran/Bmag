import React, { useEffect, useState } from "react";
import { IoMdRefresh } from "react-icons/io";

const Didyouknow = () => {
  const caseStudies = [
    {
      teaser: "👟 Nike’s Slogan Has a Dark Past…",
      fullText:
        "Nike's 'Just Do It' was inspired by a death row inmate’s last words.",
    },
    {
      teaser: "🎅 Coca-Cola Changed Christmas Forever!",
      fullText:
        "Coca-Cola made Santa’s suit red for marketing—before that, he wore green!",
    },
    {
      teaser: "🚗 Tesla’s Marketing Secret…",
      fullText:
        "Tesla spends $0 on ads but gets millions in free marketing from social media.",
    },
    {
      teaser: "🍟 Why is McDonald’s Logo Yellow?",
      fullText:
        "McDonald’s logo is yellow because it makes people feel hungry!",
    },
    {
      teaser: "🖥️ The First Online Ad Was a Hit!",
      fullText:
        "The first-ever online ad had a 44% click rate—now, most struggle to hit 1%.",
    },
    {
      teaser: "🎶 Spotify Loves Roasting Its Users!",
      fullText:
        "Spotify once made fun of users' playlists in hilarious billboards.",
    },
    {
      teaser: "❤️ People Remember Feelings, Not Products!",
      fullText: "People remember emotions in ads more than the product itself.",
    },
    {
      teaser: "🍔 Ever Wonder Why Fast Food Uses Red & Yellow?",
      fullText:
        "Red and yellow make you hungry—that’s why fast food chains use them!",
    },
    {
      teaser: "💎 Chanel Dropped $33 Million on ONE Ad!",
      fullText: "The world's most expensive ad cost $33 million—by Chanel.",
    },
    {
      teaser: "🏈 Super Bowl Ads Are Crazy Expensive!",
      fullText:
        "Super Bowl ads cost $7 million for just 30 seconds of airtime!",
    },
  ];

  const [randomFact, setRandomFact] = useState(null);
  const [showFullText, setShowFullText] = useState(false);

  const pickRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * caseStudies.length);
    setRandomFact(caseStudies[randomIndex]);
    setShowFullText(false);

    // Show full text after 3 seconds
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 3000);

    return () => clearTimeout(timer);
  };

  useEffect(() => {
    pickRandomFact();
  }, []);

  const refreshFact = () => {
    pickRandomFact();
  };

  if (!randomFact) return null;
  return (
    <div className=" sm:z-0 bottom w-full pt-20 sm:pt-10 md:pt-0 relative ">
      <p className="pl-3 pb-1 text-[15px] xs:text-[18px] text-[#F3D226] font-[900]">
        Did you know?
      </p>
      <div className=" w-full flex items-center justify-center gap-5">
        <div className="dark:bg-[#FFFFFF] w-[90%] bg-[#A2122C] rounded-[20px]   py-2 px-5 flex  justify-center">
          <p className="dark:text-[#A2122C] z-10 sm:w-[80%] md:w-[90%] text-white font-[800] flex justify-center text-[clamp(0.9rem,3vw,3rem)] sm:text-[20px]">
            {showFullText ? randomFact.fullText : randomFact.teaser}
          </p>
        </div>
        <div className="flex items-center justify-center  w-[10%] ">
          <button
            onClick={refreshFact}
            className=" bg-[#F3D226] text-white  rounded-full p-2 "
          >
            <IoMdRefresh className="text-black text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Didyouknow;
