"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogItems from "./layers/BlogItems";
function Items({ currentItems }) {
  return (
    <>
      <div className="w-full flex flex-col gap-[80px]">
        {currentItems &&
          currentItems.map((item, index) =>(
             <BlogItems key={index} />
            ))}
      </div>
    </>
  );
}

const BlogPaginate = ({ itemsPerPage = 5 }) => {
  let [items, setItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ]);
  



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
      <div
        className={`flex-col sm:flex-row md:items-end items-center justify-between mt-[50px] `}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          previousClassName="hidden"
          nextClassName="hidden"
          containerClassName="ul flex gap-x-[15px] justify-center items-center"
          pageClassName="w-9 h-9 border border-[1px] border-[#E7B053] text-[#767676]"
          pageLinkClassName="h-full w-full flex justify-center items-center font-normal hover:text-[#767676] text-sm font-dm hover:no-underline"
          activeClassName="bg-[#E7B053] text-[#fff] border-[#E7B053]"
          renderOnZeroPageCount={null}
        />
        {/* <p>
          Products from {itemOffset + 1} to{" "}
          {endOffset > items.length ? items.length : endOffset} of{" "}
          {items.length}
        </p> */}
      </div>
    </>
  );
};

export default BlogPaginate;
