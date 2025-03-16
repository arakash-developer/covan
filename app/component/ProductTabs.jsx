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
    children: <div className="flex justify-start">Content of Tab Pane 1</div>,
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
    children: <div className="flex justify-start">Content of Tab Pane 2</div>,
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
    children: <div className="flex justify-start">Content of Tab Pane 3</div>,
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
    children: <div className="flex justify-start">Content of Tab Pane 4</div>,
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
    children: <div className="flex justify-start">Content of Tab Pane 5</div>,
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

