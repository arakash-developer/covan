"use client";
import { Prata } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
import Container from "../component/Container";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
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
        <Container className="flex items-start justify-between">
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
                Makeup Powder{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (8)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Shop Lipstick{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (1)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Shop Perfume{" "}
                <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                  (19)
                </span>
              </li>
              <li
                className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0]"
              >
                Soap Beauty{" "}
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
                <div className="flex justify-center w-full mb-5">
                  <div className="flex items-center text-sm">
                    <div
                      id="hs-thousands-separators-and-decimal-points-min-target"
                      className="text-center min-w-36"
                    >
                      250
                    </div>
                    -
                    <div
                      id="hs-thousands-separators-and-decimal-points-max-target"
                      className="text-center min-w-36"
                    >
                      750
                    </div>
                  </div>
                </div>
                <label className="sr-only">Example range</label>
                <div
                  id="hs-thousands-separators-and-decimal-points"
                  className="--prevent-on-load-init"
                  data-hs-range-slider='{
  "start": [2500000, 7500000],
  "range": {
    "min": 0,
    "max": 10000000
  },
  "connect": true,
  "formatter": {
    "prefix": "USD ",
    "type": "thousandsSeparatorAndDecimalPoints"
  },
  "cssClasses": {
    "target": "relative h-2 rounded-full bg-gray-100",
    "base": "w-full h-full relative z-1",
    "origin": "absolute top-0 end-0 w-full h-full origin-[0_0] rounded-full",
    "handle": "absolute top-1/2 end-0 w-[1.125rem] h-[1.125rem] bg-white border-4 border-blue-600 rounded-full cursor-pointer translate-x-2/4 -translate-y-2/4",
    "connects": "relative z-0 w-full h-full rounded-full overflow-hidden",
    "connect": "absolute top-0 end-0 z-1 w-full h-full bg-blue-600 origin-[0_0]",
    "touchArea": "absolute -top-1 -bottom-1 -start-1 -end-1"
  }
}'
                ></div>
              </div>
            </div>
          </div>
          <div className=""></div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
