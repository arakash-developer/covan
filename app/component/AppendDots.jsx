"use client";
import React from "react";
import Slider from "react-slick";

function AppendDots() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="bg-red-300 h-10 w-full">
          <h3>1</h3>
        </div>
        <div className="bg-red-300 h-10 w-full">
          <h3>1</h3>
        </div>
        <div className="bg-red-300 h-10 w-full">
          <h3>1</h3>
        </div>
       
      </Slider>
    </div>
  );
}
export default AppendDots;
