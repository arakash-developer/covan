"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from "./Container";

function AppendDots() {
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="dot">{i + 1}</div>,
  };
  return (
    <>
      <div className="bannar">
        <Slider {...settings}>
          <div className="pt-[130px] pb-[285px] bg-bannar bg-cover bg-no-repeat bg-center">
            <Container className="relative">
              <h1 className="max-w-[566px] font-normal text-[4.38rem] leading-[100%] text-[#080808]">
                The Beauty from Natural
              </h1>
              <p className="max-w-[417px] mt-[37px] mb-[56px] font-normal text-lg leading-[156%] text-[#666]">
                You can do anything here. So don’t worry about it. In your world
                you can create.
              </p>
              <Link
                href="#"
                className="py-4 px-8 bg-[#e7b053] tracking-[3px] font-normal text-[0.69rem] leading-[409%] uppercase text-[#fff]"
              >
                read more
              </Link>
            </Container>
          </div>
          <div className="pt-[130px] pb-[285px] bg-bannar2 bg-cover bg-no-repeat bg-center">
            <Container className="relative">
              <h1 className="max-w-[566px] font-normal text-[4.38rem] leading-[100%] text-[#ffffff]">
                The Beauty from Natural
              </h1>
              <p className="max-w-[417px] mt-[37px] mb-[56px] font-normal text-lg leading-[156%] text-[#ffffff]">
                You can do anything here. So don’t worry about it. In your world
                you can create.
              </p>
              <Link
                href="#"
                className="py-4 px-8 bg-[#e7b053] tracking-[3px] font-normal text-[0.69rem] leading-[409%] uppercase text-[#fff]"
              >
                read more
              </Link>
            </Container>
          </div>
          <div className="pt-[130px] pb-[285px] bg-bannar3 bg-cover bg-no-repeat bg-center">
            <Container className="relative">
              <h1 className="max-w-[566px] font-normal text-[4.38rem] leading-[100%] text-[#080808]">
                The Beauty from Natural
              </h1>
              <p className="max-w-[417px] mt-[37px] mb-[56px] font-normal text-lg leading-[156%] text-[#666]">
                You can do anything here. So don’t worry about it. In your world
                you can create.
              </p>
              <Link
                href="#"
                className="py-4 px-8 bg-[#e7b053] tracking-[3px] font-normal text-[0.69rem] leading-[409%] uppercase text-[#fff]"
              >
                read more
              </Link>
            </Container>
          </div>
        </Slider>
      </div>
    </>
  );
}
export default AppendDots;
