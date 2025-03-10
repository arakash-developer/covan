import Container from "@/app/component/Container";
import ProductLens from "@/app/component/layers/ProductLens";
import { Prata } from "next/font/google";
import { FaAngleRight } from "react-icons/fa";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = async ({ params }) => {
  let { id } = await params;
  return (
    <>
      {/* Shop */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Shop
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Shop
          </p>
        </div>
      </section>
      {/* Shop */}

      {/* Product */}
      <section className="my-8 md:my-[110px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div className="product_img">
            <ProductLens id={id} />
          </div>
          <div className="product_description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
            nihil!
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
