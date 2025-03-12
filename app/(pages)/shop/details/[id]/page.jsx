import Container from "@/app/component/Container";
import ProductLens from "@/app/component/layers/ProductLens";
import getSingleProduct from "@/app/utils/getSingleProduct";
import { Prata } from "next/font/google";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaAngleRight, FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { VscGitCompare } from "react-icons/vsc";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = async ({ params }) => {
  let { id } = await params;
  let product = await getSingleProduct(id);

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
        <Container className="flex flex-col lg:flex-row gap-[30px] justify-between ">
          <div className="product_img w-full lg:w-[650px]">
            <ProductLens id={id} />
          </div>
          <div className="product_details">
            <div className="flex items-center gap-1">
              <div className="flex items-center ">
                <FaStar className="font-black text-xs leading-[120%] text-[#e7b053]" />
                <FaStar className="font-black text-xs leading-[120%] text-[#e7b053]" />
                <FaStar className="font-black text-xs leading-[120%] text-[#e7b053]" />
                <FaStar className="font-black text-xs leading-[120%] text-[#e7b053]" />
                <FaStar className="font-black text-xs leading-[120%] text-[#e7b053]" />
              </div>
              <h4 className="font-normal text-sm leading-[175%] text-[#666]">
                (1 customer review)
              </h4>
            </div>
            <h2 className="mt-6 font-normal text-3xl leading-[100%] capitalize text-[#080808]">
              {product.title}
            </h2>
            <h3 className="mt-[17px] mb-[19px] font-normal text-xl leading-[100%] text-[#e7b053]">
              $ {product.price}
            </h3>
            <p className="font-normal text-sm leading-[175%] text-[#666]">
              {product.description}
            </p>
            <div className="mt-6 mb-[15px] h-[42px] flex gap-5">
              <div className="h-full border border-[#8F8F8F] inline-block ">
                <div className="flex cursor-pointer items-center h-full">
                  <div className="border-r border-[#8F8F8F] h-full px-4 flex justify-center items-center">
                    <AiOutlineMinus />
                  </div>
                  <div className=" h-full px-7 flex justify-center items-center">
                    <h3 className="font-normal text-xl leading-[200%] text-center text-[#666]">
                      1
                    </h3>
                  </div>
                  <div className="border-l border-[#8F8F8F] h-full px-4 flex justify-center items-center">
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
              <div className="font-normal text-[0.81rem] leading-[323%] uppercase text-center text-[#fff] bg-[#e7b053] px-6 cursor-pointer">
                Add to cart
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegHeart className="font-normal text-sm leading-[175%] text-center text-[#666] text-[21px]" />
                <h3 className="font-normal text-sm leading-[175%] text-center text-[#666]">
                  Add to Wishlist
                </h3>
              </div>
              <div
                className="flex items-center gap-1  cursor-pointer
              "
              >
                <VscGitCompare className="font-normal text-sm leading-[175%] text-center text-[#666] text-[21px]" />
                <h3 className="font-normal text-sm leading-[175%] text-center text-[#666]">
                  Compare
                </h3>
              </div>
            </div>
            <div className="mt-[38px] pb-[14px] border-b border-solid  flex items-center gap-1 font-normal text-sm leading-[175%] capitalize ">
              SKU :<p className="text-[#666666]">VN00189</p>
            </div>
            <div className="pt-[13px] pb-[14px] border-b border-solid  flex items-center gap-1 font-normal text-sm leading-[175%] capitalize ">
              Categories :<p className="text-[#666666]">{product.category}</p>
            </div>
            <div className="pt-[13px] pb-[14px] border-b border-solid  flex items-center gap-1 font-normal text-sm leading-[175%] capitalize ">
              Tags :
              <div className="flex items-center gap-1 flex-wrap">
                {product.tags.map((tag, index) => (
                  <p className="text-[#666666]" key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
