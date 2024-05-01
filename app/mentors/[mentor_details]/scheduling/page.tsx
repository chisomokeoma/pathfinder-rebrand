"use client";

import Hero from "@/components/home/hero";
import { Button } from "@mantine/core";
import Image from "next/image";
import React, { useContext } from "react";
import { FaPhone, FaStar, FaVideo } from "react-icons/fa";
import { DateTimePicker } from "@mantine/dates";
import { Calendar } from "iconsax-react";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  IModalContext,
  ModalContext,
} from "@/components/provider/modal-provider";
import SuccessSchedule from "@/components/modals/schedule-success";
import ProfileUpdate from "@/components/modals/profile-update";

function Scheduling() {
  const { setModalState, close } = useContext(ModalContext) as IModalContext;
  return (
    <section className=" flex flex-col">
      <Hero text="Scheduling " />

      <section className="py-[100px] px-[50px] flex justify-between gap-[70px] items-center mx-auto">
        <section className=" flex flex-col gap-[24px]">
          <p className=" text-[30px] text-[#161439] font-semibold">
            Meeting Confirmation
          </p>
          <article className="flex  px-[24px] py-2 items-center gap-40px] bg-[#DAD4FF] flex-1 rounded-lg">
            <figure className=" w-[243px] ">
              <Image
                src="/confirmation.svg"
                alt="book-session"
                width={20}
                height={20}
                className=" w-full"
              />
            </figure>

            <div className=" flex flex-col gap-[15px] ">
              <section className=" flex flex-col gap-[12px]">
                <article className=" flex flex-col gap-2">
                  <h4 className=" text-[#161439] font-semibold text-[20px]">
                    Olamide Adeyemi
                  </h4>
                  <p className=" text-[16px] text-lilac font-normal">
                    UX Design Lead
                  </p>
                </article>
                <article className=" flex gap-[5px] items-center">
                  <FaStar color="#F8BC24" />

                  <p className="text-[15px] font-normal text-[#7F7E97]">
                    (4.8 Ratings)
                  </p>
                </article>
              </section>
            </div>
          </article>
        </section>

        <section className=" flex flex-col gap-[24px]">
          <p className=" text-[30px] text-[#161439] font-semibold">
            Choose date
          </p>
          <div className=" flex  flex-col px-[24px] py-2 items-center gap-40px] rounded-lg bg-[#DAD4FF] w-[400px] h-[250px] justify-center">
            <p className="text-[#161439] font-semibold text-[16px]">
              Pick a date and time convinient for you to have a session
            </p>
            <DateTimePicker
              styles={{
                monthsListControl: {
                  background: "#4B0082",
                  color: "white",
                },
                day: {
                  background: "#4B0082",
                  color: "white",
                },
              }}
              //   valueFormat="DD/MM/YYYY"
              placeholder="Start Date"
              py={10}
              w={"100%"}
              rightSection={<Calendar />}
            />
          </div>
        </section>

        <div className=" flex flex-col gap-[24px]">
          <p className=" text-[30px] text-[#161439] font-semibold">
            Choose type of Meeting
          </p>

          <div className=" flex flex-col   px-[16px] py-2 items-center rounded-lg  bg-[#DAD4FF] w-[400px] h-[250px] justify-center gap-[8px]">
            <p className="text-[#161439] font-semibold text-[16px] text-center">
              Choose how best you want to hold the session
            </p>

            <section className=" flex gap-2">
              <article className=" p-[16px] flex flex-col gap-2 shadow-lg border   items-center cursor-pointer hover:bg-[#d4cdf8]">
                <FaPhone className=" " />
                <p className="text-[12px] font-medium">Phone Call</p>
              </article>
              <article className=" p-[16px] flex flex-col gap-2 shadow-lg border items-center cursor-pointer hover:bg-[#d4cdf8]">
                <FaVideo />
                <p className="text-[12px] font-medium">Video Call</p>
              </article>
              <article className=" p-[16px] flex flex-col gap-2 shadow-lg border items-center cursor-pointer hover:bg-[#d4cdf8]">
                <BsPersonWorkspace />
                <p className=" text-[12px] font-medium">In Person</p>
              </article>
            </section>
          </div>
        </div>
      </section>

      <div className=" flex items-center mx-auto pb-[20px]">
        <Button
          onClick={() => {
            setModalState({
              opened: true,
              //    component: (<SuccessSchedule/>)
              component: <ProfileUpdate />,
            });
          }}
          styles={{
            root: {
              background: "#4B0082",
              height: "55px",
              paddingInline: "32px",
              // borderRadius: "50px",
              width: "fit-content",
              display: "flex",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#7630F7",
              },
            },
          }}
        >
          <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
            Schedule Session
          </span>
        </Button>
      </div>
    </section>
  );
}

export default Scheduling;
