import React, { Suspense } from "react";
import MentorRequestBtn from "../mentors/mentor-request-btn";
import { Avatar } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import RequestSkeleton from "../skeletons/request-skeleton";

const containerList = [
  {
    headText: "Olamide Adeyemi",
    subText: "UX Design Lead",
    picture: "/tina.svg",
  },
  {
    headText: "Ngozi Onwuka",
    subText: "Degital Marketing",
    picture: "/tina.svg",
  },
  {
    headText: "Olivia Mia",
    subText: "Web Design",
    picture: "",
  },
  {
    headText: "Mohammed Ali",
    subText: "meeting with Tony",
    picture: "",
  },
];

export function MenteeMentorshipRequest() {
  const { data: requestList, isFetching } = useQuery({
    queryFn: () =>
      builder.use().mentors.mentorship_requests.pending_mentorship_requests(),
    queryKey:
      builder.mentors.mentorship_requests.pending_mentorship_requests.get(),
    select: ({ data }) => data,
  });

  return (
    <main>
      <div className="w-[987px] h-[1445px] mx-auto mt-[100px] flex flex-col gap-[40px] overflow-auto">
        <section>
          <h4 className=" text-[#161439] font-semibold text-[36px]">
            Requests for Mentorship
          </h4>
          <p>Awaiting approval from Mentor</p>
        </section>
        {isFetching ? (
          <RequestSkeleton />
        ) : (
          requestList?.map((item, index) => (
            <div key={index} className=" px-[31px] py-[30px] flex flex-col gap-[40px] shadow-xl bg-[#F6F6F6]   justify-center overflow-auto ">
              <div className=" flex gap-[42px] items-center pt-[30px] ">
                <Avatar size="xl" src={item?.profilePicture} />
                <article className=" flex flex-col">
                  <p className="font-semibold text-[16px] text-[#2E1110]">
                    {item?.name}
                  </p>

                  <p className=" font-medium text-[13px] text-purple">
                    {item?.industry}
                  </p>
                </article>
              </div>
              <Suspense>
                <MentorRequestBtn id={item?.id} />
              </Suspense>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
