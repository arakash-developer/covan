"use client";
import { Context } from "@/app/context/productContext";
import { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Preview1 from "@/public/preview1.png";

const CartCounter = ({ id, title, price, product }) => {
  let [count, setCount] = useState(1);
  let { setProduct, products } = useContext(Context);
  let handleminus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  let handleplus = () => {
    setCount((prev) => prev + 1);
  };
  let handlerAdd = (payload) => {
    setProduct((prv) => {
      return [
        ...prv,
        { id: payload.id, count, title: payload.title, price: payload.amount, thumbnail: Preview1},
      ];
    });
  };
  return (
    <div className="mt-6 mb-[15px] h-[42px] flex gap-5">
      <div className="h-full border border-[#8F8F8F] inline-block ">
        <div className="flex cursor-pointer items-center h-full">
          <div
            onClick={() => handleminus()}
            className="border-r border-[#8F8F8F] h-full px-4 flex justify-center items-center"
          >
            <AiOutlineMinus />
          </div>
          <div className=" h-full px-7 flex justify-center items-center">
            <h3 className="font-normal text-xl leading-[200%] text-center text-[#666]">
              {count}
            </h3>
          </div>
          <div
            onClick={() => handleplus()}
            className="border-l border-[#8F8F8F] h-full px-4 flex justify-center items-center"
          >
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <div
        onClick={() => handlerAdd(product)}
        className="font-normal text-[0.81rem] leading-[323%] uppercase text-center text-[#fff] bg-[#e7b053] px-6 cursor-pointer hover:bg-[#080808] transition-all ease-in-out duration-[0.3s]"
      >
        Add to cart
      </div>
    </div>
  );
};

export default CartCounter;
