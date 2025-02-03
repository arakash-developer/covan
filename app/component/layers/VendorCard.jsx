import Vendor1 from "@/public/vendor1.png";
import VendorLogo1 from "@/public/vendorlogo1.jpg";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { IoCall, IoStar } from "react-icons/io5";

const VendorCard = ({
  vendorimg = Vendor1,
  VendorLogo = VendorLogo1,
  Name = "Vendor Name",
  Address = "Vendor Address",
  Call = "Vendor Call",
}) => {
  return (
    <div className="w-full">
      <div className="w-full h-[220px] relative">
        <div className="w-full h-full overflow-hidden after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#000000] after:bg-opacity-[45%] after:z-10 z-20  relative">
          <Image
            src={vendorimg}
            alt={vendorimg}
            className="w-full h-full bg-cover"
          />
        </div>
        <div className="absolute -bottom-[12px] right-[20px] bg-[#fff] w-[80px] h-[80px] rounded-full flex justify-center items-center z-40">
          <Image
            src={VendorLogo}
            alt={VendorLogo}
            className="w-[68px] h-[68px] bg-cover rounded-full"
          />
        </div>
        <div className="w-[65px] h-6  bg-[#999] absolute right-[15px] top-[15px] z-40 rounded-[30px] flex justify-center items-center">
          <p className="font-normal text-sm leading-[175%] text-[#fff]">
            Closed
          </p>
        </div>
        <div className="absolute top-[48px] left-5 z-50">
          <h2 className="font-normal text-xl leading-[120%] text-[#fff]">
            {Name}
          </h2>
          <div className="flex items-center gap-1 my-2">
            <IoStar className="text-[#FA9A00] text-[17px]" />
            <IoStar className="text-[#FA9A00] text-[17px]" />
            <IoStar className="text-[#FA9A00] text-[17px]" />
            <IoStar className="text-[#FA9A00] text-[17px]" />
            <IoStar className="text-[#FA9A00] text-[17px]" />
          </div>
          <p className="font-normal text-sm leading-[164%] text-[#fff] mb-2">
            {Address}
          </p>
          <div className="flex items-center gap-[10px]">
            <IoCall className="font-normal text-sm leading-[175%] text-[#fff]" />
            <p className="font-normal text-sm leading-[175%] text-[#fff]">
              {Call}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-4 bg-[#f7fbfc] border border-[#e1e1e1]">
        <div className="h-10 w-10 bg-[#e7b053] flex justify-center items-center">
          <FaChevronRight className="text-[#fff] text-md" />
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
