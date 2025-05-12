import Comment from "@/app/component/Comment";
import Container from "@/app/component/Container";
import Product5 from "@/public/image27.jpg";
import { Prata } from "next/font/google";
import Image from "next/image";
import { FaAngleRight, FaCommentDots } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const page = ({ params }) => {
  let { id } = params;
  console.log("params", id);

  return (
    <>
      {/* blog */}
      <section className="flex justify-center items-center flex-col py-[120px] bg-shop bg-cover bg-no-repeat bg-center">
        <h2
          className={`font-normal text-3xl leading-[120%] uppercase text-center text-[#fff] ${Pratafont.className}`}
        >
          Blog
        </h2>
        <div className="flex items-center gap-2">
          <p className="font-normal text-[0.81rem] leading-[176%] text-[#fff]">
            Home
          </p>
          <FaAngleRight className="font-normal text-[0.81rem] leading-[176%] text-[#fff]" />
          <p className="font-normal text-[0.81rem] leading-[179%] text-[#e7b053]">
            Traveling Solo Is Awesome
          </p>
        </div>
      </section>
      {/* blog */}

      <div className="my-[110px]">
        <Container>
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-[35px]">
            <div className="w-full">
              <div className="w-full block cursor-pointer">
                <div className="w-full xl:h-[700px] md:h-[400px] h-[300px] overflow-hidden">
                  <Image
                    src={Product5}
                    alt={Product5}
                    className="w-full h-full bg-cover"
                  />
                </div>
                <div className="mt-5">
                  <h2
                    className={`font-normal text-[2.06rem] leading-[130%] capitalize text-[#080808] ${Pratafont.className}`}
                  >
                    Traveling Solo Is Awesome
                  </h2>
                  <div className="flex items-center sm:gap-[50px] gap-2 mt-2 mb-5">
                    <div className="flex items-center gap-[3px]">
                      <MdAccessTime className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        August 27, 2020
                      </p>
                    </div>
                    <div className="flex items-center gap-[3px]">
                      <FaCommentDots className="font-normal text-xs leading-[100%] capitalize text-[#e7b053]" />
                      <p className="font-normal text-xs leading-[175%] capitalize text-[#909090]">
                        5 Comments
                      </p>
                    </div>
                  </div>
                  <p className="font-normal text-sm leading-[175%] text-[#666] w-full mb-[33px]">
                    Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla
                    id purus lacinia imperdiet commodo sit amet nunc. Interdum
                    et malesuada fames ac ante ipsum primis in faucibus. Aenean
                    ultricies et risus in porta. Nam finibus, nisl ut sodales
                    ultrices, libero urna condimentum tortor, a commodo tortor
                    tortor a sem. Donec vehicula neque vel nisl malesuada
                    blandis.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-content-between items-center py-[33px] px-10 gap-x-6">
                <div className="border-r-[4px] border-[#E7B053] h-[114px]"></div>
                <p className="italic font-bold text-[0.81rem] leading-[182%] text-[#080808]">
                  In mattis scelerisque magna, ut tincidunt ex. Quisque nibh
                  urna, pre in tristique in, bibendum sed libero. Pellent mauris
                  nunc, pretium non erat non, finibus are tristique dui. Ut sed
                  sem orci. Interdum et malesuada fames ac ante ipsum primis.
                </p>
              </div>
              <p className="font-normal text-sm leading-[175%] text-[#666] w-full mb-[33px]">
                Quisque a ante massa. Donec molestie varius dui nec ornare.
                Morbi iaculis consequat tempus. Curabitur at est mollis,
                ultrices dolor vitae, scelerisque augue. Nam commodo nisl
                tortor, bibendum consequat ante mollis quis. Praesent non auctor
                dui. Vivamus dui arcu, vulputate sit amet nisi eget, iaculis
                vehicula mi. tortor a sem. Donec vehicula neque vel nisl
                malesuada blandis.
              </p>
              <div className="border-b border-[#8F8F8F] opacity-25"></div>
              <div className="pt-[70px] pb-[36px]">
                <h2 className={`font-normal text-2xl leading-[120%] text-[#080808] ${Pratafont.className}`}>
                  4 Comments
                </h2>
                <Comment />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default page;
