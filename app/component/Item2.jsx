import Product1 from "@/public/product1.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import { HiSearch } from "react-icons/hi";
import { TiStarFullOutline } from "react-icons/ti";

const Item = ({
  className,
  Name = "Product Name",
  Price = 0,
  thumbnail = Product1,
  id = 1,
}) => {
  const router = useRouter();
  const handlerClick = () => {
    router.push(`/shop/details/${id}`);
  };
  return (
    <div
      className={`product ${className} w-[270px] h-[436px] cursor-pointer`}
      onClick={handlerClick}
    >
      <div className="w-full h-full relative">
        <div className="flex justify-center items-center absolute left-[20px] top-[20px] w-[55px] h-[30px] bg-[#82aa17]">
          <p className="font-normal text-sm leading-[214%] capitalize text-center text-[#fff]">
            -25%
          </p>
        </div>

        <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 flex flex-col gap-1 invisible actionbtn transition-all ease-in-out duration-[0.3s]">
          <div className="w-10 h-10 group hover:bg-[#e7b053] transition-all ease-linear duration-[0.1s] rounded-full flex justify-center items-center">
            <FaArrowRightLong className="inline-block text-[17px] text-[#666] group-hover:text-[#fff]" />
          </div>
          <div className="w-10 h-10 hover:bg-[#e7b053] group transition-all ease-linear duration-[0.1s] rounded-full flex items-center relative">
            <FaRegHeart className="inline-block text-[17px] text-[#666] group-hover:text-[#fff]" />
            <div className="absolute right-0 -bottom-[6px]">
              <FaRegHeart className="inline-block text-[20px]" />
            </div>
          </div>
          <div className="w-10 h-10 hover:bg-[#e7b053] group transition-all ease-linear duration-[0.1s] rounded-full flex justify-center items-center">
            <HiSearch className="inline-block text-[19px] text-[#666] group-hover:text-[#fff]" />
          </div>
        </div>

        <div className="w-full lg:h-[339px] h-[300px] flex justify-center items-center border border-[#e5e7eb]">
          <Image
            src={thumbnail}
            alt="product"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center gap-1">
            <TiStarFullOutline className="inline-block text-[#e7b053]" />
            <TiStarFullOutline className="inline-block text-[#e7b053]" />
            <TiStarFullOutline className="inline-block text-[#e7b053]" />
            <TiStarFullOutline className="inline-block text-[#ccc]" />
          </div>
          <h3 className="font-normal text-lg leading-[123%] capitalize text-[#080808]">
            {Name.substr(0, 34) + "..."}
            {/* True Cosme */}
          </h3>
          <h3 className="font-normal text-base text-[#e7b053] mt-2">
            {/* $30.00 – $46.00 */}
            {Price} $
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Item;
