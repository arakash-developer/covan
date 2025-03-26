"use client";
import { Context } from "@/app/context/productContext";
import Logo from "@/public/logo.png";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { FaAngleDown, FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoClose, IoMenu, IoSearchSharp } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdDelete, MdOutlineEmail } from "react-icons/md";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";
import CatLine from "./layers/CatLine";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const Navbar = () => {
  let categoryList = [
    {
      id: 1,
      categoryName: "Eye",
      subcategory: [
        "Eye Shadow",
        "Eyebrow",
        "Eyeliner",
        "False Eyelashes",
        "Kajal",
        "Mascara",
      ],
    },
    {
      id: 2,
      categoryName: "Lip",
      subcategory: ["Lip Gloss", "Lipstick", "Lip Liner"],
    },
    {
      id: 3,
      categoryName: "Face",
      subcategory: [
        "Face Powder",
        "Face Primer",
        "Concealer",
        "Foundation",
        "Highlighter",
        "Bronzer",
        "Blusher",
      ],
    },
    {
      id: 4,
      categoryName: "Nail",
      subcategory: ["Nail Polish", "Nail Care", "Nail Art"],
    },
    {
      id: 5,
      categoryName: "Hair",
      subcategory: [
        "Hair Color",
        "Hair Styling",
        "Hair Care",
        "Hair Accessories",
      ],
    },
    {
      id: 6,
      categoryName: "Body",
      subcategory: [
        "Body Lotion",
        "Body Wash",
        "Body Scrub",
        "Body Oil",
        "Body Care",
      ],
    },
    {
      id: 7,
      categoryName: "Tools",
      subcategory: [
        "Makeup Brushes",
        "Makeup Tools",
        "Makeup Accessories",
        "Makeup Bags",
        "Makeup Remover",
      ],
    },
    {
      id: 8,
      categoryName: "Skin",
      subcategory: [
        "Face Wash",
        "Face Mask",
        "Face Serum",
        "Face Cream",
        "Face Care",
      ],
    },
    {
      id: 9,
      categoryName: "Fragrance",
      subcategory: ["Perfume", "Deodorant", "Body Mist"],
    },
    {
      id: 10,
      categoryName: "Hair",
      subcategory: [
        "Hair Color",
        "Hair Styling",
        "Hair Care",
        "Hair Accessories",
      ],
    },
    {
      id: 11,
      categoryName: "Body",
      subcategory: [
        "Body Lotion",
        "Body Wash",
        "Body Scrub",
        "Body Oil",
        "Body Care",
      ],
    },
    {
      id: 12,
      categoryName: "Tools",
      subcategory: [
        "Makeup Brushes",
        "Makeup Tools",
        "Makeup Accessories",
        "Makeup Bags",
        "Makeup Remover",
      ],
    },
    {
      id: 13,
      categoryName: "Skin",
      subcategory: [
        "Face Wash",
        "Face Mask",
        "Face Serum",
        "Face Cream",
        "Face Care",
      ],
    },
    {
      id: 14,
      categoryName: "Fragrance",
      subcategory: ["Perfume", "Deodorant", "Body Mist"],
    },
    {
      id: 15,
      categoryName: "Hair",
      subcategory: [
        "Hair Color",
        "Hair Styling",
        "Hair Care",
        "Hair Accessories",
      ],
    },
  ];
  let [open, setOpen] = useState(false);
  let cartbtn = useRef(null);
  let menubtn = useRef(null);
  let [isOpen, setIsOpen] = useState(false);
  let { products, setProduct, wishlist, setWishlist } = useContext(Context);
  let closehandler = () => {
    // setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      setIsOpen(!isOpen);
      if (menubtn.current.contains(event.target)) {
        setIsOpen(!isOpen);
      } else {
        setIsOpen(false);
      }
    });
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("click", (event) => {
      setOpen(!open);
      if (cartbtn.current.contains(event.target)) {
        setOpen(!open);
      } else {
        setOpen(false);
      }
    });
  }, [open]);

  let [totalCount, totalsetCount] = useState(0);
  let [price, setPrice] = useState(0);
  let [totalwishCount, totalwishsetCount] = useState(0);
  let [updateproducts, setUpdateProducts] = useState([]);
  useEffect(() => {
    let count = products.reduce((total, product) => total + product.count, 0);
    totalsetCount(count);
    let price = products.reduce((total, product) => total + product.price, 0);
    setPrice(price);
    const groupedWish = wishlist.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.count += item.count;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, []);
    totalwishsetCount(groupedWish.length);
    const groupedItems = products.reduce((acc, item) => {
      // Find if an item with the same id already exists
      const existingItem = acc.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item exists, update the count
        existingItem.count += item.count;
      } else {
        // If it doesn't exist, add it to the accumulator
        acc.push({ ...item });
      }
      return acc;
    }, []);
    setUpdateProducts(groupedItems);
  }, [products, wishlist]);

  let handleDelete = (id) => {
    setProduct((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      {/* top */}
      <div className="py-2 border-b border-[#CCCCCC] border-opacity-40">
        <div className="max-w-[1800px] px-3 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <LuPhoneCall className="font-normal text-[15px] leading-[344%] text-[#909090]" />
                <p className="font-normal text-[15px] leading-[344%] text-[#909090]">
                  +84 100-2345-6799
                </p>
              </div>
              <div className="bg-[#CCCCCC] h-3 w-[1px] hidden md:block"></div>
              <div className="items-center gap-1  hidden md:flex">
                <MdOutlineEmail className="font-normal text-[15px] text-[#909090] leading-[344%]" />
                <p className="font-normal text-[15px] leading-[344%] text-[#909090]">
                  contact@covanshop.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <FaRegUser className="font-normal text-[14px] text-[#909090] leading-[344%]" />
                <p className="font-normal text-[15px] leading-[344%] text-right text-[#909090]">
                  My Account
                </p>
              </div>
              <div className="bg-[#CCCCCC] h-3 w-[1px] hidden xsm:block"></div>
              <div className="items-center gap-3 hidden xsm:flex">
                <RiTwitterXFill className="w-4 h-4 inline-block text-[#909090]" />
                <RiInstagramLine className="w-4 h-4 inline-block text-[#909090]" />
                <RiFacebookFill className="w-4 h-4 inline-block text-[#909090]" />
                <RiYoutubeFill className="w-4 h-4 inline-block text-[#909090]" />
              </div>
            </div>
          </div>
          {/* top */}
        </div>
      </div>
      {/* top */}

      {/* Navbar*/}
      <nav className="py-[36px] relative px-2">
        <div className="max-w-[1800px] mx-auto px-3 flex justify-between items-center">
          <IoMenu
            className="font-normal text-[30px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] cursor-pointer md:hidden"
            ref={menubtn}
          />
          <Link href="/">
            <Image src={Logo} alt="logo" />
          </Link>
          <div
            className={`md:static absolute top-0 w-full md:w-auto !z-[9999999999] !bg-[#fff] md:bg-transparent  transition-all duration-[0.5s] ease-in-out ${
              isOpen
                ? "opacity-100 pointer-events-auto left-0 h-[100vh]"
                : "-left-40 opacity-0 pointer-events-none h-auto"
            } md:h-auto md:opacity-100 md:pointer-events-auto`}
          >
            <div className="bg-[#e7b053] w-full md:hidden pt-[10px] pb-5 px-5 text-right flex items-center justify-end cursor-pointer">
              <h3
                className={`font-normal text-lg uppercase pt-2 ${Pratafont.className} text-[#fff]`}
              >
                Close
              </h3>
              <IoClose className="font-normal text-[35px] pt-2 text-[#fff]" />
            </div>
            <ul
              className="h-full flex flex-col md:flex-row items-start md:items-center md:gap-5 lg:gap-10  
           md:bg-transparent px-5 mt-5 md:mt-0
          md:px-0 gap-y-4
          "
            >
              <li className="group h-full">
                <Link
                  className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full w-[240px] md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0"
                  href="/blog"
                >
                  Blog
                  <span>
                    <FaAngleDown />
                  </span>
                </Link>

                <div className="dropdown max-h-[82vh] overflow-y-scroll  w-[96%] bg-slate-100 absolute left-full md:left-1/2 -translate-x-1/2 top-0 md:top-[100%] z-[999999] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-linear px-10 py-10">
                  <div className="py-5 w-full grid md:grid-cols-3 lg:grid-cols-6 items-start gap-4 justify-between">
                    {categoryList.map((category) => (
                      <div key={category.id}>
                        <CatLine categoryName={category.categoryName} />
                        <ul className="mt-3">
                          {category.subcategory.map((item, index) => (
                            <li
                              key={index}
                              className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808]
            py-[5px] border-b-[2px] border-dashed border-[#e8ebf0] cursor-pointer"
                            >
                              {item}
                              <span className="font-semibold text-[13px] leading-[196%] uppercase text-[#666]">
                                (6)
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <IoSearchSharp className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
            <Link
              href="/wishlist"
              className="relative cursor-pointer group inline-block"
            >
              <FaRegHeart className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
              <div className="absolute w-6 h-6 rounded-full bg-[#e7b053] bottom-[10px] left-[13px] flex justify-center items-center">
                <p className="font-normal text-[0.81rem] leading-[185%] text-center text-[#fff]">
                  {totalwishCount}
                </p>
              </div>
            </Link>
            <div className="">
              <div className="relative cursor-pointer" ref={cartbtn}>
                <BiShoppingBag className="font-normal text-[22px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053]  cursor-pointer" />
                <div className="absolute w-6 h-6 rounded-full bg-[#e7b053] bottom-[10px] left-[13px] flex justify-center items-center">
                  <p className="font-normal text-[0.81rem] leading-[185%] text-center text-[#fff]">
                    {totalCount}
                  </p>
                </div>
                {open && (
                  <div className="w-[300px] sm:w-[380px] absolute right-0 top-full mt-4 py-8 px-5 bg-[#fff] border-2 border-[#f3f3f3] text-[#080808] z-[99999999]">
                    {products.length > 0 ? (
                      <>
                        <div className="flex flex-col gap-5">
                          {updateproducts.map((product) => (
                            <div key={product.id}>
                              <div className="flex justify-between items-center">
                                <div className="flex items-start gap-4">
                                  <Image
                                    src={product.thumbnail}
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="w-[50px] h-[50px] object-cover flex-shrink-0"
                                  />
                                  <div className="">
                                    <h3 className="text-[0.94rem] leading-5 mb-1.5 font-medium">
                                      {product.title}
                                    </h3>
                                    <div className="flex gap-2 items-center">
                                      <p className="text-md">{product.count}</p>
                                      <p className="text-xs">X</p>
                                      <p className="text-[#e7b053] text-base leading-5 font-bold">
                                        {product.price}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <p onClick={() => handleDelete(product.id)}>
                                  <MdDelete className="text-xl" />
                                </p>
                              </div>
                            </div>
                          ))}
                          <div className="mt-10">
                            <div className=" flex justify-between items-center">
                              <h4 className="text-sm font-medium text-[#080808] uppercase leading-[1.63rem]">
                                Total
                              </h4>
                              <div className="border-t border-[#e1e1e1] w-full"></div>
                              <h3 className="text-md font-medium text-[#080808] uppercase leading-[1.63rem]">
                                ${(price * totalCount).toFixed(2)}
                              </h3>
                            </div>
                            <div
                              className="mt-2 flex items-center justify-between
                            "
                            >
                              <Link
                                href="/cart"
                                className="bg-[#e7b053] overflow-hidden relative uppercase text-[0.81rem] text-[#fff] rounded-none px-5 md:px-10 py-2 transition-all duration-300 ease-linear hover:bg-[#080808]"
                              >
                                View cart
                              </Link>
                              <Link
                                href="/checkout"
                                className="overflow-hidden relative uppercase text-[0.81rem] text-[#fff] rounded-none bg-[#080808] hover:bg-[#e7b053] transition-all duration-300 ease-linear px-5 md:px-10 py-2"
                              >
                                checkout
                              </Link>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>No products in the cart.</>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar*/}
    </>
  );
};

export default Navbar;
