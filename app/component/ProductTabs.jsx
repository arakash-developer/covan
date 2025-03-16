"use client";
import Avatar from "@/public/avatar.png";
import { Tabs } from "antd";
import { Prata } from "next/font/google";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const ProductTabs = ({ product }) => {
  const items = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <h3
            className={`${Pratafont.className} font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer`}
          >
            Description
          </h3>
        </div>
      ),
      children: (
        <div className="flex justify-start my-10">
          <div className="">
            <p className="font-normal text-sm leading-[200%] text-[#666]">
              Curabitur egestas malesuada volutpat. Nunc vel vestibulum odio, ac
              pellentesque lacus. Pellentesque dapibus nunc nec est imperdiet, a
              malesuada sem rutrum. Sed quam odio, porta a finibus quis,
              sagittis aliquet leo. Nunc ornare metus urna, eu luctus velit
              placerat ut. Cras at porttitor lectus. Ut dapibus aliquam nibh, in
              imperdiet libero tincidunt sit amet. Morbi sodales fermentum nibh
              nec facilisis. Morbi pharetra varius velit, eget varius libero
              finibus quis. Quisque auctor varius lectus, lacinia rhoncus velit
              posuere vel. Cras condimentum tincidunt urna, sed vehicula ipsum
              dapibus et. Pellentesque pharetra ultrices varius. Sed viverra nec
              purus ut ornare.
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
      ),
    },
    {
      key: "2",
      label: (
        <div className="flex items-center">
          <h3
            className={`${Pratafont.className} font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer`}
          >
            Reviews
          </h3>
        </div>
      ),
      children: (
        <div className="flex justify-start my-10">
          <div>
            <h1 className="font-normal text-lg leading-[120%] uppercase text-[#080808]">
              1 review for
              <span className="text-[#e7b053]">Mac Color Brown</span>
            </h1>
            <div className="w-full bg-lime-200 grid grid-cols-1 md:grid-cols-2">
              {product.reviews?.map((data,index) => (
                <div key={index} className="review">
                  <div className="mt-8 flex items-start gap-3">
                    <div className="rounded-full w-14 h-14 overflow-hidden">
                      <Image
                        className="w-full h-full object-cover"
                        src={Avatar}
                        alt="Avatar"
                      />
                    </div>
                    <div className="">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-[#e7b053] text-base" />
                        <FaStar className="text-[#e7b053] text-base" />
                        <FaStar className="text-[#e7b053] text-base" />
                        <FaStar className="text-[#e7b053] text-base" />
                        <FaStar className="text-[#e7b053] text-base" />
                      </div>
                      <div className="flex items-center gap-4 mt-1 mb-4">
                        <h5 className="font-normal text-sm leading-[200%] uppercase text-[#080808]">
                          Wpbingo
                        </h5>
                        <p className="font-normal text-sm leading-[200%] text-[#909090]">
                          May 3, 2016
                        </p>
                      </div>
                      <p className="font-normal text-base leading-[175%] text-[#666] max-w-[470px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className="flex items-center">
          <h3
            className={`${Pratafont.className} font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer`}
          >
            Additional information
          </h3>
        </div>
      ),
      children: (
        <div className="flex justify-start my-10">Content of Tab Pane 3</div>
      ),
    },
    {
      key: "5",
      label: (
        <div className="flex items-center">
          <h3
            className={`${Pratafont.className} font-normal text-md leading-[175%] uppercase text-center cursor-pointer text-[#080808]`}
          >
            More Products
          </h3>
        </div>
      ),
      children: (
        <div className="flex justify-start my-10">Content of Tab Pane 5</div>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      className="product-tabs border-none"
      centered
    />
  );
};

export default ProductTabs;
