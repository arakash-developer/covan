"use client";
import Img1 from "@/public/image11.jpg";
import { Image } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="rightarrow absolute  right-[-30px] top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] flex justify-center items-center group"
      onClick={onClick}
    >
      <FaArrowRightLong className="text-[#ccc] text-[20px] group-hover:text-[#fff] inline-block" />
    </div>
  );
}

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className="leftarrow absolute right-[80px] -top-10 2xl:right-full z-[99999] 2xl:top-1/2 2xl:-translate-y-1/2 cursor-pointer
//       w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] flex justify-center items-center group"
//       onClick={onClick}
//     >
//       <FaArrowLeftLong className="text-[#ccc] text-[20px] group-hover:text-[#fff] inline-block" />
//     </div>
//   );
// }
const ProductLens = () => {
  var settings = {
    arrows: true,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="w-full bg-red-300">
      <Image className="h-[668px] w-full object-cover" src={Img1.src} />
      <div className="suggetion w-full mt-5 cursor-pointer ">
        <Slider {...settings} className="h-[190px] flex bg-green-300 ">
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
          <Image className="w-full" src={Img1.src} preview={false} />
        </Slider>
      </div>
    </div>
  );
};

export default ProductLens;
