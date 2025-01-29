"use client";
import Container from "@/app/component/Container";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Item from "./Item";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="rightarrow absolute left-full top-1/2 -translate-y-1/2 cursor-pointer w-10 h-10 hover:bg-[#e7b053] border border-[#ccc] hover:border-[#e7b053] flex justify-center items-center group"
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
      className="leftarrow absolute right-full z-[99999] top-1/2 -translate-y-1/2 cursor-pointer
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
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
  return (
    <>
      <div className="arrivals">
        {/* <Container className="mb-8 bg-fuchsia-600">App</Container> */}
        <Container className="max-w-[1296px]">
          <Slider {...settings}>
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
            <Item className="w-full px-[30px]" />
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default App;
