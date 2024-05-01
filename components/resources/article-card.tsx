import { CourseDetailsResponse, MentorDetailsResources } from "@/types";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiCalendar } from "react-icons/ci";

export default function ArticleCard(props: any) {
  return (
    <div className="flex w-[337.5px] h-[395px] shadow-xl border-2 rounded-[5px] flex-col">
      <div className="w-[285.5px] h-[224px] mx-auto mt-[10px]">
        <img src="/career.svg/" alt="" />
      </div>
      <div className="flex ml-[30px] mt-[20px] gap-[10px]">
        <span className="w-[20px] h-[20px] flex">
          <CiCalendar size={20} color="#4B0082" />
        </span>
        <span className="w-[91.4px] h-[14px] text-[14px] font-medium text-[#6D6C80]">
          {props?.createdAt ? props?.createdAt : null}
        </span>
        <span className="w-[20px] h-[20px]">
          <CgProfile size={20} color="#4B0082" />
        </span>
        {/* <span className="w-[16.81px] h-[14px] font-medium text-[14px] text-[#6D6C80]">
        by
      </span>
      <span className="w-[42.99px] h-[14px] font-medium text-[14px] text-[#6D6C80]">
        Admin
      </span> */}
      </div>
      <div className="w-[270.31px] h-[52px] font-semibold text-[20px] text-[#161439] mx-auto mt-[20px]">
        {props?.title}
      </div>
    </div>
  );
}
