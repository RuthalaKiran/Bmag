import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { PiPrinterBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from "../../../APIconfig/Apiconfig";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/email/subscribe`, { email });
      console.log(response);
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-5 px-5 rounded-t-[20px] dark:bg-[#383535] bg-[#D9D9D9] sm:rounded-[20px] py-10 md:px-5 lg:px-10 md:flex md:flex-col  md:gap-6">
      {/* above 768px */}
      <div className="top hidden  md:flex items-centers justify-between md:gap-10 lg:gap-0">
        <div className="left-part  flex flex-col  items-start justify-center gap-4">
          <form onSubmit={handleSubscribe} className="input-email flex gap-5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-s-[20px] p-1 outline-none pl-5 border-[3px] border-[#A2122C]"
              placeholder="example@email.com"
            />
            <button
              type="submit"
              className="bg-[#A2122C] px-2  rounded-[5px] text-white"
            >
              Subscribe
            </button>
          </form>
          <div className="social-icons z-20 flex gap-5 ">
            <Link>
              <FaWhatsapp className="text-3xl dark:text-white" />
            </Link>
            <Link
              to={"https://www.instagram.com/bmag.advertising"}
              target="_blank"
            >
              <FaInstagram className="text-3xl dark:text-white" />
            </Link>
          </div>
        </div>
        <div className="right-part  flex flex-col items-start gap-2">
          <p className="copyrights dark:text-gray-200 text-[14px]">
            Copyright © 2018 • Lift Media Inc.
          </p>
          <div className="flex flex-col gap-2">
            <div className="address flex items-center gap-2">
              <CiLocationOn className="dark:text-white md:text-2xl" />
              <p className="dark:text-gray-200 text-[14px]">
                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
              </p>
            </div>
            <div className="contact flex md:gap-[26px] lg:gap-[150px]">
              <div className="phone flex items-center justify-center gap-2">
                <FaPhoneAlt className="dark:text-white" />
                <p className="dark:text-gray-200 text-[14px]">(123) 456-7890</p>
              </div>
              <div className="landline flex items-center justify-center gap-2">
                <PiPrinterBold className="dark:text-white" />
                <p className="dark:text-gray-200 text-[14px]">
                  {" "}
                  (123) 456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom hidden md:flex flex-col items-start justify-center">
        <span className="dark:text-white text-[14px]">LET`S WORK ON...</span>
        <p className="dark:text-[#635C5C] text-[#EAEAEA] md:text-[clamp(5.6rem,11.9vw,10rem)] lg:text-[clamp(7rem,12vw,10rem)] xl:text-[clamp(160px,12.6vw,18vw)] font-[800] leading-[120px] p-0 m-0 inline-block">
          THE BIG IDEA
        </p>
      </div>

      {/* below 768px */}
      <div className="top md:hidden flex gap-2 sm:gap-5 items-center justify-between">
        <div className="social-icons flex gap-5 items-center justify-center">
          <FaWhatsapp className="sm:text-3xl text-2xl dark:text-white" />
          <FaInstagram className="sm:text-3xl text-2xl dark:text-white" />
        </div>
        <form onSubmit={handleSubscribe} className="email-input flex gap-5">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-s-[20px] w-full p-1 outline-none pl-5 border-[3px] border-[#A2122C]"
            placeholder="example@email.com"
          />
          <button
            className="bg-[#A2122C] text-[clamp(11px,3vw,14px)] font-[600] sm:font-[500] sm:text-[14px] px-2 py-2 rounded-[5px] text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="middle md:hidden">
        <span className="text-[12px] sm:text-[14px] dark:text-white">
          LET`S WORK ON...
        </span>
        <p className="dark:text-[#635C5C] text-[#EAEAEA] font-[800] text-[clamp(2.7rem,12.5vw,7rem)] sm:text-[clamp(4.5rem,11.2vw,10rem)] sm:leading-[60px] leading-[55px]">
          THE BIG IDEA
        </p>
      </div>
      <div className="botom md:hidden flex flex-col gap-2">
        <div className="flex items-center justify-end gap-2">
          <CiLocationOn className="dark:text-white text-2xl" />
          <p className="dark:text-gray-200 text-[clamp(10px,3.2vw,14px)] sm:text-[14px]">
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <PiPrinterBold className="dark:text-white" />
          <p className="dark:text-gray-200 text-[clamp(10px,3.2vw,14px)] sm:text-[14px]">
            (123) 456-7890
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <FaPhoneAlt className="dark:text-white" />
          <p className="dark:text-gray-200 text-[clamp(10px,3.2vw,14px)] sm:text-[14px]">
            (123) 456-7890
          </p>
        </div>
      </div>
      <div className="copyrights md:hidden flex items-center justify-end pt-5">
        <p className="dark:text-gray-200">Copyright © 2018 • Lift Media Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
