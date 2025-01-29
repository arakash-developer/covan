import { Prata } from "next/font/google";
import Link from "next/link";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const NewsItem = ({ className }) => {
  return (
    <div
      className={`product ${className} w-[370px] h-[446px] cursor-pointer bg-red-300`}
    >
      <div className="w-full h-full relative bg-lime-500">
     
      </div>
    </div>
  );
};

export default NewsItem;
