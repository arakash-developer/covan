import Product5 from "@/public/image27.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaCommentDots } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const BlogItems = ({ item , title, description, date, comment}) => {
  const router = useRouter();
  let handlerCLick = () => {
    router.push(`/blog/${item}`);
  };
  return (
    <div onClick={handlerCLick} className="cursor-pointer">
      <div className="md:h-[600px] sm:h-[400px] h-[300px] overflow-hidden">
        <Image
          src={Product5}
          alt={Product5}
          className="w-full mx-auto h-full bg-cover"
        />
      </div>
      <div className="mt-5">
        <h2
          className={`font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808] ${Pratafont.className}`}
        >
        {title}
        </h2>
        <div className="flex items-center sm:gap-[50px] gap-2 mt-2 mb-5">
          <div className="flex items-center gap-[3px]">
            <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
            <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
             {date}
            </p>
          </div>
          <div className="flex items-center gap-[3px]">
            <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
            <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
             {comment}
            </p>
          </div>
        </div>
        <p className="font-normal text-sm leading-[175%] text-[#666] max-w-[816px] mb-[33px]">
        {description}
        </p>
        <Link
          href="#"
          className="font-bold text-[0.69rem] leading-[273%] uppercase text-[#fff] tracking-[3px] px-5 py-3 bg-[#e7b053] hover:bg-[#080808] transition-all duration-300 ease-in-out"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogItems;
