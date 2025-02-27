import React, { useState } from "react";
import "./App.css";
import CountDownTimer from "./Components/CountDownTimer";
import Navbar from "./Components/Navbar/Navbar";
import Darkmode from "./Components/Navbar/Darkmode";
import ConstructionpageHero from "./Components/Constructionpage/ConstructionpageHero";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  console.log(theme);
  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-black sm:pb-5  overflow-hidden">
        <div className=" lg:px-28 md:px-10 sm:px-0">
          <div className="w-[100%]  pt-2 px-2 xl:px-0 flex items-center justify-between">
            <Navbar theme={theme} settheme={settheme} />
          </div>
          <section>
            <ConstructionpageHero theme={theme} />
          </section>
        </div>
        <section className="sm:px-14 sm:mt-24 px-2 mt-32">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
