"use client";
import CatLine from "@/app/component/layers/CatLine";
import { Prata } from "next/font/google";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const MyLi = ({ name = "Default", link = "/" }) => {
  let categoryList = [
    {
      id: 1,
      categoryName: "Eye",
      subcategory: [
        {
          id: 1,
          name: "Eye Shadow",
          link: "/eye-shadow",
        },
        {
          id: 2,
          name: "Eyebrow",
          link: "/eyebrow",
        },
        {
          id: 3,
          name: "Eyeliner",
          link: "/eyeliner",
        },
        {
          id: 4,
          name: "False Eyelashes",
          link: "/false-eyelashes",
        },
        {
          id: 5,
          name: "Kajal",
          link: "/kajal",
        },
        {
          id: 6,
          name: "Mascara",
          link: "/mascara",
        },
      ],
    },
    {
      id: 2,
      categoryName: "Lips",
      subcategory: [
        {
          id: 1,
          name: "Lipstick",
          link: "/lipstick",
        },
        {
          id: 2,
          name: "Lip Gloss",
          link: "/lip-gloss",
        },
        {
          id: 3,
          name: "Lip Liner",
          link: "/lip-liner",
        },
        {
          id: 4,
          name: "Lipstick",
          link: "/lipstick",
        },
      ],
    },  
    {
      id: 3,
      categoryName: "Nails",
      subcategory: [
        {
          id: 1,
          name: "Nail Polish",
          link: "/nail-polish",
        },
        {
          id: 2,
          name: "Nail Polish Remover",
          link: "/nail-polish-remover",
        },
        {
          id: 3,
          name: "Nail Polish Set",
          link: "/nail-polish-set",
        },
        {
          id: 4,
          name: "Nail Polish Set",
          link: "/nail-polish-set",
        },
      ],
    },
  ];
  return (
    <li className="group w-full md:w-auto">
      <Link
        className="flex items-center md:gap-1 font-normal text-[15px] leading-[109%] uppercase text-[#080808] hover:text-[#e7b053] relative after:w-0 after:h-[2px] after:absolute after:left-0 after:bottom-[-5px] after:bg-[#e7b053] after:transition-all after:ease-linear after:duration-[0.3s] hover:after:w-full md:w-auto justify-between md:justify-start py-5 md:py-0 border-b-2 md:border-0 w-full"
        href={`/shop/${link}`}
      >
        {name}
        <span>
          <FaAngleDown />
        </span>
      </Link>

      <div className="dropdown md:w-[96%] bg-slate-100 md:absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-[100%] z-[999999] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-linear px-10 bg-sale bg-cover bg-top bg-no-repeat md:py-10 overflow-y-scroll md:max-h-[80vh] no-scrollbar h-0 md:h-auto group-hover:h-[60vh] md:group-hover:h-[80vh] cursor-pointer">
        <div className="md:h-[100px] h-0"></div>
        <div className="mt-5 py-5 w-full grid md:grid-cols-3 lg:grid-cols-6 items-start gap-4 justify-between ">
          {categoryList.map((category) => (
            <div key={category.id}>
              <CatLine categoryName={category.categoryName} />
              <ul className="mt-3">
                {category.subcategory.map((item, index) => (
                  <li
                    key={item.id}
                    className="font-semibold text-[13px] leading-[178%] uppercase text-[#080808] hover:text-[#e7b053] transition-all ease-linear duration-300
py-[5px] border-b-[2px] border-dashed border-[#e8ebf0] cursor-pointer"
                  >
                    <Link href={`/shop/${link}/${item.link}`}>{item.name}</Link>
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
