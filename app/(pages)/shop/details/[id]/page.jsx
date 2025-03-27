import Container from "@/app/component/Container";
import CartCounter from "@/app/component/layers/CartCounter";
import ProductLens from "@/app/component/layers/ProductLens";
import WishCounter from "@/app/component/layers/WishCounter";
import NewArrival from "@/app/component/NewArrival";
import ProductTabs from "@/app/component/ProductTabs";
import getAllProduct from "@/app/utils/getAllProduct";
import getProduct from "@/app/utils/getProduct";
import getSingleProduct from "@/app/utils/getSingleProduct";
import { Prata } from "next/font/google";
import Link from "next/link";
import { FaAngleRight, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaStar, FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { VscGitCompare } from "react-icons/vsc";
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

// or Dynamic metadata
export async function generateMetadata({ params }) {
  let { id } = await params;
  let res = await getProduct(id);
  let product = res.success.data[0];


  return {
    title: `Product - ${product.title}`,
    description: product.description,
    image: product.thumbnail,
  };
}

const page = async ({ params }) => {
  let { id } = await params;
  let res1 = await getProduct(id);
  let product1 = res1.success.data[0];
  let product = await getSingleProduct(id);
  let category = product.category;
  let res = await getAllProduct();
  let allProduct = res.products;
  let filterProducts = allProduct.filter((data) => data.category == category);

  return (
    <div className="overflow-x-hidden">
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
        <Container>
          <div className="flex flex-col lg:flex-row gap-[30px] justify-between ">
            <div className="product_img w-full lg:w-[650px]">
              <ProductLens id={id} imageArray={product1.imageArray} />
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
                {product1?.title}
              </h2>
              <h3 className="mt-[17px] mb-[19px] font-normal text-xl leading-[100%] text-[#e7b053]">
                $ {product1?.amount}
              </h3>
              <p className="font-normal text-sm leading-[175%] text-[#666]">
                {product1?.description}
              </p>
              <CartCounter
                id={id}
                title={product1?.title}
                price={product1?.amount}
                product={product1}
              />

              <div className="flex items-center gap-5">
                <WishCounter product={product1} />
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
                Categories :
                <p className="text-[#666666]">
                  {product.category ? product.category : null}
                </p>
              </div>
              <div className="pt-[13px] pb-[14px] border-b border-solid  flex items-center gap-1 font-normal text-sm leading-[175%] capitalize ">
                Tags :
                <div className="flex items-center gap-1 flex-wrap">
                  {product.tags?.map((tag, index) => (
                    <p className="text-[#666666]" key={index}>
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
              <div className="pt-[13px] pb-[14px]  flex items-center gap-1 font-normal text-sm leading-[175%] capitalize ">
                Share :
                <div className="flex items-center gap-1 flex-wrap">
                  <Link
                    href="#"
                    className="rounded-full w-9 h-9 border-2 border-solid border-[#8F8F8F] flex justify-center items-center opacity-[25%] cursor-pointer"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full w-9 h-9 border-2 border-solid border-[#8F8F8F] flex justify-center items-center opacity-[25%] cursor-pointer"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full w-9 h-9 border-2 border-solid border-[#8F8F8F] flex justify-center items-center opacity-[25%] cursor-pointer"
                  >
                    <FaLinkedin />
                  </Link>
                  <Link
                    href="#"
                    className="rounded-full w-9 h-9 border-2 border-solid border-[#8F8F8F] flex justify-center items-center opacity-[25%] cursor-pointer"
                  >
                    <GrInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[95px]">
            <ProductTabs product={product} />
          </div>
          <div className="mt-[45px]">
            <h2
              className={`font-normal text-2xl leading-[120%] capitalize text-center text-[#080808] mb-10 ${Pratafont.className}`}
            >
              Related Products
            </h2>
            <NewArrival products={filterProducts} />
          </div>
        </Container>
      </section>
      {/* Product */}
    </div>
  );
};

export default page;
