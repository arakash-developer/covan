import { Prata } from "next/font/google";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const CatLine = ({categoryName = "Categories",className}) => {
  return (
    <div className={`${className}`}>
      <h3
        className={`font-medium text-md leading-[143%] uppercase text-[#080808] ${Pratafont.className}`}
      >
       {categoryName}
      </h3>
      <div className="line w-full flex items-center mt-[10px]">
        <div className="w-[70px] h-[4px] bg-[#e7b053]"></div>
        <div className="w-full h-[2px] bg-[#e1e1e1]"></div>
      </div>
    </div>
  );
};

export default CatLine;
