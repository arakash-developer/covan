import star3 from "@/public/3star.png";
import Cat1 from "@/public/cat1.jpg";
import Cat2 from "@/public/cat2.jpg";
import Cat3 from "@/public/cat3.jpg";
import CatLine from "@/public/catline.png";
import Blog2 from "@/public/image21.jpg";
import Blog1 from "@/public/image22.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import AppendDots from "./component/AppendDots";
import Container from "./component/Container";
import NewArrival from "./component/NewArrival";
import News from "./component/News";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const page = () => {
  return (
    <>
      {/* top */}
      <div className="py-2 border-b border-[#CCCCCC] border-opacity-40">
        <div className="max-w-[1800px] px-3 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <LuPhoneCall className="font-normal text-[15px] leading-[344%] text-[#909090]" />
                <p className="font-normal text-[15px] leading-[344%] text-[#909090]">
                  +84 100-2345-6799
                </p>
              </div>
              <div className="bg-[#CCCCCC] h-3 w-[1px]"></div>
              <div className="flex items-center gap-1">
                <MdOutlineEmail className="font-normal text-[15px] text-[#909090] leading-[344%]" />
                <p className="font-normal text-[15px] leading-[344%] text-[#909090]">
                  contact@covanshop.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaRegUser className="font-normal text-[14px] text-[#909090] leading-[344%]" />
                <p className="font-normal text-[15px] leading-[344%] text-right text-[#909090]">
                  My Account
                </p>
              </div>
              <div className="bg-[#CCCCCC] h-3 w-[1px]"></div>
              <div className="flex items-center gap-3">
                <RiTwitterXFill className="w-4 h-4 inline-block text-[#909090]" />
                <RiInstagramLine className="w-4 h-4 inline-block text-[#909090]" />
                <RiFacebookFill className="w-4 h-4 inline-block text-[#909090]" />
                <RiYoutubeFill className="w-4 h-4 inline-block text-[#909090]" />
              </div>
            </div>
          </div>
          {/* top */}
        </div>
      </div>
      {/* top */}

      {/* Navbar*/}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5 rounded-full me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 3900 3900"
              >
                <path fill="#b22234" d="M0 0h7410v3900H0z" />
                <path
                  d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                  stroke="#fff"
                  strokeWidth={300}
                />
                <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                <g fill="#fff">
                  <g id="d">
                    <g id="c">
                      <g id="e">
                        <g id="b">
                          <path
                            id="a"
                            d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                          />
                          <use xlinkHref="#a" y={420} />
                          <use xlinkHref="#a" y={840} />
                          <use xlinkHref="#a" y={1260} />
                        </g>
                        <use xlinkHref="#a" y={1680} />
                      </g>
                      <use xlinkHref="#b" x={247} y={210} />
                    </g>
                    <use xlinkHref="#c" x={494} />
                  </g>
                  <use xlinkHref="#d" x={988} />
                  <use xlinkHref="#c" x={1976} />
                  <use xlinkHref="#e" x={2470} />
                </g>
              </svg>
              English (US)
            </button>
            {/* Dropdown */}
            <div
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700"
              id="language-dropdown-menu"
            >
              <ul className="py-2 font-medium" role="none">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 rounded-full me-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-us"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd">
                          <g strokeWidth="1pt">
                            <path
                              fill="#bd3d44"
                              d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                            <path
                              fill="#fff"
                              d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                              transform="scale(3.9385)"
                            />
                          </g>
                          <path
                            fill="#192f5d"
                            d="M0 0h98.8v70H0z"
                            transform="scale(3.9385)"
                          />
                          <path
                            fill="#fff"
                            d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                            transform="scale(3.9385)"
                          />
                        </g>
                      </svg>
                      English (US)
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-de"
                        viewBox="0 0 512 512"
                      >
                        <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                        <path d="M0 0h512v170.7H0z" />
                        <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                      </svg>
                      Deutsch
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        id="flag-icon-css-it"
                        viewBox="0 0 512 512"
                      >
                        <g fillRule="evenodd" strokeWidth="1pt">
                          <path fill="#fff" d="M0 0h512v512H0z" />
                          <path fill="#009246" d="M0 0h170.7v512H0z" />
                          <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
                        </g>
                      </svg>
                      Italiano
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem"
                  >
                    <div className="inline-flex items-center">
                      <svg
                        className="h-3.5 w-3.5 rounded-full me-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        id="flag-icon-css-cn"
                        viewBox="0 0 512 512"
                      >
                        <defs>
                          <path
                            id="a"
                            fill="#ffde00"
                            d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                          />
                        </defs>
                        <path fill="#de2910" d="M0 0h512v512H0z" />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(76.8 0 0 76.8 128 128)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-121 142.6 -47) scale(25.5827)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-98.1 198 -82) scale(25.6)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="rotate(-74 272.4 -114) scale(25.6137)"
                          xlinkHref="#a"
                        />
                        <use
                          width={30}
                          height={20}
                          transform="matrix(16 -19.968 19.968 16 256 230.4)"
                          xlinkHref="#a"
                        />
                      </svg>
                      中文 (繁體)
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <button
              data-collapse-toggle="navbar-language"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-language"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite2
            </span>
          </a>
        </div>
      </nav>
      {/* Navbar*/}

      {/* Bannar */}
      <AppendDots />
      {/* Bannar */}

      {/* Category */}
      <section className="py-[100px]">
        <Container>
          <div className="mb-[50px] text-center">
            <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
              welcome to our shop
            </h4>
            <h2
              className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
            >
              Shop By Category
            </h2>
            <Image
              className="text-center inline-block"
              src={CatLine}
              alt="catline"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            <div className="w-full relative group overflow-hidden cursor-pointer">
              <Image
                className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                src={Cat1}
                alt="cat1"
              />
              <div className="absolute bottom-[15%] left-[12%] w-full z-[9999]">
                <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                  special product
                </h4>
                <h3
                  className={`text-[#080808] text-[22px] mt-[11px] font-normal mb-[10px] ${Pratafont.className}`}
                >
                  Power Make Up Face
                </h3>
                <Link
                  href="#"
                  className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                >
                  View Shop
                </Link>
              </div>
            </div>
            <div className="grid grid-rows-1 md:grid-rows-2 gap-[30px]">
              <div className="w-full group overflow-hidden cursor-pointer relative">
                <Image
                  className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                  src={Cat2}
                  alt="cat2"
                />
                <div className="absolute top-[23%] right-[10%] z-[9999]">
                  <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                    sale up to 50%
                  </h4>
                  <h3
                    className={`text-[#080808] text-[22px] mt-[11px] font-normal mb-[10px] ${Pratafont.className}`}
                  >
                    Natural Collagen Cream
                  </h3>
                  <Link
                    href="#"
                    className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                  >
                    View Shop
                  </Link>
                </div>
              </div>
              <div className="w-full group overflow-hidden cursor-pointer relative">
                <Image
                  className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                  src={Cat3}
                  alt="cat3"
                />
                <div className="absolute top-[25%] left-[12%] z-[9999]">
                  <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                    Natural Oils Body
                  </h4>
                  <h3
                    className={`text-[#080808] text-[22px] mt-[11px] font-normal mb-[10px] ${Pratafont.className}`}
                  >
                    Natural Oils Body
                  </h3>
                  <Link
                    href="#"
                    className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                  >
                    View Shop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Category */}

      {/* New Arrivals */}
      <section className="pt-[100px] pb-[172px]">
        <Container>
          <div className="mb-[50px] text-center">
            <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
              product collection
            </h4>
            <h2
              className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
            >
              New Arrivals
            </h2>
            <Image
              className="text-center inline-block"
              src={CatLine}
              alt="catline"
            />
          </div>
        </Container>
        <NewArrival />
      </section>
      {/* New Arrivals */}

      {/* Deal */}
      <section className="pt-[180px] pb-[195px] bg-deal bg-cover bg-center bg-no-repeat relative">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full">
          <Image src={star3} alt={star3} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-full">
          <Image src={star3} alt={star3} />
        </div>
        <Container>
          <h4 className="font-normal text-sm leading-[179%] tracking-[3px] uppercase text-[#909090]">
            Season offers
          </h4>
          <h2
            className={`font-normal text-6xl leading-[120%] text-[#080808] my-2 ${Pratafont.className}`}
          >
            Deals Of The Day
          </h2>
          <p className="font-normal text-lg leading-[139%] text-[#666] max-w-[530px]">
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
            pellentesque Aenean commodo.
          </p>
          <div className="mt-[45px] mb-[53px] flex gap-5 items-center">
            <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
              <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                259
              </h3>
              <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                Days
              </p>
            </div>
            <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
              <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                14
              </h3>
              <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                Hours
              </p>
            </div>
            <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
              <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                35
              </h3>
              <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                Mins
              </p>
            </div>
            <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
              <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                43
              </h3>
              <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                secs
              </p>
            </div>
          </div>
          <Link
            href="#"
            className="font-normal text-[12px] tracking-[5px] leading-[409%] uppercase text-[#fff] bg-[#080808] py-[5px] px-[20px] inline-block"
          >
            VIEW OFFER
          </Link>
        </Container>
      </section>
      {/* Deal */}

      {/* Recommended For You */}
      <section className="pt-[100px] pb-[172px]">
        <Container>
          <div className="mb-[50px] text-center">
            <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
              product trending
            </h4>
            <h2
              className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
            >
              Recommended For You
            </h2>
            <Image
              className="text-center inline-block"
              src={CatLine}
              alt="catline"
            />
          </div>
        </Container>
        <NewArrival />
      </section>
      {/* Recommended For You */}

      {/* blog1 */}
      <section className="mb-[98px]">
        <Container className="grid grid-cols-2 justify-between items-center h-[266px] gap-[30px]">
          <div className="h-full overflow-hidden relative group cursor-pointer">
            <Image
              className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
              src={Blog1}
              alt={Blog1}
            />
            <div className="absolute top-[25%] left-[12%] z-[9999]">
              <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                Sale Up to 50%
              </h4>
              <h3
                className={`text-[#080808] text-[22px] mt-[15px] font-normal mb-[22px] ${Pratafont.className}`}
              >
                Sale Up to 50%
              </h3>
              <Link
                href="#"
                className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
              >
                View Shop
              </Link>
            </div>
          </div>
          <div className="h-full overflow-hidden relative group cursor-pointer">
            <Image
              className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
              src={Blog2}
              alt={Blog2}
            />
            <div className="absolute top-[25%] left-[12%] z-[9999]">
              <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                Body Oil Beauty
              </h4>
              <h3
                className={`text-[#080808] text-[22px] mt-[15px] font-normal mb-[22px] ${Pratafont.className}`}
              >
                100% Natural Extracts{" "}
              </h3>
              <Link
                href="#"
                className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
              >
                View Shop
              </Link>
            </div>
          </div>
        </Container>
      </section>
      {/* blog1 */}


      {/* news */}
      <section className="mb-[60px]">
        <Container>
        <div className="mb-[50px] text-center">
            <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
              product trending
            </h4>
            <h2
              className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
            >
              Recommended For You
            </h2>
            <Image
              className="text-center inline-block"
              src={CatLine}
              alt="catline"
            />
          </div>
        </Container>
        <News />
      </section>
      {/* news */}
    </>
  );
};

export default page;
