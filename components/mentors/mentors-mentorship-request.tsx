import React, { Suspense, useContext } from "react";
import MentorRequestBtn from "../mentors/mentor-request-btn";
import { Avatar, Button } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import AcceptRequest from "../modals/accept-request";
import { ModalContext } from "../provider/modal-provider";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import RejectRequest from "../modals/reject-request";
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

export default function MentorsMentorshipRequest() {
  const { data: requestList, isFetching } = useQuery({
    queryFn: () =>
      builder.use().mentors.mentorship_requests.pending_mentorship_requests(),
    queryKey:
      builder.mentors.mentorship_requests.pending_mentorship_requests.get(),
    select: ({ data }) => data,
  });
  console.log(requestList, "request");

  const { setModalState } = useContext(ModalContext);

  return (
    <main>
      <div className="w-[987px] h-[1445px] mx-auto mt-[100px] flex flex-col gap-[40px] overflow-auto">
        <section>
          <h4 className="w-[395px] h-[72px] text-[#161439] font-semibold text-[36px]">
            Mentorship Requests
          </h4>
          <p>Awaiting your approval</p>
        </section>
        {isFetching ? (
          <RequestSkeleton />
        ) : (
          requestList?.map((item, index) => (
            <div key={index} className=" px-[31px] py-[30px] flex flex-col gap-[40px] shadow-xl bg-[#F6F6F6]   justify-center overflow-auto ">
              <div className=" flex gap-[42px] items-center pt-[30px] ">
                <Avatar size="xl" src={item?.profilePicture} />
                <article className=" flex flex-col gap-2">
                  <p className="font-semibold text-[18px] text-[#2E1110]">
                    {item?.name}
                  </p>
                  {item?.skills?.length ? (
                    <p className=" font-medium text-[13px] text-purple">
                      skills:{item?.skills?.join(", ")}
                    </p>
                  ) : null}
                </article>
              </div>
              <section className=" flex gap-[24px] items-end justify-end">
                <Button
                  onClick={() =>
                    setModalState({
                      component: <AcceptRequest id={item?.id} />,
                      opened: true,
                    })
                  }
                  styles={{
                    root: {
                      marginTop: "12px",
                      width: "fit-content",
                      background: "#ECE8FF",
                      color: "#4B0082",
                    },
                  }}
                  classNames={classes}
                  type="submit"
                >
                  Accept
                </Button>
                <Button
                  onClick={() =>
                    setModalState({
                      component: <RejectRequest id={item?.id} />,
                      opened: true,
                    })
                  }
                  styles={{
                    root: {
                      marginTop: "12px",
                      width: "fit-content",
                    },
                  }}
                  classNames={classes}
                  type="submit"
                >
                  Reject
                </Button>
              </section>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
