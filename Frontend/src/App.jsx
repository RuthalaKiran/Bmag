import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ConstructionpageHero from "./Components/Constructionpage/ConstructionpageHero";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
  const [theme, settheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  console.log(theme);
  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-black sm:pb-5  overflow-hidden min-h-[100vh] w-[100%] ">
        <div className=" lg:px-24 md:px-5 sm:px-0 mx-auto ">
          <div className="w-[100%]   pt-2 px-2 xl:px-0 flex items-center justify-between">
            <Navbar theme={theme} settheme={settheme} />
          </div>
          <section>
            <ConstructionpageHero theme={theme} />
          </section>
        </div>
        <section className="w-full h-auto sm:px-8 sm:mt-24 px-2 mt-32 mx-auto">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default App;
