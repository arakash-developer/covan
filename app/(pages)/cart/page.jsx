"use client";
import Container from "@/app/component/Container";
import { Context } from "@/app/context/productContext";
import { Prata } from "next/font/google";
import Image from "next/image";
import { useContext } from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  let { products, setProduct } = useContext(Context);
  let handleminus = () => {};
  let handleplus = () => {};
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
      <Container className="mt-[110px] mb-[150px] flex md:flex-row flex-col justify-between items-start">
        <div className="w-full overflow-x-scroll md:overflow-auto">
          <table className="w-[700px] border-2 border-[#f5f5f5]">
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
                  Quantity
                </th>
                <th
                  className={`${Pratafont.className} font-normal text-sm leading-[200%] uppercase text-[#080808]`}
                >
                  price
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
                  <td className="flex gap-2 items-center">
                    <IoMdCloseCircleOutline />
                    <Image
                      className="w-[100px] h-[100px]"
                      src={data.thumbnail}
                      alt={data.thumbnail}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>
                    <h3 className="font-normal text-[0.94rem] leading-5 text-[#080808]">
                      {data.title.slice(0, 20)}...
                    </h3>
                  </td>
                  <td>
                    <span>ss</span>
                  </td>
                  <td>{data.price}</td>
                  <td>{data.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>page</div>
      </Container>
    </>
  );
};

export default page;
