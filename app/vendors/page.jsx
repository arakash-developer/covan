import Vendor1 from "@/public/vendor1.png";
import VendorLogo1 from "@/public/vendorlogo1.jpg";
import Image from "next/image";
import Container from "../component/Container";

const page = ({ vendorimg = Vendor1, VendorLogo = VendorLogo1 }) => {
  return (
    <div>
      <Container>
        <div className="w-[370px]">
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
              <p className="font-normal text-sm leading-[175%] text-[#fff]">Closed</p>
            </div>
          </div>
          <div className="w-full px-5 py-4 bg-[#fff] "></div>
        </div>
      </Container>
    </div>
  );
};

export default page;
