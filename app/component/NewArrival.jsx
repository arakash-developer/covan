"use client";
import Container from "@/app/component/Container";
import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import getAllProduct from "../utils/getAllProduct";
import Item from "./Item";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="rightarrow absolute right-[43px] -top-10 2xl:left-full 2xl:top-1/2 2xl:-translate-y-1/2 cursor-pointer w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] flex justify-center items-center group"
      onClick={onClick}
    >
      <FaArrowRightLong className="text-[#ccc] text-[20px] group-hover:text-[#fff] inline-block" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="leftarrow absolute right-[80px] -top-10 2xl:right-full z-[99999] 2xl:top-1/2 2xl:-translate-y-1/2 cursor-pointer
      w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] flex justify-center items-center group"
      onClick={onClick}
    >
      <FaArrowLeftLong className="text-[#ccc] text-[20px] group-hover:text-[#fff] inline-block" />
    </div>
  );
}

const App = () => {
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
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let [allProducts, setAllProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let res = await getAllProduct();
    setAllProduct(res.products);
  };

  return (
    <>
      <div className="arrivals">
        {/* <Container className="mb-8 bg-fuchsia-600">App</Container> */}
        <Container className="max-w-[1296px]">
          <Slider {...settings}>
            {allProducts?.map((item) => (
              <Item
                key={item.id}
                className="w-full px-[30px]"
                Name={item.name}
                Price={item.price}
                thumbnail={item.thumbnail}
                id={item.id}
                title={item.title}
              />
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default App;
