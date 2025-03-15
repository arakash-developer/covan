"use client";
import { Context } from "@/app/context/productContext";
import Logo from "@/public/logo.png";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoClose, IoMenu, IoSearchSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const Navbar = () => {
  let [open, setOpen] = useState(false);
  let cartbtn = useRef(null);
  let [isOpen, setIsOpen] = useState(false);
  let { products, setProduct } = useContext(Context);
  let closehandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      setOpen(!open);
      if (cartbtn.current.contains(event.target)) {
        setOpen(!open);
      } else {
        setOpen(false);
      }
    });
  }, [open]);

  let [ncount, setCount] = useState(0);
  useEffect(() => {
    let count = products.reduce((total, product) => total + product.count, 0);
    setCount(count);
  }, [products]);

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
              <div className="bg-[#CCCCCC] h-3 w-[1px] hidden md:block"></div>
              <div className="items-center gap-1  hidden md:flex">
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
              <div className="bg-[#CCCCCC] h-3 w-[1px] hidden xsm:block"></div>
              <div className="items-center gap-3 hidden xsm:flex">
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
      <nav className="py-[36px]">
        <div className="max-w-[1800px] mx-auto px-3 flex justify-between items-center">
          <IoMenu
            className="font-normal text-[30px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] cursor-pointer md:hidden"
            onClick={closehandler}
          />
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <div
            className={`md:static absolute top-0 w-[280px] md:w-auto z-[9999999] bg-[#fff] md:bg-transparent h-full transition-all duration-[0.5s] ease-in-out  ${
              isOpen
                ? "opacity-100 left-0"
                : "-left-40 opacity-0 pointer-events-none"
            } md:opacity-100 md:pointer-events-auto`}
          >
            <div
              className="bg-[#e7b053] w-full md:hidden pt-[10px] pb-5 px-5 text-right flex items-center justify-end cursor-pointer"
              onClick={closehandler}
            >
              <h3
                className={`font-normal text-lg uppercase pt-2 ${Pratafont.className} text-[#fff]`}
              >
                Close
              </h3>
              <IoClose className="font-normal text-[35px] pt-2 text-[#fff]" />
            </div>
            <ul
              className="flex flex-col md:flex-row items-start md:items-center md:gap-5 lg:gap-10  
           md:bg-transparent px-5 mt-5 md:mt-0
          md:px-0 gap-y-4
          "
            >
              <li className="">
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0"
                  href="/"
                >
                  Home
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0 cursor-pointer"
                  href="/shop"
                >
                  Shop
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0"
                  href="/blog"
                >
                  Blog
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
              </li>
              <li className="relative">
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0"
                  href=""
                >
                  Page
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
                <div className="hidden absolute top-[150%] left-0 w-full bg-[#e7b053]">
                  ddd
                </div>
              </li>
              <li>
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start md:border-0"
                  href="/vendors"
                >
                  Vendors
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <IoSearchSharp className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
            <div className="relative cursor-pointer group">
              <FaRegHeart className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
              <div className="absolute w-6 h-6 rounded-full bg-[#e7b053] bottom-[10px] left-[13px] flex justify-center items-center">
                <p className="font-normal text-[0.81rem] leading-[185%] text-center text-[#fff]">
                  0
                </p>
              </div>
            </div>
            <div className="">
              {/* <Cart /> */}
              <div className="relative cursor-pointer" ref={cartbtn}>
                <BiShoppingBag className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
                <div className="absolute w-6 h-6 rounded-full bg-[#e7b053] bottom-[10px] left-[13px] flex justify-center items-center">
                  <p className="font-normal text-[0.81rem] leading-[185%] text-center text-[#fff]">
                    {ncount}
                  </p>
                </div>
                {open && (
                  <div className="xsm:w-[380px] w-[200px] absolute right-0 top-full mt-4 py-8 px-5 bg-[#fff] border-2 border-[#f3f3f3] text-[#080808] z-[99999999]">
                    No products in the cart.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar*/}
    </>
  );
};

export default Navbar;
