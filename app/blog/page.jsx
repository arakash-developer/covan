"use client";
import Product5 from "@/public/image27.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleRight, FaChevronRight, FaCommentDots, FaRegEdit } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import Container from "../component/Container";
import CatLine from "../component/layers/CatLine";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  let Products = [];
  for (let i = 1; i <= 200; i++) {
    Products.push(i);
  }
  return (
    <>
      {/* blog */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Blog
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Blog
          </p>
        </div>
      </section>
      {/* blog */}

      <div className="my-[110px]">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[35px]">
            <div className="md:w-[300px] md:pl-[15px] px-[15px]">
              <div className="search w-full h-[45px] flex items-center">
                <input
                  type="text"
                  className="w-full h-full px-4 outline-none  border-2 border-[#8F8F8F40] font-normal text-sm text-[#757575]"
                  placeholder="Search..."
                />
                <div className="h-full w-[70px] flex justify-center items-center bg-[#e7b053]  border-2 border-[#e7b053] cursor-pointer">
                  <AiOutlineSearch className="font-normal text-lg leading-[250%] text-center text-[#fff]" />
                </div>
              </div>
              <div className="mt-[45px] mb-[38px]">
                <CatLine categoryName="Categories" />
                <ul className="mt-[18px] flex flex-col gap-[9px]">
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      kithen
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      Life Style
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      Makeup Powder
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#e7b053]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#e7b053] capitalize"
                      href="#"
                    >
                      News
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      Photography
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-[45px]">
                <CatLine categoryName="Recent Posts" />
                <div className="mt-[25px] flex flex-col gap-[25px]">
                  <div className="w-full h-full flex items-start gap-2 pb-6 border-b-2 border-dashed border-[#ccc]">
                    <div className="w-[120px] h-[120px] overflow-hidden relative">
                      <div className="w-[24px] h-[24px] bg-[#080808] absolute left-0 top-0 flex justify-center items-center text-[#fff]font-normal text-[0.63rem] leading-[240%] text-center text-[#fff]">
                        0
                      </div>
                      <Image
                        src={Product5}
                        alt={Product5}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-[0.69rem] leading-[175%] uppercase text-[#e7b053]">
                        Life Style
                      </h4>
                      <h2 className="font-bold text-base leading-[125%] capitalize text-[#080808] max-w-[125px] mb-1 mt-[9px]">
                        Traveling Solo Is Awesome
                      </h2>
                      <p className="font-normal text-[0.63rem] leading-[175%] uppercase text-[#666]">
                        May 30, 2018
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-start gap-2 pb-6 border-b-2 border-dashed border-[#ccc]">
                    <div className="w-[120px] h-[120px] overflow-hidden relative">
                      <div className="w-[24px] h-[24px] bg-[#080808] absolute left-0 top-0 flex justify-center items-center text-[#fff]font-normal text-[0.63rem] leading-[240%] text-center text-[#fff]">
                        0
                      </div>
                      <Image
                        src={Product5}
                        alt={Product5}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-[0.69rem] leading-[175%] uppercase text-[#e7b053]">
                        Life Style
                      </h4>
                      <h2 className="font-bold text-base leading-[125%] capitalize text-[#080808] max-w-[125px] mb-1 mt-[9px]">
                        Traveling Solo Is Awesome
                      </h2>
                      <p className="font-normal text-[0.63rem] leading-[175%] uppercase text-[#666]">
                        May 30, 2018
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-start gap-2 pb-6 border-b-2 border-dashed border-[#ccc]">
                    <div className="w-[120px] h-[120px] overflow-hidden relative">
                      <div className="w-[24px] h-[24px] bg-[#080808] absolute left-0 top-0 flex justify-center items-center text-[#fff]font-normal text-[0.63rem] leading-[240%] text-center text-[#fff]">
                        0
                      </div>
                      <Image
                        src={Product5}
                        alt={Product5}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-[0.69rem] leading-[175%] uppercase text-[#e7b053]">
                        Life Style
                      </h4>
                      <h2 className="font-bold text-base leading-[125%] capitalize text-[#080808] max-w-[125px] mb-1 mt-[9px]">
                        Traveling Solo Is Awesome
                      </h2>
                      <p className="font-normal text-[0.63rem] leading-[175%] uppercase text-[#666]">
                        May 30, 2018
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full flex items-start gap-2 pb-6 border-b-2 border-dashed border-[#ccc]">
                    <div className="w-[120px] h-[120px] overflow-hidden relative">
                      <div className="w-[24px] h-[24px] bg-[#080808] absolute left-0 top-0 flex justify-center items-center text-[#fff]font-normal text-[0.63rem] leading-[240%] text-center text-[#fff]">
                        0
                      </div>
                      <Image
                        src={Product5}
                        alt={Product5}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="">
                      <h4 className="font-semibold text-[0.69rem] leading-[175%] uppercase text-[#e7b053]">
                        Life Style
                      </h4>
                      <h2 className="font-bold text-base leading-[125%] capitalize text-[#080808] max-w-[125px] mb-1 mt-[9px]">
                        Traveling Solo Is Awesome
                      </h2>
                      <p className="font-normal text-[0.63rem] leading-[175%] uppercase text-[#666]">
                        May 30, 2018
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[38px]">
                <CatLine categoryName="Archives" />
                <ul className="mt-[18px] flex flex-col gap-[9px]">
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      May 2018
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      April 2017
                    </Link>
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <FaChevronRight className="font-black text-[0.81rem] leading-[175%] text-[#666]" />
                    <Link
                      className="font-normal text-md leading-[175%] text-[#666] capitalize"
                      href="#"
                    >
                      November 2016
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <CatLine categoryName="Tags" />
                <div className="mt-6 flex items-start gap-[10px] flex-wrap">
                  <div className="py-[10px] px-[20px] border-2 border-[#ccc]">
                    Baby Needs
                  </div>
                  <div className="py-[10px] px-[20px] border-2 border-[#ccc]">
                    Beauty
                  </div>
                  <div className="py-[10px] px-[20px] border-2 border-[#ccc]">
                    Ear Care
                  </div>
                  <div className="py-[10px] px-[20px] border-2 border-[#ccc]">
                    For man
                  </div>
                  <div className="py-[10px] px-[20px] border-2 border-[#ccc]">
                    Make Up
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col gap-[80px]">
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              <div className="w-full">
                <div className="w-full h-[571px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2 className="font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808]">Traveling Solo Is Awesome</h2>
                  <div className="flex items-center gap-[50px] mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaRegEdit className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        Wpbingo
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        4 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a...
                  </p>
                  <Link href="#" className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-2 bg-[#e7b053]">Read More</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
