"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import BlogItems from "./layers/BlogItems";
function Items({ currentItems }) {
  return (
    <>
      <div className="w-full flex flex-col gap-[80px]">
        {currentItems &&
          currentItems.map((item, index) => (
            <BlogItems key={index} item={item.id} title={item.title} description={item.description} date={item.date} comment={item.comment} />
          ))}
      </div>
    </>
  );
}

const BlogPaginate = ({ itemsPerPage = 5 }) => {
  let [items, setItems] = useState([
    {
      id: 1,
      title: "Traveling Solo Is Awesome",
      description:
        "Donec at nunc et felis vehicula imperdiet. Aliquam ac nulla id purus lacinia imperdiet commodo sit amet nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ultricies et risus in porta. Nam finibus, nisl ut sodales ultrices, libero urna condimentum tortor, a commodo tortor tortor a...",
      date: "August 27, 2020",
      comment: "4 Comments",
    },
    {
      id: 2,
      title: "The Benefits of Early Morning Workouts",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate arcu vel lacus scelerisque, non facilisis urna tincidunt.",
      date: "September 1, 2020",
      comment: "7 Comments",
    },
    {
      id: 3,
      title: "Exploring New Places: A Journey to Remember",
      description:
        "Cras in faucibus elit. Curabitur vel neque et velit facilisis malesuada. Integer feugiat interdum dui, ac aliquam lorem sollicitudin id.",
      date: "September 10, 2020",
      comment: "12 Comments",
    },
    {
      id: 4,
      title: "How to Maintain a Healthy Work-Life Balance",
      description:
        "Ut vulputate sapien eget ante maximus, at laoreet mi viverra. Nulla facilisi. Mauris sed sem sit amet turpis fermentum consectetur.",
      date: "September 15, 2020",
      comment: "9 Comments",
    },
    {
      id: 5,
      title: "The Ultimate Guide to Traveling on a Budget",
      description:
        "Aliquam erat volutpat. Morbi nec arcu sit amet risus pretium tristique a id ligula. Suspendisse potenti. In molestie, magna sit amet pellentesque.",
      date: "October 3, 2020",
      comment: "15 Comments",
    },
    {
      id: 6,
      title: "Tech Innovations You Should Know About",
      description:
        "Nulla condimentum leo sit amet fringilla bibendum. Integer at quam non ipsum egestas aliquet. Aenean at est neque.",
      date: "October 10, 2020",
      comment: "5 Comments",
    },
    {
      id: 7,
      title: "How to Start a Side Hustle",
      description:
        "Sed interdum arcu at lectus cursus, ac cursus magna volutpat. Integer tincidunt quam a quam interdum, eget venenatis risus iaculis.",
      date: "October 18, 2020",
      comment: "8 Comments",
    },
    {
      id: 8,
      title: "The Best Places to Visit in 2021",
      description:
        "Etiam sit amet est sit amet tortor fermentum fringilla. Vestibulum ultricies risus nec odio faucibus, vitae sodales libero elementum.",
      date: "October 25, 2020",
      comment: "6 Comments",
    },
    {
      id: 9,
      title: "Mindfulness Techniques for Stress Relief",
      description:
        "Fusce vitae tortor vel libero feugiat accumsan. Morbi aliquet dolor ut augue facilisis, id cursus elit fringilla. Ut molestie viverra sem.",
      date: "November 1, 2020",
      comment: "10 Comments",
    },
    {
      id: 10,
      title: "Why You Should Learn a New Language",
      description:
        "Donec tincidunt suscipit ex, ut varius odio viverra vel. Curabitur ultricies nisl eget nulla tempus, nec feugiat eros bibendum.",
      date: "November 5, 2020",
      comment: "14 Comments",
    },
    {
      id: 11,
      title: "The Power of Reading Books",
      description:
        "Vivamus condimentum purus non elit tempor, ut porttitor turpis sodales. Integer sed laoreet ligula, ac laoreet urna. Sed suscipit leo.",
      date: "November 15, 2020",
      comment: "7 Comments",
    },
    {
      id: 12,
      title: "5 Steps to Achieving Your Goals",
      description:
        "Sed a cursus erat. Quisque laoreet eu lectus et laoreet. Proin condimentum maximus libero ac fermentum. Sed nec lobortis arcu.",
      date: "November 22, 2020",
      comment: "9 Comments",
    },
    {
      id: 13,
      title: "The Importance of Mental Health",
      description:
        "Cras pretium dui in nisl convallis, a pharetra odio pharetra. Vestibulum euismod lectus at velit convallis, ut aliquet ante hendrerit.",
      date: "December 3, 2020",
      comment: "5 Comments",
    },
    {
      id: 14,
      title: "How to Build a Strong Network",
      description:
        "Curabitur vehicula risus et orci porttitor, vel sodales urna congue. Etiam tristique odio in sapien elementum, vitae tempus lorem sollicitudin.",
      date: "December 10, 2020",
      comment: "11 Comments",
    },
    {
      id: 15,
      title: "Exploring the World of Digital Marketing",
      description:
        "Pellentesque feugiat ultricies nulla, a gravida enim suscipit ut. Nullam tristique dui ut orci varius, et luctus neque dapibus.",
      date: "December 20, 2020",
      comment: "20 Comments",
    },
    {
      id: 16,
      title: "How to Improve Your Productivity",
      description:
        "Vestibulum a dui eu ante vestibulum volutpat. In interdum metus in feugiat pharetra. Donec iaculis, ex non mollis faucibus, dui.",
      date: "January 5, 2021",
      comment: "6 Comments",
    },
    {
      id: 17,
      title: "Healthy Eating Habits for Busy People",
      description:
        "Pellentesque vitae vehicula ante, eget laoreet odio. Nulla euismod purus nec sapien convallis, a fringilla risus tristique.",
      date: "January 12, 2021",
      comment: "8 Comments",
    },
    {
      id: 18,
      title: "What to Pack for Your First Hiking Trip",
      description:
        "Cras sit amet turpis feugiat, suscipit nisl eget, aliquet metus. Nam auctor tortor at bibendum auctor. Donec condimentum nunc leo.",
      date: "January 20, 2021",
      comment: "4 Comments",
    },
    {
      id: 19,
      title: "How to Stay Motivated During Tough Times",
      description:
        "Morbi convallis mi nec justo condimentum, at efficitur odio tempus. Ut et diam ut felis tincidunt dictum at eget turpis.",
      date: "February 2, 2021",
      comment: "7 Comments",
    },
    {
      id: 20,
      title: "The Future of Artificial Intelligence",
      description:
        "Sed tincidunt lectus eu ex blandit, et pretium nisi posuere. Morbi sed dui in libero laoreet mollis eget sit amet velit.",
      date: "February 10, 2021",
      comment: "9 Comments",
    },
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
