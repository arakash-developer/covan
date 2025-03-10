"use client";

import Img1 from "@/public/image11.jpg";
import { Image } from "antd";
// import Image from "next/image";
const ProductLens = () => {
  return (
    <>
      <Image className="border-2 w-full h-[668px]" src={Img1.src} width={500} />
      <div className="mt-5">a</div>
    </>
  );
};

export default ProductLens;
