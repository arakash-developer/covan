"use client";
import Container from "@/app/component/Container";
import { Context } from "@/app/context/productContext";
import { useContext, useEffect, useState } from "react";

const page = () => {
  let [totalCount, totalsetCount] = useState(0);
  let [price, setPrice] = useState(0);
  let { products } = useContext(Context);
  useEffect(() => {
    let count = products.reduce((total, product) => total + product.count, 0);
    totalsetCount(count);
    let price = products.reduce((total, product) => total + product.price, 0);
    setPrice(price);
  }, [products]);
  return (
    <section className="my-[110px]">
      <Container>
        <div className="flex justify-between gap-5 items-start">
          <form className="w-full flex flex-col gap-y-[30px] ">
            <h2 className="font-normal text-xl leading-[120%] uppercase text-[#080808] mb-[30px]">
              Billing details
            </h2>
            <div className="item">
              <div className="flex items-center gap-[2px]">
                <label className="font-normal text-md leading-[175%] capitalize">
                  First name
                </label>
                <span className="text-[#e42234] font-normal text-md leading-[175%] inline-block underline">
                  *
                </span>
              </div>
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
                placeholder=" "
                required
              />
            </div>
            <div className="item">
              <div className="flex items-center gap-[2px]">
                <label className="font-normal text-md leading-[175%] capitalize">
                  Last name
                </label>
                <span className="text-[#e42234] font-normal text-md leading-[175%] inline-block underline">
                  *
                </span>
              </div>
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
                placeholder=" "
                required
              />
            </div>
            <div className="item">
              <div className="">
                <label className="font-normal text-md leading-[175%] capitalize">
                  Company name (optional)
                </label>
              </div>
              <input
                type="text"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none  focus:outline-none focus:ring-0 focus:border-[#e7b053] peer"
                placeholder=" "
                required
              />
            </div>
            <div className="item">
              <div className="flex items-center gap-[2px]">
                <label className="font-normal text-md leading-[175%] capitalize">
                  Country/Region
                </label>
                <span className="text-[#e42234] font-normal text-md leading-[175%] inline-block underline">
                  *
                </span>
              </div>
              <select
                className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-[#ddd] appearance-none focus:outline-none focus:ring-0 focus:border-[#e7b053] peer cursor-pointer"
                defaultValue="bangladesh"
              >
                <option value="bangladesh">Bangladesh</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </form>
          <div className="w-[600px]">
            <h2 className="font-normal text-xl leading-[120%] uppercase text-[#080808] mb-[30px]">
              Your order
            </h2>
            <div className="bg-[#f5f5f5] border">
              <div className=" bg-[#fff] m-5">
                <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                  <h3 className="font-bold text-md leading-[200%] text-[#080808] capitalize">
                    Product
                  </h3>
                  <h3 className="font-bold text-md leading-[200%] text-[#080808] capitalize">
                    SubTotal
                  </h3>
                </div>
                {products.length > 0 ? (
                  <>
                    {products.map((data) => (
                      <div key={data.id} className="w-full">
                        <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                          <h3 className="font-bold text-sm leading-[200%] text-[#666] ">
                            {data.title.slice(0, 16)}
                            <span> X 1</span>
                          </h3>
                          <div className="">
                            <h3 className="font-bold text-sm leading-[200%] text-[#080808]">
                              $ {(data.price * data.count).toFixed(2)}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <>naiii</>
                )}
                <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                  <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                    Shipping: Pharmark
                  </h3>
                  <form className="">
                    <div className="flex items-center gap-1">
                      <input
                        id="red-radio"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                      />
                      <label
                        htmlFor="red-radio"
                        className="font-normal text-sm leading-[200%] text-[#666]captialize"
                      >
                        FreeShipping
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        id="red-radio"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                      />
                      <label
                        htmlFor="red-radio"
                        className="font-normal text-sm leading-[200%] text-[#666]captialize"
                      >
                        Flat rate
                      </label>
                    </div>
                    <p className="font-normal text-sm leading-[200%] text-[#666]">
                      Shipping to{" "}
                      <span className="font-normal text-sm leading-[200%] text-[#080808]">
                        Bangladesh
                      </span>
                    </p>
                    <p className="font-normal text-[0.69rem] leading-[200%] text-[#666]">
                      Aqualia Thermal ×1
                    </p>
                  </form>
                </div>
                <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                  <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                    Shipping: Phavalin
                  </h3>
                  <form className="">
                    <div className="flex items-center gap-1">
                      <input
                        id="red-radio"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                      />
                      <label
                        htmlFor="red-radio"
                        className="font-normal text-sm leading-[200%] text-[#666]captialize"
                      >
                        FreeShipping
                      </label>
                    </div>
                    <div className="flex items-center gap-1">
                      <input
                        id="red-radio"
                        type="radio"
                        value=""
                        name="colored-radio"
                        className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                      />
                      <label
                        htmlFor="red-radio"
                        className="font-normal text-sm leading-[200%] text-[#666]captialize"
                      >
                        Flat rate
                      </label>
                    </div>
                    <p className="font-normal text-sm leading-[200%] text-[#666]">
                      Shipping to
                      <span className="font-normal text-sm leading-[200%] text-[#080808]">
                        Bangladesh
                      </span>
                    </p>
                    <p className="font-normal text-[0.69rem] leading-[200%] text-[#666]">
                      Aqualia Thermal ×1
                    </p>
                  </form>
                </div>

                <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                  <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                    Total
                  </h3>
                  <div className="">
                    <h3 className="font-normal text-base leading-[200%] text-[#e7b053]">
                      $ {price*totalCount.toFixed(2)}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
