import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { PiPrinterBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaCheck } from "react-icons/fa6";
import { api } from "../../../APIconfig/Apiconfig";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    console.log("clicked");
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post(`${api}/email/subscribe`, { email });
      console.log(response);

      // On success, show "We will reach you soon" and disable input
      setIsSubscribed(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 px-2 xs:px-4 rounded-t-[20px] dark:bg-[#383535] bg-[#D9D9D9] sm:rounded-[20px] py-10 md:px-5 lg:px-10 md:flex md:flex-col  md:gap-6">
      {/* above 768px */}
      <div className="top hidden  md:flex items-centers justify-between md:gap-5 lg:gap-0">
        <div className="left-part  flex flex-col  items-start justify-center gap-4">
          <form onSubmit={handleSubscribe} className=" input-email flex gap-5">
            {isSubscribed ? (
              <div className="flex md:gap-3 lg:gap-5 items-center ">
                <div className="dark:text-white flex items-center justify-center gap-2">
                  <FaCheck />
                  <p className="md:text-[15px] lg:text-[18px]"> we will reach you under 24 hrs.</p>
                </div>
                <button
                  type="button"
                  className="bg-gray-400 lg:text-[19px] py-2 px-2 rounded-[5px] text-white cursor-not-allowed"
                  disabled
                >
                  Subscribed
                </button>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-[18px] w-[195px] lg:w-[280px] rounded-s-[20px] p-1 outline-none pl-5 border-[3px] border-[#A2122C]"
                  placeholder="example@email.com"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className={`px-2 text-[19px] rounded-[5px] text-white ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#A2122C]"
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </>
            )}
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
              Baani City Centre, Sector 63, Gurugram, Haryana 122102
              </p>
            </div>
            <div className="contact flex md:gap-[26px] lg:gap-[150px]">
              <div className="phone flex items-center justify-center gap-2">
                <FaPhoneAlt className="dark:text-white" />
                <p className="dark:text-gray-200 text-[14px]">+91 8800305644</p>
              </div>
              <div className="landline flex items-center justify-center gap-2">
                <PiPrinterBold className="dark:text-white" />
                <p className="dark:text-gray-200 text-[14px]">
                  {" "}
                  +91 8958956656
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
      <div className="top md:hidden  flex gap-3 sm:gap-5 items-center justify-between">
        <div className="social-icons flex gap-5 items-center justify-center">
          <FaWhatsapp className="sm:text-3xl text-2xl dark:text-white" />
          <FaInstagram className="sm:text-3xl text-2xl dark:text-white" />
        </div>
        <form onSubmit={handleSubscribe} className="email-input flex gap-5">
          {isSubscribed ? (
            <div className="flex xs:gap-2 gap-[6px] sm:gap-5 items-center">
              <div className="dark:text-white flex items-center justify-center gap-2">
                <FaCheck />
                <p className="xs:text-[16px] text-[12px]"> we will reach you under 24 hrs.</p>
              </div>
              <button
                type="button"
                className="bg-gray-400 xs:text-[19px] px-[10px] py-2 xs:py-2 xs:px-2 rounded-[5px] text-white cursor-not-allowed"
                disabled
              >
                Subscribed
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center xs:gap-5 gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-[18px] w-full rounded-s-[20px] xs:w-full p-1 outline-none pl-5 border-[3px] border-[#A2122C]"
                placeholder="example@email.com"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`text-[clamp(14px,3vw,14px)] font-[600] sm:font-[400] xs:text-[18px] sm:text-[18px] px-2 py-2 rounded-[5px] text-white ${
                  isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-[#A2122C]"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          )}
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
          Baani City Centre, Sector 63, Gurugram, Haryana 122102
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <PiPrinterBold className="dark:text-white" />
          <p className="dark:text-gray-200 text-[clamp(10px,3.2vw,14px)] sm:text-[14px]">
            +91 8800305644
          </p>
        </div>
        <div className="flex items-center justify-end gap-2">
          <FaPhoneAlt className="dark:text-white" />
          <p className="dark:text-gray-200 text-[clamp(10px,3.2vw,14px)] sm:text-[14px]">
            +91 8958956656
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
