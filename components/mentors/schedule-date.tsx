import { scheduleStepAtom } from "@/api/queries-store";
import {
  FormType,
} from "@/app/mentors/[mentor_details]/schedule-session/page";
import Hero from "@/components/home/hero";
import ScheduleBtn from "@/components/mentee/schedule-btn";
import ScheduleDate from "@/components/mentee/schedule-date";
import { MentorDetails } from "@/types";
import { usePortal } from "@ibnlanre/portal";
import {
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import clsx from "clsx";
import { ArrowDown2 } from "iconsax-react";
import React, { Fragment, Suspense, useState } from "react";

const styles = {
  root: {
    flex: 1,
  },
  input: {
    minWidth: "278px",
    height: "30px",
    border: "1px solid #161439",
  },
  label: {
    paddingBottom: "4px",
    fontSize: "16px",
  },
};

const sessionList = [
  {
    name: "Morning session",
    children: [{ time1: "8:00 am", time2: "9:00 am", time3: "10:00 am" }],
  },
  {
    name: "Afternoon session",
    children: [{ time1: "1:00 am", time2: "2:00 am", time3: "3:00 am" }],
  },
  {
    name: "Evening session",
    children: [{ time1: "4:00 am", time2: "5:00 am", time3: "6:00 am" }],
  },
];
enum TimeType {
  MIN = "MIN",
  HR = "HR",
}

export default function ScheduleSessionDate({
  mentorDetails,
  form,
  durationType,
  setDurationType,
}: {
  mentorDetails: MentorDetails | undefined;
  form: UseFormReturnType<FormType, (values: FormType) => FormType>;
  setDurationType: React.Dispatch<React.SetStateAction<TimeType>>;
  durationType: TimeType;
}) {

  return (
    <section className=" flex flex-col">
      <Hero text="Schedule Session" />
      <section className=" flex flex-col gap-[50px] px-[200px] py-[50px]  items-center   flex-1  ">
        <div className=" flex flex-col gap-[20px] w-full">
          <p className=" text-[24px] font-bold text-[#161439]">
            Schedule meeting
          </p>
          <div className=" flex gap-[20px] items-center w-full">
            {/* <NumberInput
              styles={styles}
              label="Duration"
              placeholder="30 mins"
              {...form.getInputProps("duration")}
            /> */}
            <NumberInput
              label="Duration"
              styles={{
                ...styles,
                section: { paddingRight: "8px", width: "fit-content" },
              }}
              clampBehavior="strict"
              max={durationType === TimeType.HR ? 24 : 60}
              rightSection={
                <Menu styles={{ item: { fontSize: "14px" } }}>
                  <MenuTarget>
                    <p className="flex cursor-pointer text-sm items-center gap-1">
                      {durationType.toLocaleLowerCase()}
                      <ArrowDown2 size={14} />
                    </p>
                  </MenuTarget>
                  <MenuDropdown>
                    <MenuItem onClick={() => setDurationType(TimeType.HR)}>
                      hr
                    </MenuItem>
                    <MenuItem onClick={() => setDurationType(TimeType.MIN)}>
                      min
                    </MenuItem>
                  </MenuDropdown>
                </Menu>
              }
              {...form.getInputProps("duration")}
            />

            <TextInput
              disabled
              styles={styles}
              value={mentorDetails?.name}
              label="Mentor"
            />
          </div>
        </div>
        <div className=" flex justify-between gap-[60px]">
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <p className=" text-[#161439] font-semibold text-[20px]">
                Mentor&apos;s available days and duration
              </p>
              <div className="flex flex-col gap-4 bg-[#ECE8FF] py-[6px] px-[8px]">
                {mentorDetails?.availability?.map((item, index) => (
                  <p key={index} className="flex items-center justify-between">
                    <span className=" font-semibold">{item.dayAvailable}</span>
                    <span className=" font-semibold">
                      {item.timeRemainingForSchedule < 60
                        ? `${item.timeRemainingForSchedule} minutes`
                        : `${item.timeRemainingForSchedule / 60} hours`}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <section className=" flex flex-col gap-[20px] ">
              <p className=" text-[#161439] font-semibold text-[20px]">
                Choose date
              </p>

              <ScheduleDate form={form} />
            </section>
          </section>

          <div className=" px-[60px] py-[30px] flex flex-col gap-[60px] bg-[#ECE8FF] w-[700px] ">
            <article className=" flex flex-col gap-1">
              <p className="text-[20px] font-semibold">
                {" "}
                Select Time Availability
              </p>
              {/* <p className=" text-[16px] font-normal text-[#5e5e5e]">
                {" "}
                30 mins - 1 hour mentor call
              </p> */}
            </article>

            <div className=" flex flex-col gap-[35px] ">
              <section className=" flex flex-col gap-[32px]">
                {sessionList.map((item, idx) => (
                  <Fragment key={idx}>
                    <article className=" flex items-center px-[11px] py-[9px] rounded-lg bg-white border border-[#ddd]">
                      <p className=" text-[#777575] font-semibold ">
                        {item.name}
                      </p>
                    </article>

                    <div className=" flex gap-[27px]">
                      {item.children?.map((ele, idx) => (
                        <Fragment key={idx}>
                          <article
                            className={clsx(
                              form.values.timeScheduled === ele?.time1
                                ? "bg-[#4B0082] border-[#4B0082]"
                                : "bg-white border-[#ddd]",
                              " flex items-center px-[11px] py-[9px] rounded-lg border  cursor-pointer hover:border-[#4B0082]"
                            )}
                          >
                            <p
                              onClick={() =>
                                form.setFieldValue("timeScheduled", ele?.time1)
                              }
                              className={clsx(
                                form.values.timeScheduled === ele?.time1
                                  ? "text-white"
                                  : "text-[#777575]",
                                "  font-semibold "
                              )}
                            >
                              {ele?.time1}
                            </p>
                          </article>
                          <article
                            className={clsx(
                              form.values.timeScheduled === ele?.time2
                                ? "bg-[#4B0082] border-[#4B0082]"
                                : "bg-white border-[#ddd]",
                              " flex items-center px-[11px] py-[9px] rounded-lg border  cursor-pointer hover:border-[#4B0082]"
                            )}
                          >
                            <p
                              onClick={() =>
                                form.setFieldValue("timeScheduled", ele?.time2)
                              }
                              className={clsx(
                                form.values.timeScheduled === ele?.time2
                                  ? "text-white"
                                  : "text-[#777575]",
                                "  font-semibold "
                              )}
                            >
                              {ele?.time2}
                            </p>
                          </article>
                          <article
                            className={clsx(
                              form.values.timeScheduled === ele?.time3
                                ? "bg-[#4B0082] border-[#4B0082]"
                                : "bg-white border-[#ddd]",
                              " flex items-center px-[11px] py-[9px] rounded-lg border  cursor-pointer hover:border-[#4B0082]"
                            )}
                          >
                            <p
                              onClick={() =>
                                form.setFieldValue("timeScheduled", ele?.time3)
                              }
                              className={clsx(
                                form.values.timeScheduled === ele?.time3
                                  ? "text-white"
                                  : "text-[#777575]",
                                "  font-semibold "
                              )}
                            >
                              {ele?.time3}
                            </p>
                          </article>
                        </Fragment>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </section>
            </div>
          </div>
        </div>

        <Suspense>
          <ScheduleBtn />
        </Suspense>
      </section>
    </section>
  );
}
