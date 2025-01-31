import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Item2 from './Item2';





function Items({ currentItems }) {


    return (
        <>
            <div className="grid grid-cols-3 gap-[40px] pl-1">
                {currentItems &&
                    currentItems.map((item, index) => (
                        <div key={index}>
                            <Item className=''
                                productid={item.id}
                                productTitle={item.title}
                                productImg={item.thumbnail}
                                productPrice={item.price}
                                productTag={item.discountPercentage}
                                productColor={item.brand}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}


const Paginate = ({ itemsPerPage, catagory }) => {
    let [items, setItems] = useState([]);

    useEffect(() => {
        let getdata = async () => {
            let response = await fetch("https://dummyjson.com/products");
            let data = await response.json();
            let newdata = data.products;
            setItems(newdata);

            let cat = newdata.filter((data)=>{
                return data.category == catagory 
            })
            setItems(cat)
            
            if(catagory == "regular"){
                setItems(newdata)
            }
        }
        getdata();
    },[catagory])

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
            <div className="flex items-end justify-between mt-[50px]">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    previousClassName="hidden"
                    nextClassName="hidden"
                    containerClassName="ul flex gap-x-[15px]"
                    pageClassName="w-9 h-9 border border-[1px] border-[#F0F0F0] text-[#767676]"
                    pageLinkClassName="h-full w-full flex justify-center items-center font-normal hover:text-[#767676] text-sm font-dm hover:no-underline"
                    activeClassName="bg-[#262626] text-[#fff] border-[#262626]"
                    renderOnZeroPageCount={null}
                />
                <p>Products from {itemOffset + 1} to {endOffset > items.length ? items.length : endOffset} of {items.length}</p>
            </div>
        </>
    );
}

export default Paginate