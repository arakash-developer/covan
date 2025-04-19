"use client";
import { Image } from "antd";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="rightarrow absolute right-0 md:right-[-80px] top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] hidden md:flex justify-center items-center group"
      onClick={onClick}
    >
      <FaArrowRightLong className="text-[#ccc] text-[20px] group-hover:text-[#fff] inline-block" />
    </div>
  );
}

const ProductLens = ({ imageArray }) => {
  // Convert imageURL into full src path
  let imageArrays = imageArray?.map((item) => ({
    id: item.id,
    src: `http://api.seoumi.com/api/v1/frontend/public/images/${item.imageURL}`,
  }));

  let [productImage, setProductImage] = useState(0);
  const handlerPicture = (index = 0) => () => {
    setProductImage(index);
  };

  const settings = {
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
    <div className="productLens w-full">
      <div className="w-full h-full lg:w-[650px] flex justify-center items-center bg-[#F6F6F6]">
        <Image
          className="w-full lg:w-[650px] h-[650px]"
          src={imageArrays?.[productImage]?.src}
          alt={`Product ${imageArrays?.[productImage]?.id}`}
        />
      </div>

      {imageArrays?.length >= 3 ? (
        <div className="suggetion w-full mt-5 cursor-pointer">
          <Slider
            {...settings}
            className="h-[150px] w-full flex relative left-4"
          >
            {imageArrays.map((item, index) => (
              <Image
                onClick={handlerPicture(index)}
                key={item.id}
                preview={false}
                className="sug_image w-[150px] h-[150px] border border-transparent bg-[#F6F6F6] hover:border-[#e7b053]"
                src={item.src}
                height={150}
              />
            ))}
          </Slider>
        </div>
      ) : (
        <div className="suggetion w-full mt-5 cursor-pointer h-[150px] bg-[#F6F6F6] flex justify-center items-center">
          <h2 className="text-[#666]">Image Not Found</h2>
        </div>
      )}
    </div>
  );
};

export default ProductLens;
