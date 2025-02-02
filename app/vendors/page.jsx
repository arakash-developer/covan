import Vendor1 from "@/public/vendor1.png";
import VendorLogo1 from "@/public/vendorlogo1.jpg";
import Image from "next/image";
import Container from "../component/Container";

const page = ({ vendorimg = Vendor1, VendorLogo = VendorLogo1 }) => {
  return (
    <div>
      <Container>
        <div className="w-[370px]">
          <div className="w-full h-[220px] overflow-hidden">
            <Image
              src={vendorimg}
              alt={vendorimg}
              className="w-full h-full bg-cover"
            />
          </div>
          <div className="w-full px-5 py-4 bg-[#fff] "></div>
        </div>
      </Container>
    </div>
  );
};

export default page;
