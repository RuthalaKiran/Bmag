import React from "react";
import bmagwhitelogo from "../../assets/BmagWhiteLogo.png";
import bmagBlacklogo from "../../assets/BmagBlackLogo.png";
import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";

const Navbar = ({ theme, settheme }) => {
  return (
    <div className="w-[100%]  pt-2  flex items-center justify-between">
      <Link to={"/"}>
        {theme === "light" ? (
          <img src={bmagBlacklogo} className="sm:w-44 sm:h-[44] w-36 pt-5 pl-[10px]" alt="bmag logo" />
        ) : (
          <img src={bmagwhitelogo} className="sm:w-44 sm:h-[44] w-36" alt="bmag logo" />
        )}
      </Link>
      <Darkmode theme={theme} settheme={settheme} />
    </div>
  );
};

export default Navbar;
