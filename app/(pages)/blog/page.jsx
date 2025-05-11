"use client";
import BlogPaginate from "@/app/component/BlogPaginate";
import { Prata } from "next/font/google";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import Container from "../../component/Container";

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
            <div className="w-full">
              <div className="search w-full h-[45px] flex items-center mb-10">
                <input
                  type="text"
                  className="w-full h-full px-4 outline-none  border-2 border-[#8F8F8F40] font-normal text-sm text-[#757575]"
                  placeholder="Search..."
                />
                <div className="h-full w-[100px] flex justify-center items-center bg-[#e7b053] hover:bg-[#080808] transition-all duration-300 ease-in-out  border-2 border-[#e7b053] hover:border-[#080808]  cursor-pointer">
                  <AiOutlineSearch className="font-normal text-lg leading-[250%] text-center text-[#fff]" />
                </div>
              </div>
              <BlogPaginate />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
