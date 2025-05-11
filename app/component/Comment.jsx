"use client";
import Profile from "@/public/commentProfile.png";
import { Prata } from "next/font/google";
import Image from "next/image";

const Pratafont = Prata({
  weight: "400",
  subsets: ["latin"],
});
const Comment = () => {
  return (
    <div className="">
      <div className="mt-8 flex flex-col gap-y-10">
        <div className="comment flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
        <div className="comment flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
        <div className="sub-comment ml-[90px] flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
        <div className="sub-comment ml-[90px] flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
        <div className="comment flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
        <div className="comment flex items-start gap-x-5 border-b border-[#8F8F8F40] pb-10">
          <Image
            src={Profile}
            alt="profile"
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="flex justify-between items-start gap-x-2">
            <div className="">
              <h3 className="font-normal text-[0.94rem] leading-5 uppercase text-[#080808]">
                Wpbingo
              </h3>
              <h4 className="font-normal text-[0.81rem] leading-[138%] text-stone-500/[0.7] mt-1">
                June 15, 2018
              </h4>
              <p className="mt-3 font-normal text-[0.94rem] leading-5 text-[#666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum. Morbi ornare lectus quis justo gravida
                semper. Nulla tellus mi, vulputate adipiscing cursus eu,
                suscipit id nulla.
              </p>
            </div>
            <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">
              Reply
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[70px]">
        <h3
          className={`font-normal text-2xl leading-[120%] text-[#080808] ${Pratafont.className}`}
        >
          Leave a Reply
        </h3>
        <p className="mt-[22px] mb-[26px] font-normal text-sm leading-[140%] text-[#909090]">
          Your email address will not be published.{" "}
        </p>
        <form action="" className="flex flex-col gap-y-5">
          <textarea
            className="bg-[#EDEDED80] border border-[#eee] w-full h-60 pl-5 pt-3 outline-none font-normal text-sm leading-[200%] text-[#909090]"
            name=""
            id=""
          >
            Comment
          </textarea>
          <div className="flex gap-x-[30px] items-center">
            <input
              className="bg-[#EDEDED80] border border-[#eee] w-1/2 px-[21px] py-[14px] outline-none font-normal text-sm leading-[200%] text-[#909090]"
              type="text"
              placeholder="Your Name *"
            />
            <input
              className="bg-[#EDEDED80] border border-[#eee] w-1/2 px-[21px] py-[14px] outline-none font-normal text-sm leading-[200%] text-[#909090]"
              type="email"
              placeholder="Your Name *"
            />
          </div>
          <input
            className="bg-[#EDEDED80] border border-[#eee] w-full px-[21px] py-[14px] outline-none font-normal text-sm leading-[200%] text-[#909090]"
            type="email"
            placeholder="Website"
          />
          <div className="">
            <button className="font-normal text-xs leading-[125%] uppercase text-center text-[#fff] inline-block bg-[#e7b053] py-[13px] px-[20px] tracking-[0.173em]">
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
