"use client";
import { Context } from "@/app/context/productContext";
import { useContext, useEffect, useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
const Cart = () => {
  let [open, setOpen] = useState(false);
  let cartbtn = useRef(null);
  let { products, setProduct } = useContext(Context);

  // Calculate the total count
  let totalCount = products.reduce(
    (total, product) => total + product.count,
    0
  );

  useEffect(() => {
    document.addEventListener("click", (event) => {
      console.log(open);
      setOpen(!open);
      if (cartbtn.current.contains(event.target)) {
        setOpen(!open);
      } else {
        setOpen(false);
      }
    });
  }, [open]);

  return (
    <div className="relative cursor-pointer" ref={cartbtn}>
      <BiShoppingBag className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
      <div className="absolute w-6 h-6 rounded-full bg-[#e7b053] bottom-[10px] left-[13px] flex justify-center items-center">
        <p className="font-normal text-[0.81rem] leading-[185%] text-center text-[#fff]">
          {totalCount}
        </p>
      </div>
      {open && (
        <div className="xsm:w-[380px] w-[200px] absolute right-0 top-full mt-4 py-8 px-5 bg-[#fff] border-2 border-[#f3f3f3] text-[#080808] z-[99999999]">
          No products in the cart.
          {products.map((Item) => (
            <p>{Item.count}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
