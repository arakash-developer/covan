"use client";
import MultiRangeSlider from "@/app/component/multiRangeSlider/PriceRangeSlider";
import Brand1 from "@/public/brand1.png";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  FaAngleRight,
  FaCaretDown,
  FaChevronRight,
  FaServer,
} from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import Container from "../component/Container";
import Paginate from "../component/Paginate";
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
          <div className="flex justify-between items-start gap-[35px]">
            <div className="w-[300px] pl-[15px]">
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
              </div>
            </div>
            <div className="w-full bg-green-300">b</div>
          </div>
        </Container>
      </div>

      {/* Product */}
      <section className="py-[110px]">
        <Container className="w-full flex lg:flex-row flex-col items-start justify-between">
          <div className="w-[280px] mr-4">
            <CatLine categoryName="Categories" />
            <div>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Body Oil{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (6)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Concealer{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (6)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Eyeshadow{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (7)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                For Autumn{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (15)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Makeup Powder
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (8)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Shop Lipstick
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (1)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Shop Perfume
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (19)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Soap Beauty
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (9)
                </span>
              </li>
            </div>
            <div className="mt-8 mb-[50px]">
              <CatLine categoryName="Price" />
              <div className="w-full">
                <MultiRangeSlider
                  min={100}
                  max={1000}
                  onChange={handleRangeChange}
                />
              </div>
            </div>
            <div className="mb-[50px]">
              <CatLine categoryName="Capacity" />
              <div className="mt-6 flex items-start gap-[10px] flex-wrap">
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  100g
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  100ml
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  200g
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  200ml
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  300g
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  300ml
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  400g
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  400ml
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  500g
                </div>
              </div>
            </div>
            <div className="mb-[50px]">
              <CatLine categoryName="Color" />
              <div className="mt-6 flex justify-between items-start">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[22px] h-[22px] border-2 border-[#ccc] rounded-full flex justify-center items-center">
                      <div className="w-4 h-4 bg-[#000] rounded-full"></div>
                    </div>
                    <h3 className="font-medium text-[14px] leading-[180%] text-[#666]">
                      Black
                    </h3>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[22px] h-[22px] border-2 border-[#ccc] rounded-full flex justify-center items-center">
                      <div className="w-4 h-4 bg-[#E88EED] rounded-full"></div>
                    </div>
                    <h3 className="font-medium text-[14px] leading-[180%] text-[#666]">
                      Pink
                    </h3>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[22px] h-[22px] border-2 border-[#ccc] rounded-full flex justify-center items-center">
                      <div className="w-4 h-4 bg-[#DD3333] rounded-full"></div>
                    </div>
                    <h3 className="font-medium text-[14px] leading-[180%] text-[#666]">
                      Red
                    </h3>
                  </div>
                  <div className="flex gap-[10px] items-center">
                    <div className="w-[22px] h-[22px] border-2 border-[#ccc] rounded-full flex justify-center items-center">
                      <div className="w-4 h-4 bg-[#EEEE22] rounded-full"></div>
                    </div>
                    <h3 className="font-medium text-[14px] leading-[180%] text-[#666]">
                      Yellow
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-[50px]">
              <CatLine categoryName="Brands" />
              <div className="mt-6 flex justify-between items-start flex-wrap gap-y-[10px]">
                <div className="w-[125px] h-[115px] border-2 border-[#ccc] flex justify-center items-center p-2">
                  <Image src={Brand1} alt="brand1" />
                </div>
                <div className="w-[125px] h-[115px] border-2 border-[#ccc] flex justify-center items-center p-2">
                  <Image src={Brand1} alt="brand1" />
                </div>
                <div className="w-[125px] h-[115px] border-2 border-[#ccc] flex justify-center items-center p-2">
                  <Image src={Brand1} alt="brand1" />
                </div>
                <div className="w-[125px] h-[115px] border-2 border-[#ccc] flex justify-center items-center p-2">
                  <Image src={Brand1} alt="brand1" />
                </div>
                <div className="w-[125px] h-[115px] border-2 border-[#ccc] flex justify-center items-center p-2">
                  <Image src={Brand1} alt="brand1" />
                </div>
              </div>
            </div>
            <div className="mb-[50px]">
              <CatLine categoryName="Products Tags" />
              <div className="mt-6 flex items-start gap-[10px] flex-wrap">
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Baby Needs
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Beauty
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  For Men
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  For summer
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  For Winter
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Life Style
                </div>

                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Lipstick
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Makeup Powder
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Shop Lipstick
                </div>
                <div className="py-[13px] px-[13px] border-2 border-[#ccc]">
                  Shop Perfume
                </div>
              </div>
            </div>
          </div>
          <div className="rightside w-full">
            <div className="filtertop mb-[50px] h-[43px] flex justify-between items-start">
              <div className=" flex  gap-[10px] items-center">
                <TfiLayoutGrid3Alt className="text-[#E7B053] text-xl h-full" />
                <FaServer className="text-[#E7B053] text-xl h-full" />
              </div>
              <div className="flex items-center gap-[10px]">
                <div className="leading-[43px] h-full px-[11px] border-2 border-[#ccc] cursor-pointer relative">
                  <div className="absolute right-0 top-[105%] w-[70px] justify-center flex border border-[#00000026] z-20 bg-[#fff]">
                    <div className="flex flex-col gap-y-1 w-full  ">
                      <div className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]">
                        <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                          24
                        </p>
                      </div>
                      <div className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]">
                        <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                          36
                        </p>
                      </div>
                      <div className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]">
                        <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                          48
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-medium text-sm leading-[286%] capitalize text-[#666] flex items-center gap-1">
                    12
                    <FaCaretDown />
                  </p>
                </div>
                <div className="leading-[43px] h-full px-[11px] border-2 border-[#ccc] cursor-pointer">
                  <p className="font-medium text-sm leading-[286%] capitalize text-[#666] flex  items-center gap-1">
                    Default sorting
                    <FaCaretDown />
                  </p>
                </div>
              </div>
            </div>
            <Paginate itemsPerPage={12} />
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
