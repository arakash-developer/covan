import AppendDots from "@/app/component/AppendDots";
import Container from "@/app/component/Container";
import NewArrival from "@/app/component/NewArrival";
import News from "@/app/component/News";
import Heading from "@/app/component/layers/Heading";
import star3 from "@/public/3star.png";
import Cat1 from "@/public/cat1.jpg";
import Cat2 from "@/public/cat2.jpg";
import Cat3 from "@/public/cat3.jpg";
import CatLine from "@/public/catline.png";
import Blog2 from "@/public/image21.jpg";
import Blog1 from "@/public/image22.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail } from "react-icons/hi";
import Storebanner from "@/public/storebanner.png"

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Page Title",
  description: "This is a description for my page.",
  openGraph: {
    title: "Covan",
    description: "This is an Open Graph description.",
    url:"https://covan.vercel.app/",
    siteName: "Covan",
    images: [
      {
        url: `${Storebanner}`,
        width: 1200,
        height: 630,
        alt: "My Open Graph Image",
      },
    ],
    type: "website",
  },
};


const page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div
          className="bg-[#FFC312] border-t-4 border-[#ffa305] rounded-b text-teal-900 px-2 py-1 shadow-md 
          fixed bottom-10 left-5 z-[9999999999999]"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-[#fff] mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#fff] uppercase tracking-[1px]">
                In Progress
              </p>
              <p className="text-sm text-[#fff]">Updating..</p>
            </div>
          </div>
        </div>

        {/* Bannar */}
        <AppendDots />
        {/* Bannar */}

        {/* Category */}
        <section className="py-[100px]">
          <Container>
            <Heading h1="Shop By Category" h4=" welcome to our shop" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
              <div className="w-full relative group overflow-hidden cursor-pointer">
                <Image
                  className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                  src={Cat1}
                  alt="cat1"
                />
                <div className="absolute bottom-[15%] left-[12%] w-full z-[9999]">
                  <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                    special product
                  </h4>
                  <h3
                    className={`text-[#080808] text-[22px] mt-[11px] font-normal mb-[10px] ${Pratafont.className}`}
                  >
                    Power Make Up Face
                  </h3>
                  <Link
                    href="#"
                    className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                  >
                    View Shop
                  </Link>
                </div>
              </div>
              <div className="grid grid-rows-1 md:grid-rows-2 gap-[30px]">
                <div className="w-full group overflow-hidden cursor-pointer relative">
                  <Image
                    className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                    src={Cat2}
                    alt="cat2"
                  />
                  <div className="absolute top-[23%] right-[10%] z-[9999]">
                    <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                      sale up to 50%
                    </h4>
                    <h3
                      className={`text-[#080808] text-[22px] sm:mt-[11px] font-normal sm:mb-[10px] ${Pratafont.className}`}
                    >
                      Natural Collagen Cream
                    </h3>
                    <Link
                      href="#"
                      className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                    >
                      View Shop
                    </Link>
                  </div>
                </div>
                <div className="w-full group overflow-hidden cursor-pointer relative">
                  <Image
                    className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                    src={Cat3}
                    alt="cat3"
                  />
                  <div className="absolute top-[25%] left-[12%] z-[9999]">
                    <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                      Natural Oils Body
                    </h4>
                    <h3
                      className={`text-[#080808] text-[22px] sm:mt-[11px] font-normal sm:mb-[10px] ${Pratafont.className}`}
                    >
                      Natural Oils Body
                    </h3>
                    <Link
                      href="#"
                      className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                    >
                      View Shop
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Category */}

        {/* New Arrivals */}
        <section className="pt-[100px] pb-[172px]">
          <Container>
            <div className="mb-[50px] text-center">
              <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
                product collection
              </h4>
              <h2
                className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
              >
                New Arrivals
              </h2>
              <Image
                className="text-center inline-block"
                src={CatLine}
                alt="catline"
              />
            </div>
          </Container>
          <NewArrival autoplay={true} />
        </section>
        {/* New Arrivals */}

        {/* Deal */}
        <section className="pt-[180px] pb-[195px] bg-deal bg-cover bg-center bg-no-repeat relative">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full">
            <Image src={star3} alt={star3} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full">
            <Image src={star3} alt={star3} />
          </div>
          <Container>
            <h4 className="font-normal text-sm leading-[179%] tracking-[3px] uppercase text-[#909090]">
              Season offers
            </h4>
            <h2
              className={`font-normal text-4xl md:text-5xl  leading-[120%] text-[#080808] my-2 ${Pratafont.className}`}
            >
              Deals Of The Day
            </h2>
            <p className="font-normal text-lg leading-[139%] text-[#666] max-w-[530px]">
              Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu
              pellentesque Aenean commodo.
            </p>
            <div className="mt-[45px] mb-[53px] flex gap-2 md:gap-5 items-center flex-wrap">
              <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
                <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                  29
                </h3>
                <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                  Days
                </p>
              </div>
              <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
                <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                  14
                </h3>
                <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                  Hours
                </p>
              </div>
              <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
                <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                  35
                </h3>
                <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                  Mins
                </p>
              </div>
              <div className="rounded-full h-[115px] w-[115px] bg-[#fff] flex justify-center items-center flex-col">
                <h3 className="font-normal text-2xl leading-[104%] text-center text-[#e7b053]">
                  43
                </h3>
                <p className="font-normal text-xs leading-[208%] uppercase text-center text-[#666]">
                  secs
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="font-normal text-[12px] tracking-[5px] leading-[409%] uppercase text-[#fff] bg-[#080808] py-[5px] px-[20px] inline-block"
            >
              VIEW OFFER
            </Link>
          </Container>
        </section>
        {/* Deal */}

        {/* Recommended For You */}
        <section className="pt-[100px] pb-[172px]">
          <Container>
            <div className="mb-[50px] text-center">
              <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
                product trending
              </h4>
              <h2
                className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
              >
                Recommended For You
              </h2>
              <Image
                className="text-center inline-block"
                src={CatLine}
                alt="catline"
              />
            </div>
          </Container>
          <NewArrival />
        </section>
        {/* Recommended For You */}

        {/* blog1 */}
        <section className="mb-[98px]">
          <Container className="grid grid-cols-1 md:grid-cols-2 justify-between items-center md:h-[266px] gap-[30px]">
            <div className="h-full overflow-hidden relative group cursor-pointer">
              <Image
                className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                src={Blog1}
                alt={Blog1}
              />
              <div className="absolute top-[25%] left-[12%] z-[9999]">
                <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                  Sale Up to 50%
                </h4>
                <h3
                  className={`text-[#080808] text-[22px] sm:mt-[15px] font-normal sm:mb-[22px] ${Pratafont.className}`}
                >
                  Sale Up to 50%
                </h3>
                <Link
                  href="#"
                  className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                >
                  View Shop
                </Link>
              </div>
            </div>
            <div className="h-full overflow-hidden relative group cursor-pointer">
              <Image
                className="w-full h-full bg-cover group-hover:scale-105 transition-all duration-[0.1s] ease-linear"
                src={Blog2}
                alt={Blog2}
              />
              <div className="absolute top-[25%] left-[12%] z-[9999]">
                <h4 className="text-[#909090] font-normal text-[12px] uppercase tracking-[3px]">
                  Body Oil Beauty
                </h4>
                <h3
                  className={`text-[#080808] text-[22px] sm:mt-[15px] font-normal sm:mb-[22px] ${Pratafont.className}`}
                >
                  100% Natural Extracts
                </h3>
                <Link
                  href="#"
                  className="text-[12px] tracking-[3px]  uppercase inline-block h-[30px] bg-[#e7b053] px-5 leading-[30px] text-[#fff] font-bold mt-5"
                >
                  View Shop
                </Link>
              </div>
            </div>
          </Container>
        </section>
        {/* blog1 */}

        {/* news */}
        <section className="mb-[60px]">
          <Container>
            <div className="mb-[50px] text-center">
              <h4 className="font-normal text-[14px] leading-[175%] uppercase text-center text-[#909090]">
                product trending
              </h4>
              <h2
                className={`py-5 font-normal text-[2.13rem] leading-[120%] text-center text-[#080808] ${Pratafont.className}`}
              >
                Recommended For You
              </h2>
              <Image
                className="text-center inline-block"
                src={CatLine}
                alt="catline"
              />
            </div>
          </Container>
          <News />
        </section>
        {/* news */}

        {/* newslatter */}
        <section className="pt-[75px] md:pb-[85px] pb-[185px] bg-newslatter bg-contain lg:bg-cover bg-center bg-no-repeat">
          <Container className="flex justify-center items-center">
            <div className="flex items-center flex-col md:flex-row md:gap-[60px] gap-y-5">
              <h3 className="font-normal sm:text-[2.13rem] xsm:text-[25px] text-[20px] leading-[100%] text-right text-[#080808]">
                Join our cosmetics news & offers
              </h3>
              <div className="flex items-center ">
                <div className="flex items-center px-[30px] bg-[#e4e4e4] w-[269px] h-[45px]">
                  <input
                    className="font-medium inline-block w-full text-[0.81rem] text-[#666] bg-transparent border-none box-shadow-none outline-none"
                    type="text"
                    placeholder="E-mail address"
                  />
                </div>
                <div className="flex justify-center items-center h-[45px] w-[70px] bg-[#080808] cursor-pointer">
                  <HiOutlineMail className="text-[#fff] text-[22px] inline-block" />
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* newslatter */}
      </div>
    </>
  );
};

export default page;
