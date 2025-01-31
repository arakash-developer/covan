"use client";
import MultiRangeSlider from "@/app/component/multiRangeSlider/PriceRangeSlider";
import { Prata } from "next/font/google";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
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
              <div className="mt-6">s
                
              </div>
            </div>
          </div>
          <div className="rightside w-full">
            <div className="filtertop mb-[50px] h-[43px] bg-lime-400"></div>
            <Paginate itemsPerPage={12} />
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
