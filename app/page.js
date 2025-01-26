
import { HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="max-w-[1800px] px-3 mx-auto">
        {/* top */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">

          <div className="flex items-center gap-1">
            <LuPhoneCall className="font-normal text-[0.69rem] leading-[344%] text-[#909090]" />
            <p className="font-normal text-[0.69rem] leading-[344%] text-[#909090]">
              +84 100-2345-6799
            </p>
          </div>
          <div className="flex items-center gap-1">
            <MdOutlineEmail  className="font-normal text-[0.69rem] text-[#909090] leading-[344%]" />
            <p className="font-normal text-[0.69rem] leading-[344%] text-[#909090]">
              contact@covanshop.com
            </p>
          </div>
          </div>

        </div>
        {/* top */}
      </div>
    </>
  );
};

export default page;
