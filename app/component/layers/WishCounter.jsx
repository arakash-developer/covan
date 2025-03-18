"use client";
import { Context } from "@/app/context/productContext";
import { useContext, useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const WishCounter = ({ product = [] }) => {
  let { wishlist, setWishlist } = useContext(Context);
  let [active, setActive] = useState(false);
  const handleWishlist = () => {
    setWishlist((prv) => [...prv, product]);
    setActive(true);
  };
  console.log(wishlist);

  return (
    <div
      onClick={handleWishlist}
      className="flex items-center gap-2 cursor-pointer"
    >
      <FaRegHeart
        className={`font-normal text-sm leading-[175%] text-center text-[#666] ${
          active && "font-extrabold text-[#e7b053]"
        } text-[21px]`}
      />
      <h3
        className={`font-normal text-sm leading-[175%] text-center text-[#666] ${
          active && "text-[#e7b053]"
        }`}
      >
        Add to Wishlista
      </h3>
    </div>
  );
};

export default WishCounter;
