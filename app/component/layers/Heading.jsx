import CatLine from "@/public/catline.png";
import { Prata } from "next/font/google";
import Image from "next/image";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const Heading = ({ h4 = "SubTitle", h1 = "Title" }) => {
  return (
    <div className="mb-[50px] text-center">
      <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
        {h4}
      </h4>
      <h2
        className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
      >
        {h1}
      </h2>
      <Image className="text-center inline-block" src={CatLine} alt="catline" />
    </div>
  );
};

export default Heading;
