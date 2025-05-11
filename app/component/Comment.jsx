"use client";
import Profile from "@/public/commentProfile.png";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="mt-8 flex flex-col gap-y-10">
      <div className="flex items-start gap-x-5">
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
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
          </div>
          <div className="bg-[#e8ebf0] py-1 px-[10px] font-normal text-[0.81rem] leading-[108%] text-[#666]">Reply</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
