import Vendor1 from "@/public/vendor1.png";
import VendorLogo1 from "@/public/vendorlogo1.jpg";
import Container from "../component/Container";
import VendorCard from "../component/layers/VendorCard";

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
