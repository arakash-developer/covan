"use client";
import MultiRangeSlider from "@/app/component/multiRangeSlider/PriceRangeSlider";
import getAllProduct from "@/app/utils/getAllProduct";
import Brand1 from "@/public/brand1.png";
import { Prata } from "next/font/google";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaCaretDown, FaServer } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { ScaleLoader } from "react-spinners";
import Container from "../../component/Container";
import Paginate from "../../component/Paginate";
import CatLine from "../../component/layers/CatLine";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });
  let [sortType, setSortType] = useState(12);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);
  let [category, setCategory] = useState();
  let [product, setProduct] = useState([]);
  let [filterLeft, setFilterLeft] = useState(false);
  let [loading, setLoading] = useState(true);

  // Toggle popup visibility
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  // Close the popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    };
    // Listen for outside clicks
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  const handlerItemCount = (value) => {
    setSortType(value);
    setIsPopupVisible(false);
  };

  // fetch data
  let getdata = async () => {
    let response = await getAllProduct();
    let product = response.products;
    setProduct(product);
    setLoading(false);
  };

  useEffect(() => {
    getdata();
  }, []);
  // unique categories
  const uniqueCategories = [...new Set(product.map((item) => item.category))];
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
        <Container
          className={`w-full flex lg:flex-row flex-col items-start justify-between `}
        >
          <div className={`w-[280px] mr-4  lg:block hidden`}>
            <CatLine categoryName="Categories" />
            <div>
              {uniqueCategories.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setCategory(item);
                  }}
                  className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
                py-[18px] border-b-[2px] border-dashed border-[#e8ebf0] cursor-pointer"
                >
                  {item}
                  <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                    (6)
                  </span>
                </li>
              ))}
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
                  {isPopupVisible && (
                    <div
                      ref={popupRef}
                      className="absolute right-0 top-[105%] w-[70px] justify-center flex border border-[#00000026] z-20 bg-[#fff]"
                    >
                      <div className="flex flex-col gap-y-1 w-full  ">
                        <div
                          onClick={() => handlerItemCount(24)}
                          className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]"
                        >
                          <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                            24
                          </p>
                        </div>
                        <div
                          onClick={() => handlerItemCount(36)}
                          className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]"
                        >
                          <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                            36
                          </p>
                        </div>
                        <div
                          onClick={() => handlerItemCount(48)}
                          className="w-full flex justify-center hover:bg-[#e7b053] hover:text-[#fff]"
                        >
                          <p className="font-medium text-sm leading-[286%] capitalize text-[#666]">
                            48
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p
                    onClick={togglePopup}
                    className="font-medium text-sm leading-[286%] capitalize text-[#666] flex items-center gap-1"
                  >
                    {sortType}
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
            {loading ? (
              <div className="flex justify-center items-end w-full relative">
                <ScaleLoader
                  className="absolute top-1/2 lg:top-[100px]"
                  color="#E7B053"
                />
              </div>
            ) : (
              <Paginate itemsPerPage={sortType} catagory={category} loading={loading} />
            )}
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
