import Logo from "@/public/footerlogo.png";
import Payment from "@/public/payment.png";
import Map from "@/public/map.png";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="pt-[80px]  bg-[#080808]">
      <Container className="pb-[95px] flex items-start justify-between flex-wrap gap-y-10">
        <div className="">
          <Image src={Logo} alt="logo" />
          <div className="mt-[34px] flex flex-col gap-[15px]">
            <div className="flex items-center gap-[2px]">
              <GoDotFill className="text-[#c1c1c1] text-sm" />
              <li className="font-normal text-sm leading-[171%] text-[#c1c1c1]">
                9870 St Vincent Place, Glasgow, DC 45
              </li>
            </div>
            <div className="flex items-center gap-[2px]">
              <GoDotFill className="text-[#c1c1c1] text-sm" />
              <li className="font-normal text-sm leading-[171%] text-[#c1c1c1]">
                +84 100-2345-6799
              </li>
            </div>
            <div className="flex items-center gap-[2px]">
              <GoDotFill className="text-[#c1c1c1] text-sm" />
              <li className="font-normal text-sm leading-[171%] text-[#c1c1c1]">
                support@domain.com
              </li>
            </div>
          </div>
          <div className="mt-[23px] flex items-center gap-[10px]">
            <div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-[#ccc] cursor-pointer">
              <BsTwitterX className="text-sm inline-block text-[#080808]" />
            </div>
            <div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-[#ccc] cursor-pointer">
              <BsInstagram className="text-sm inline-block text-[#080808]" />
            </div>
            <div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-[#ccc] cursor-pointer">
              <BsFacebook className="text-sm inline-block text-[#080808]" />
            </div>
            <div className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-[#ccc] cursor-pointer">
              <BsYoutube className="text-sm inline-block text-[#080808]" />
            </div>
          </div>
        </div>
        <div className="">
          <h3 className="font-medium text-[0.94rem] leading-[100%] uppercase text-[#e7b053] mb-[30px]">
            INFO LINKS
          </h3>
          <ul className="flex flex-col gap-[21px]">
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-medium text-[0.94rem] leading-[100%] uppercase text-[#e7b053] mb-[30px]">
            Services
          </h3>
          <ul className="flex flex-col gap-[21px]">
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                My account
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Checkout
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="font-normal text-sm leading-[171%] text-[#909090]"
                href="#"
              >
                Makeup Powder
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-medium text-[0.94rem] leading-[100%] uppercase text-[#e7b053] mb-[30px] ">
            our store
          </h3>
          <div className="mt-[30px]">
            <Image src={Map} alt="map" />
          </div>
        </div>
      </Container>
      <div className="border-t border-[#323232]"></div>
      <Container className="py-8 flex justify-between items-center flex-wrap gap-y-3">
        <p className="font-normal text-sm leading-[171%] text-[#afafaf]">
          Copyright © 2020
          <span className="font-normal text-sm leading-[171%] text-[#e7b053]">
            Wpbingo
          </span>
          . All rights reserved.
        </p>
       <Image src={Payment} alt={Payment} />
      </Container>
    </footer>
  );
};

export default Footer;
