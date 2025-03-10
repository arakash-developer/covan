import Vendor1 from "@/public/vendor1.png";
import VendorLogo1 from "@/public/vendorlogo1.jpg";
import { IoFilterSharp } from "react-icons/io5";
import Container from "../../component/Container";
import VendorCard from "../../component/layers/VendorCard";
import { FaMicrosoft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { RiFunctionFill } from "react-icons/ri";




const page = ({
  vendorimg = Vendor1,
  VendorLogo = VendorLogo1,
  Name = "Vendor Name",
  Address = "Vendor Address",
  Call = "Vendor Call",
}) => {
  return (
    <div>
      <Container className="mt-[110px] mb-[150px]">
        <div className="mb-5 py-3 md:h-[74px] md:flex justify-between items-center">
          <p className="font-normal text-sm leading-[175%] text-[#666]">
            Total stores showing: 6
          </p>
          <div className="flex items-center sm:gap-[30px] justify-between h-full md:mt-0 mt-3">
            <div className="h-full px-5 bg-[#e7b053] flex items-center gap-1">
              <IoFilterSharp className="font-bold text-[18px] leading-[175%] text-[#fff]" />
              <p className="font-bold text-base leading-[175%] tracking-[3px] uppercase text-center text-[#fff]">
                Filter
              </p>
            </div>
            <div className="h-full flex items-center gap-1">
              <p className="font-normal text-sm leading-[175%] text-[#666]">
                Sort by:
              </p>
              <p className="font-normal text-sm leading-[175%] text-[#000] border-2 border-[#edecec] px-5 h-full flex items-center justify-center">Most Recent</p>
            </div>
            <div className="md:flex gap-1 items-center hidden">
            <RiFunctionFill  className="text-lg text-[#e7b053]"/>
            <FaBars className="text-lg text-[#666]"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
          <VendorCard />
        </div>
      </Container>
    </div>
  );
};

export default page;
