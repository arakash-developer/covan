"use client";
import getSingleProduct from "@/app/utils/getSingleProduct";
import { Image } from "antd";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="rightarrow absolute right-0 md:right-[-80px] top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] hidden md:flex justify-center items-center group"
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
const ProductLens = ({ id = 1 }) => {
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
  let [product, setProduct] = useState([]);
  let getData = async () => {
    let products = await getSingleProduct(id);
    setProduct(products);
  };
  useEffect(() => {
    getData();
  }, []);
  let [productImage, setProductImage] = useState(0);
  let handlerPicture =
    (index = 0) =>
    () => {
      setProductImage(index);
    };

  return (
    <div className="productLens w-full">
      <div className="w-full h-full justify-center items-center">
        <Image
          className="w-full !lg:w-[650px] !h-[650px] bg-[#F6F6F6]"
          src={product.images?.[productImage]}
          alt={product.title}
        />
      </div>
      <div className="suggetion w-full mt-5 cursor-pointer">
        <Slider {...settings} className="h-[150px] w-full flex relative left-4">
          {product.images?.map((item, index) => (
            <Image
              onClick={() => {
                if (index >= 0 && index < product.images.length) {
                  handlerPicture(index)();
                }
              }}
              key={index}
              preview={false}
              className="sug_image w-[150px] h-[150px] border  border-transparent bg-[#F6F6F6] hover:border-[#e7b053]"
              src={item}
              height={150}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductLens;
