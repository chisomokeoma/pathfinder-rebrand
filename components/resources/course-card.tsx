import { CourseDetailsResponse, MentorDetailsResources } from "@/types";
import React from "react";

export function CourseCard(props: any) {
  return (
    <div className="w-[330px] h-[454px] rounded-[5px] border-2 shadow-xl flex flex-col">
      <div className="w-[278px] h-[190px] mx-auto mt-[10px]">
        <img src="/pro.svg/" alt="" />
      </div>
      <div className="flex gap-[85px] mx-auto mt-[10px]">
        <span className="w-fit h-fit p-[2px] bg-[#EFEFF2] text-[#161439] rounded-[15px] text-[14px] text-center">
          {props?.category}
        </span>
        {/* <span className="text-[14px]">&#40;4.8 Reviews&#41;</span> */}
      </div>
      <div className="w-[268.97px] h-[50.4px] flex mx-auto mt-[30px] md:font-semibold text-[18px] text-[#161439]]">
        {props?.title}{" "}
      </div>
      {/* <div className="flex gap-[5px] ml-[30px] mt-[20px]">
                <span className="w-[18.44px] h-[15px] font-regular text-[15px] text-[#6D6C80]">
                  By
                </span>
                <span className="w-[145px] h-[15px]">{props?.na}</span>
              </div> */}
      <div className="flex ml-[25px] mt-[30px] gap-[30px]">
        <span>
          <button className="w-[133.45px] h-[40px] bg-[#4B0082] rounded-[15px] text-[#ffff]">
            Enroll Now &rarr;
          </button>
        </span>
        <span className="w-[125px] h-[20px] text-[#5751E1] mt-[8px] font-bold text-[16px]">
          {props?.price}
        </span>
      </div>
    </div>
  );
}
