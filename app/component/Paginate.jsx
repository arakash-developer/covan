"use client";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Item2 from "../component/Item2";
import getAllProduct from "../utils/getAllProduct";

function Items({ currentItems }) {
  return (
    <>
      <div className=" grid justify-between grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {currentItems &&
          currentItems.map((item, index) => (
            <div key={index}>
              <Item2 className="w-full xsm:w-auto" Name={item?.title} thumbnail={item?.thumbnail} id={item.id} />
            </div>
          ))}
      </div>
    </>
  );
}

const Paginate = ({ itemsPerPage, catagory }) => {
  let [items, setItems] = useState([]);
  let getdata = async () => {
    let response = await getAllProduct();
    setItems(response.products);
  };
  useEffect(() => {
    getdata();
  }, []);
  console.log(items);

  // useEffect(() => {
  //   let Products = [];
  //   for (let i = 1; i <= 200; i++) {
  //     Products.push(i);
  //   }
  //   setItems(Products);
  // }, []);
  // useEffect(() => {
  //     let getdata = async () => {
  //         let response = await fetch("https://dummyjson.com/products");
  //         let data = await response.json();
  //         let newdata = data.products;
  //         setItems(newdata);

  //         let cat = newdata.filter((data)=>{
  //             return data.category == catagory
  //         })
  //         setItems(cat)

  //         if(catagory == "regular"){
  //             setItems(newdata)
  //         }
  //     }
  //     getdata();
  // },[catagory])

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex flex-col sm:flex-row md:items-end items-center justify-between mt-[50px]">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          previousClassName="hidden"
          nextClassName="hidden"
          containerClassName="ul flex gap-x-[15px]"
          pageClassName="w-9 h-9 border border-[1px] border-[#E7B053] text-[#767676]"
          pageLinkClassName="h-full w-full flex justify-center items-center font-normal hover:text-[#767676] text-sm font-dm hover:no-underline"
          activeClassName="bg-[#E7B053] text-[#fff] border-[#E7B053]"
          renderOnZeroPageCount={null}
        />
        <p>
          Products from {itemOffset + 1} to{" "}
          {endOffset > items.length ? items.length : endOffset} of{" "}
          {items.length}
        </p>
      </div>
    </>
  );
};

export default Paginate;
