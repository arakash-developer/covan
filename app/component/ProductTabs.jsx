"use client";
import { Tabs } from "antd";
import { Prata } from "next/font/google";

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
            malesuada sem rutrum. Sed quam odio, porta a finibus quis, sagittis
            aliquet leo. Nunc ornare metus urna, eu luctus velit placerat ut.
            Cras at porttitor lectus. Ut dapibus aliquam nibh, in imperdiet
            libero tincidunt sit amet. Morbi sodales fermentum nibh nec
            facilisis. Morbi pharetra varius velit, eget varius libero finibus
            quis. Quisque auctor varius lectus, lacinia rhoncus velit posuere
            vel. Cras condimentum tincidunt urna, sed vehicula ipsum dapibus et.
            Pellentesque pharetra ultrices varius. Sed viverra nec purus ut
            ornare.
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
            Sed molestie orci sem, at semper est molestie ac. Suspendisse cursus
            feugiat erat, eu posuere massa. Nullam posuere nibh non eros
            lobortis tempus. Maecenas dignissim elementum massa, vel accumsan
            urna elementum in. Suspendisse at dui euismod, rhoncus eros non,
            imperdiet ipsum. Vestibulum vehicula vel turpis et vestibulum. Ut
            porta et ex maximus malesuada.
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
        <div className="">
          <h1 className="font-normal text-lg leading-[120%] uppercase text-[#080808]">1 review for <span>Mac Color Brown</span></h1>
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
    key: "4",
    label: (
      <div className="flex items-center">
        <h3
          className={`${Pratafont.className} font-normal text-md leading-[175%] uppercase text-center text-[#080808] cursor-pointer`}
        >
          Reviews (1)
        </h3>
      </div>
    ),
    children: (
      <div className="flex justify-start my-10">Content of Tab Pane 4</div>
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
const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});

const ProductTabs = () => {
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
