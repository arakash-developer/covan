"use client";
import { Context } from "@/app/context/productContext";
import { useContext, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartCounter = ({ id, title, price }) => {
  let [count, setCount] = useState(1);
  let { setProduct, products } = useContext(Context);
  let handleminus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  let handleplus = () => {
    setCount(count + 1);
  };
  let handlerAdd = () => {
    let ob = {
      id,
      title,
      price,
      count,
    };

    // Check if the product with the same ID already exists
    const productExists = products.find((p) => p.id === id);

    if (productExists) {
      // If product exists, update its count
      productExists.count += ob.count;
    } else {
      // If product doesn't exist, push a new product
      setProduct((prevProducts) => [...prevProducts, ob]);
    }
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
        onClick={() => handlerAdd()}
        className="font-normal text-[0.81rem] leading-[323%] uppercase text-center text-[#fff] bg-[#e7b053] px-6 cursor-pointer"
      >
        Add to cart
      </div>
    </div>
  );
};

export default CartCounter;
