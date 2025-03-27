"use client";
import Container from "@/app/component/Container";
import { Context } from "@/app/context/productContext";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  let { products, setProduct } = useContext(Context);
  let handleminus = (id) => {
    setProduct(
      products.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
    );
  };
  let handleplus = (id) => {
    setProduct(
      products.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };
  let handleDelete = (id) => {
    setProduct((prev) => prev.filter((item) => item.id !== id));
  };

  let [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const tCost = products.reduce(
      (sum, product) => sum + product.count * product.price,
      0
    );
    setTotalPrice(tCost);
  }, [products]);

  return (
    <>
      {/* Shop */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Cart
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Cart
          </p>
        </div>
      </section>
      {/* Shop */}
      <Container className="mt-[110px] mb-[150px] flex xl:flex-row flex-col justify-between items-start gap-[30px]">
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-full">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden border">
                <thead className="bg-[#f5f5f5]">
                  {products?.map((data) => (
                    <tr
                      key={data.id}
                      className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                    >
                      <th className="p-3 text-left h-[124px] sm:h-auto">
                        Image
                      </th>
                      <th className="p-3 text-left">Name</th>
                      <th className="p-3 text-left" width="110px">
                        Price
                      </th>
                      <th className="p-3 text-left" width="110px">
                        Quantity
                      </th>
                      <th className="p-3 text-left" width="110px">
                        Subtotal
                      </th>
                    </tr>
                  ))}
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {products.length > 0 ? (
                    <>
                      {products.map((data) => (
                        <tr
                          key={data.id}
                          className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                        >
                          <td className="p-3">
                            <span className="flex items-center gap-2">
                              <IoMdCloseCircleOutline
                                className="flex-shrink-0 text-xl text-[#080808] cursor-pointer"
                                onClick={() => handleDelete(data.id)}
                              />
                              <Image
                                className="w-[100px] h-[100px] md:flex-shrink-0"
                                src={data.thumbnail}
                                alt={data.thumbnail}
                                width={100}
                                height={100}
                              />
                            </span>
                          </td>
                          <td className=" p-3 hover:font-medium cursor-pointer">
                            <h3 className="font-normal text-[0.94rem] leading-5 text-[#080808]">
                              {data.title.slice(0, 20)}...
                            </h3>
                          </td>
                          <td className="p-3 hover:font-medium cursor-pointer">
                            <h3 className="font-normal text-base leading-[200%] text-[#080808]">
                             100 {/* ${data.price.toFixed(2)} */}
                            </h3>
                          </td>

                          <td className="p-3 hover:font-medium cursor-pointer">
                            <span className="w-[140px] md:w-full flex items-center justify-between border border-[#8F8F8F] cursor-pointer mx-2 h-[25px]">
                              <p
                                className="border-r border-[#8F8F8F] h-full px-3 flex items-center"
                                onClick={() => handleminus(data.id)}
                              >
                                <AiOutlineMinus />
                              </p>
                              <h3 className="font-normal text-lg leading-[200%] text-center text-[#666] mx-2">
                                {data.count}
                              </h3>
                              <p
                                className="border-l border-[#8F8F8F] h-full px-3 flex items-center"
                                onClick={() => handleplus(data.id)}
                              >
                                <AiOutlinePlus />
                              </p>
                            </span>
                          </td>
                          <td className="p-3 hover:font-medium cursor-pointer">
                            ${(data.price * data.count).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ) : (
                    <>
                      <tr>
                        <td className="p-5">No Products in the Cart !!</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[370px]">
          <div className={`border ${Pratafont.className}`}>
            <div className="py-5 bg-[#f5f5f5] flex justify-center items-center">
              <h3
                className={`font-normal text-sm leading-[180%] uppercase text-center text-[#080808] ${Pratafont.className}`}
              >
                Cart totals
              </h3>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                  Subtotal
                </h3>
                <div className="">
                  <h3 className="font-normal text-sm leading-[200%] text-[#666]">
                    ${totalPrice.toFixed(2)}
                  </h3>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                  Shipping: Pharmark
                </h3>
                <form className="">
                  <div className="flex items-center gap-1">
                    <input
                      id="radio1"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                    />
                    <label
                      htmlFor="radio1"
                      className="font-normal text-sm leading-[200%] text-[#666]captialize"
                    >
                      FreeShipping
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      id="radio2"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                    />
                    <label
                      htmlFor="radio2"
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
                  {/* <p className="font-normal text-[0.69rem] leading-[200%] text-[#666]">
                    Aqualia Thermal ×1
                  </p> */}
                </form>
              </div>
              <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                  Shipping: Phavalin
                </h3>
                <form className="">
                  <div className="flex items-center gap-1">
                    <input
                      id="radio3"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                    />
                    <label
                      htmlFor="radio3"
                      className="font-normal text-sm leading-[200%] text-[#666]captialize"
                    >
                      FreeShipping
                    </label>
                  </div>
                  <div className="flex items-center gap-1">
                    <input
                      id="radio4"
                      type="radio"
                      value=""
                      name="colored-radio"
                      className="w-4 h-4  bg-gray-100 border-gray-300 cursor-pointer focus:ring-2 "
                    />
                    <label
                      htmlFor="radio4"
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
                  {/* <p className="font-normal text-[0.69rem] leading-[200%] text-[#666]">
                    Aqualia Thermal ×1
                  </p> */}
                </form>
              </div>

              <div className="grid grid-cols-2 gap-[10px] py-4 border-b pl-2">
                <h3 className="font-normal text-sm leading-[200%] text-[#080808] ">
                  Total
                </h3>
                <div className="">
                  <h3 className="font-normal text-base leading-[200%] text-[#e7b053]">
                    ${totalPrice.toFixed(2)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/checkout"
              className={`py-3 px-5 bg-[#e7b053] font-normal text-xs leading-[175%] uppercase text-[#fff] hover:bg-[#080808] inline-block tracking-[0.2em] ${Pratafont.className}`}
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
