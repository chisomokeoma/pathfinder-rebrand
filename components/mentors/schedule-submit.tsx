import Hero from "@/components/home/hero";
import { Button, Textarea } from "@mantine/core";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import classes from "@/components/home/signup.module.css";
import { scheduleStepAtom } from "@/api/queries-store";
import { usePortal } from "@ibnlanre/portal";
import { MentorDetails } from "@/types";
import { FormType } from "@/app/mentors/[mentor_details]/schedule-session/page";
import { UseFormReturnType } from "@mantine/form";
import clsx from "clsx";
import { builder } from "@/api/builder";
import { errorMessageHandler, ErrorType } from "@/utils/error-handler";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
const sessionArray = [
  "Goal Setting",
  "Career Advice",
  "Higher Education",
  "Technology",
];

const relatedList = [
  "College",
  "Marketing",
  "Networking",
  "Work-life Balance",
  "Negotiation Skills",
];
enum TimeType {
  MIN = "MIN",
  HR = "HR",
}

export default function ScheduleSubmit({
  mentorDetails,
  form,
  durationType,
  id,
}: {
  mentorDetails: MentorDetails | undefined;
  form: UseFormReturnType<FormType, (values: FormType) => FormType>;
  durationType: TimeType;
  id: number;
}) {
  const [step, setStep] = usePortal.atom(scheduleStepAtom);

  const { push } = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: FormType) =>
      builder.use().session.requests.create(payload),
    onSuccess(data) {
      toast.success("Request sent successfully");
      push(`/mentors/${id}`);
      close();
    },
    onError(error) {
      errorMessageHandler(error as ErrorType);
    },
  });

  return (
    <main className=" flex flex-col">
      <Hero text="Schedule Details" />
      <div className=" max-w-[1400px] mx-auto flex flex-col gap-[50px] py-[60px]">
        <section className=" flex flex-col gap-[30px] ">
          <article className=" flex flex-col gap-[10px]">
            <h5 className=" font-semibold   text-[30px] text-[#161439]">
              Book a session
            </h5>
            <p className=" text-[#6D6C80] font-normal">
              with{" "}
              <span className=" text-[#6D6C80] font-semibold">
                {mentorDetails?.name}
              </span>
            </p>
          </article>
          <article className=" flex gap-[8px] items-center">
            <MdOutlineCalendarToday />
            <p className=" text-[#6D6C80] text-[18px]">
              {(form.values.dateScheduled as Date)?.toISOString()}
            </p>
          </article>
          <article className=" flex gap-[8px] items-center">
            <LuClock3 />
            <p className=" text-[#6D6C80] text-[18px]">
              {form.values.duration}{" "}
              {durationType === TimeType.HR ? "hrs" : "mins"}
            </p>
          </article>
        </section>

        <div className=" flex flex-col gap-[50px] p-[30px]  border border-[#DFDFDF] rounded-lg">
          <section className=" flex flex-col gap-[49px]">
            <article className=" flex flex-col gap-[18px]">
              <p className=" text-[18px] text-[#161439] font-medium">
                Answer the following questions for the mentor to know you better
              </p>
              <div className=" flex flex-col gap-[10px]">
                <p className="  text-[18px] text-[#161439] font-medium">
                  What do you expect from the session?
                </p>
                <p className=" text-[15px] font-normal">
                  Choose all that apply
                </p>
              </div>
            </article>

            <section className=" flex gap-[44px]">
              {sessionArray?.map((item, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    form.values.expectations.includes(item)
                      ? "bg-purple text-white"
                      : "text-purple",
                    " flex items-center cursor-pointer p-[8px] rounded-lg border-purple border "
                  )}
                  onClick={() => {
                    const found = form.values.expectations.find(
                      (ele) => ele === item
                    );
                    if (found) {
                      const filtered = form.values.expectations.filter(
                        (ele) => ele !== item
                      );
                      form.setFieldValue("expectations", filtered);
                    } else {
                      form.setFieldValue("expectations", [
                        ...form.values.expectations,
                        item,
                      ]);
                    }
                  }}
                >
                  <p className="text-[14px]">{item}</p>
                </div>
              ))}
            </section>
          </section>

          <section className=" flex flex-col gap-[49px] ">
            <div className=" flex flex-col gap-[10px]">
              <p className="  text-[18px] text-[#161439] font-medium">
                Ask Ngozi anything related to?
              </p>
              <p className=" text-[15px] font-normal">Choose all that apply</p>
            </div>

            <section className=" flex gap-[44px]">
              {relatedList?.map((item, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    form.values.questions.includes(item)
                      ? "bg-purple text-white"
                      : "text-purple",
                    " flex items-center cursor-pointer p-[8px] rounded-lg border-purple border "
                  )}
                  onClick={() => {
                    const found = form.values.questions.find(
                      (ele) => ele === item
                    );
                    if (found) {
                      const filtered = form.values.questions.filter(
                        (ele) => ele !== item
                      );
                      form.setFieldValue("questions", filtered);
                    } else {
                      form.setFieldValue("questions", [
                        ...form.values.questions,
                        item,
                      ]);
                    }
                  }}
                >
                  <p className="text-[14px]">{item}</p>
                </div>
              ))}
            </section>
          </section>
        </div>

        <section className=" flex flex-col gap-[24px]">
          <article className=" flex flex-col gap-[10px]">
            <h5 className="text-[18px] text-[#161439] font-medium">
              Drop a message for your mentor
            </h5>
            <p className=" text-[15px] font-normal">Describe your challenges</p>
          </article>
          <Textarea {...form.getInputProps("message")} resize="vertical" />
        </section>
        <div className="flex items-center gap-3">
          <Button
            styles={{
              root: {
                width: "fit-content",
                background: "#ECE8FF",
                color: "#4B0082",
                borderRadius: "8px",
              },
            }}
            classNames={classes}
            type="submit"
            onClick={() => setStep(1)}
          >
            Back
          </Button>
          <Button
            classNames={classes}
            styles={{
              root: {
                flex: 1,
              },
            }}
            loading={isLoading}
            onClick={() =>
              mutate({
                ...form.values,
                dateScheduled: (
                  form.values.dateScheduled as Date
                ).toISOString(),
                duration: form.values.duration
                  ? durationType === TimeType.HR
                    ? form.values.duration * 60
                    : form.values.duration
                  : 0,
              })
            }
          >
            Submit
          </Button>
        </div>
      </div>
    </main>
  );
}
