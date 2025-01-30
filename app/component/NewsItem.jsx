import News1 from "@/public/image26.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const NewsItem = ({ className }) => {
  return (
    <div className={`product ${className} h-[446px] mx-4 cursor-pointer`}>
      <div className="w-full h-full">
        <div className="h-[248px] w-full overflow-hidden group">
          <Image
            className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
            src={News1}
            alt={News1}
          />
        </div>
        <div className="pt-[25px] pb-[6px]">
          <div className="flex gap-4 items-center">
            <h4 className="font-normal text-[0.69rem] leading-[175%] uppercase text-[#909090]">
              post by:{" "}
              <span className="font-normal text-[0.69rem] leading-[175%] uppercase text-[#e7b053]">
                Kitchen
              </span>
            </h4>
            <div className="flex items-center gap-4">
              <div className="w-[5px] h-[5px] rounded-full bg-[#cacaca]"></div>
              <h4 className="font-normal text-[0.69rem] leading-[175%] uppercase text-[#909090]">
                Apr 17, 2017
              </h4>
            </div>
          </div>
          <h3
            className={`mt-[14px] mb-[18px] font-normal text-[1.38rem] leading-[159%] capitalize text-[#080808] ${Pratafont.className}`}
          >
            Post format audio blogs
          </h3>
          <p className="font-normal text-[0.94rem] max-w-[368px] leading-[175%] text-[#666] mb-2">
            Nunc aliquet, justo non commodo congue, velit sem pulvinar enim, ac
            bibendum mi mi...
          </p>
          <Link
            className="font-normal text-[13px] leading-[175%] uppercase tracking-[3px] text-[#080808] relative after:absolute after:bottom-[-3px] after:w-0 after:h-[1px] after:bg-[#080808]  after:content-[''] after:left-0 after:invisible hover:after:visible transition-all ease-linear duration-700 hover:after:w-full" 
            href="#"
          >
            read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
