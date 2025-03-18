"use client";
import Container from "@/app/component/Container";
import { Context } from "@/app/context/productContext";
import { Prata } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";
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
      <Container className="mt-[110px] mb-[150px] flex md:flex-row flex-col justify-between items-start gap-[30px]">
        {/* <div className="w-full overflow-x-scroll md:overflow-auto">
          <table className="w-[700px] border-2 border-[#f5f5f5] border-spacing-4">
            <thead className="h-[50px] bg-[#f5f5f5] border-2 border-[#f5f5f5]">
              <tr className="text-left">
                <th>c</th>
                <th
                  className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
                >
                  Product
                </th>
                <th
                  className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
                >
                  price
                </th>
                <th
                  className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
                >
                  Quantity
                </th>

                <th
                  className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
                >
                  Subtotal
                </th>
              </tr>
            </thead>
            <tbody className="border-2 border-[#f5f5f5] h-[132px]">
              {products.map((data) => (
                <tr key={data.id}>
                  <td>
                    <span className="flex items-center justify-between">
                      <IoMdCloseCircleOutline className="text-xl text-[#080808]" />
                      <Image
                        className="w-[100px] h-[100px] flex-shrink-0"
                        src={data.thumbnail}
                        alt={data.thumbnail}
                        width={100}
                        height={100}
                      />
                    </span>
                  </td>
                  <td>
                    <h3 className="font-normal text-[0.94rem] leading-5 text-[#080808]">
                      {data.title.slice(0, 20)}...
                    </h3>
                  </td>
                  <td className="font-normal text-base leading-[200%] text-[#080808]">
                    ${data.price}
                  </td>
                  <td className="h-full">
                    <span className="flex items-center justify-between border border-[#8F8F8F] cursor-pointer mx-2 h-[25px]">
                      <p
                        className="border-r border-[#8F8F8F] h-full px-3 flex items-center"
                        onClick={() => handleminus(data.id)}
                      >
                        <AiOutlineMinus />
                      </p>
                      <h3 className="font-normal text-lg leading-[200%] text-center text-[#666]">
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
                  <td className="font-normal text-base leading-[200%] text-[#e7b053]">
                    ${data.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="w-full">
          <div className="w-full flex items-center justify-center">
            <div className="w-full">
              <table className="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden sm:shadow-lg border-2">
                <thead className="bg-[#f5f5f5]">
                  <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <th className="p-3 text-left h-[124px] sm:h-auto">Image</th>
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
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  {products.map((data) => (
                    <tr
                      key={data.id}
                      className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                    >
                      <td className="p-3">
                        <span className="flex items-center justify-between">
                          <IoMdCloseCircleOutline className="flex-shrink-0 text-xl text-[#080808]" />
                          <Image
                            className="w-[100px] h-[100px]"
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
                          ${data.price}
                        </h3>
                      </td>

                      <td className="p-3 hover:font-medium cursor-pointer">
                        <span className="flex items-center justify-between border border-[#8F8F8F] cursor-pointer mx-2 h-[25px]">
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
                        ${data.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={`w-[370px] border ${Pratafont.className}`}>
          <div className="py-5 bg-[#f5f5f5] flex justify-center items-center">
            <h3
              className={`font-normal text-sm leading-[180%] uppercase text-center text-[#080808] ${Pratafont.className}`}
            >
              Cart totals
            </h3>
          </div>
          <div className="w-full grid grid-cols-2 justify-between">
            <div className="pl-3">
              <div className="py-5 font-normal text-sm leading-[200%] text-[#080808] border-b">
                Subtotal
              </div>
              <div className="py-5 font-normal text-sm leading-[200%] text-[#080808]  border-b">
                Shipping: Pharmark
              </div>
              <div className="py-5 font-normal text-sm leading-[200%] text-[#080808]  border-b">
                Shipping: Pharmark
              </div>
              <div className="py-5 font-normal text-sm leading-[200%] text-[#080808]  border-b">
                Shipping: Phavalin
              </div>
              <div className="py-5 font-normal text-sm leading-[200%] text-[#080808]">
                Total
              </div>
            </div>
            <div className="">
              <div className="py-5 font-normal text-sm leading-[200%] text-[#666]border-b">
              $113.00
              </div>
              <div className="py-5 font-normal text-sm leading-[200%] text-[#666]border-b">
              $113.00
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
