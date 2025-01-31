"use client";
import MultiRangeSlider from "@/app/component/multiRangeSlider/PriceRangeSlider";
import { Prata } from "next/font/google";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Container from "../component/Container";
import Item2 from "../component/Item2";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };
  return (
    <>
      {/* Shop */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Shop
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Shop
          </p>
        </div>
      </section>
      {/* Shop */}

      {/* Product */}
      <section className="py-[110px]">
        <Container className="flex items-start justify-between flex-wrap">
          <div className="">
            <h3
              className={`font-medium text-md leading-[143%] uppercase text-[#080808] ${Pratafont.className}`}
            >
              Categories
            </h3>
            <div className="line flex items-center mt-[10px]">
              <div className="w-[70px] h-[4px] bg-[#e7b053]"></div>
              <div className="w-[200px] h-[2px] bg-[#e1e1e1]"></div>
            </div>
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
            <div className="mt-8">
              <h3
                className={`font-medium text-md leading-[143%] uppercase text-[#080808] ${Pratafont.className}`}
              >
                Price
              </h3>
              <div className="line flex items-center mt-[10px]">
                <div className="w-[70px] h-[4px] bg-[#e7b053]"></div>
                <div className="w-[200px] h-[2px] bg-[#e1e1e1]"></div>
              </div>
              <div className="mmy">
                <MultiRangeSlider
                  min={100}
                  max={1000}
                  onChange={handleRangeChange}
                />
              </div>
            </div>
          </div>
          <div className="rightside w-full">
            <div className="filtertop mb-[50px] h-[43px]"></div>
            <div
              className=" grid justify-between grid-cols-2 md:grid-cols-3 gap-[30px]
            "
            >
              <Item2 className="w-full" />
              <Item2 className="w-full" />
              <Item2 className="w-full" />
            </div>
            <div className=""></div>
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
