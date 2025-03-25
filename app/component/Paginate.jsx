"use client";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import getProducts from "../utils/getProducts";
import Item from "./Item";

function Items({ currentItems }) {
  return (
    <>
      <div className="grid justify-between grid-cols-1 xsm:grid-cols-2 md:grid-cols-3 gap-[30px]">
        {currentItems &&
          currentItems.map((item, index) => (
            <div key={index}>
              <Item
                className="w-full xsm:w-auto"
                Name={item?.title}
                thumbnail={`https://bcovan.onrender.com/api/v1/frontend/public/images/${item?.imageArray[0]}`}
                id={item._id}
                Price={item?.amount}
              />
            </div>
          ))}
      </div>
    </>
  );
}

const Paginate = ({ itemsPerPage, catagory }) => {
  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState();

  let getdata = async () => {
    setLoading(true);
    let response = await getProducts();
    let product = response?.success.data;
    console.log(product);
    console.log(product.imageArray);

    console.log(product);
    if (catagory) {
      let filpro = product.filter((data) => data.category == catagory);
      setItems(filpro);
    } else {
      setItems(product);
    }
    setLoading(false);
  };
  useEffect(() => {
    getdata();
  }, [catagory]);

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
        className={`flex-col sm:flex-row md:items-end items-center justify-between mt-[50px]  ${
          loading ? "hidden" : "flex"
        } `}
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
