import Container from "@/app/component/Container";
import CartCounter from "@/app/component/layers/CartCounter";
import ProductLens from "@/app/component/layers/ProductLens";
import getSingleProduct from "@/app/utils/getSingleProduct";
import { Prata } from "next/font/google";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebookF,
  FaLinkedin,
  FaRegHeart,
} from "react-icons/fa";
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
  let product = await getSingleProduct(id);
  return {
    title: `Product - ${product.title}`,
    description: product.description,
    image: product.thumbnail,
  };
}

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
        <Container>
          <div className="flex flex-col lg:flex-row gap-[30px] justify-between ">
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
              <CartCounter
                id={id}
                title={product.title}
                price={product.price}
                product={product}
              />

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
            <div className="heading mx-auto flex items-center gap-6 justify-center">
              <h3 className="font-normal text-md leading-[175%] uppercase text-center text-[#e7b053] cursor-pointer">
                Description
              </h3>
              <h3 className="font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer">
                Additional information
              </h3>
              <h3 className="font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer">
                Reviews (1)
              </h3>
              <h3 className="font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer">
                More Products
              </h3>
            </div>
            <div className="mt-10">
              <p className="font-normal text-sm leading-[200%] text-[#666]">
                Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio,
                ac pellentesque lacus. Pellentesque dapibus nunc nec est
                imperdiet, a malesuada sem rutrum. Sed quam odio, porta a
                finibus quis, sagittis aliquet leo. Nunc ornare metus urna, eu
                luctus velit placerat ut. Cras at porttitor lectus. Ut dapibus
                aliquam nibh, in imperdiet libero tincidunt sit amet. Morbi
                sodales fermentum nibh nec facilisis. Morbi pharetra varius
                velit, eget varius libero finibus quis. Quisque auctor varius
                lectus, lacinia rhoncus velit posuere vel. Cras condimentum
                tincidunt urna, sed vehicula ipsum dapibus et. Pellentesque
                pharetra ultrices varius. Sed viverra nec purus ut ornare.
              </p>
              <div className="mt-5">
                <div className="flex gap-2 items-center">
                  <p className="font-normal text-sm leading-[200%] text-[#e7b053]">
                    N
                  </p>
                  <p className="font-normal text-sm leading-[200%] text-[#666]">
                    Aenean auctor sem ac ex efficitur
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-normal text-sm leading-[200%] text-[#e7b053]">
                    N
                  </p>
                  <p className="font-normal text-sm leading-[200%] text-[#666]">
                    Non mattis odio bibendum
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-normal text-sm leading-[200%] text-[#e7b053]">
                    N
                  </p>
                  <p className="font-normal text-sm leading-[200%] text-[#666]">
                    Sed vitae enim at tortor finibus
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-normal text-sm leading-[200%] text-[#e7b053]">
                    N
                  </p>
                  <p className="font-normal text-sm leading-[200%] text-[#666]">
                    Integer facilisis eleifend vehicula
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="font-normal text-sm leading-[200%] text-[#e7b053]">
                    N
                  </p>
                  <p className="font-normal text-sm leading-[200%] text-[#666]">
                    In hac habitasse platea dictumst
                  </p>
                </div>
              </div>
              <p className="font-normal text-sm leading-[200%] text-[#666] mt-3">
                Sed molestie orci sem, at semper est molestie ac. Suspendisse
                cursus feugiat erat, eu posuere massa. Nullam posuere nibh non
                eros lobortis tempus. Maecenas dignissim elementum massa, vel
                accumsan urna elementum in. Suspendisse at dui euismod, rhoncus
                eros non, imperdiet ipsum. Vestibulum vehicula vel turpis et
                vestibulum. Ut porta et ex maximus malesuada.
              </p>
            </div>
          </div>
        </Container>
      </section>
      {/* Product */}
    </>
  );
};

export default page;
