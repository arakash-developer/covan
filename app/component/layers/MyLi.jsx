"use client";
import { Prata } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
import CatLine from "@/app/component/layers/CatLine";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const MyLi = ({
    name="Default",
    link="/",
}) => {
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
  return (
    <li className="group h-full w-full md:w-auto">
      <Link
        className="flex items-center gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0 w-full"
        href={link}
      >
        {name}
        <span>
          <FaAngleDown />
        </span>
      </Link>

      <div className="dropdown  md:w-[96%] bg-slate-100 md:absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[100%] z-[999999] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-linear px-10 bg-sale bg-cover bg-top bg-no-repeat py-10 md:overflow-y-scroll md:max-h-[80vh] no-scrollbar h-0 md:h-auto">
        <div className="md:h-[100px] h-0"></div>
        <div className="mt-5 py-5 w-full grid md:grid-cols-3 lg:grid-cols-6 items-start gap-4 justify-between ">
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
  );
};

export default MyLi;
