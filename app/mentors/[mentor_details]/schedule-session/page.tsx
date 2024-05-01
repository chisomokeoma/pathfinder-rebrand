"use client";

import { builder } from "@/api/builder";
import { scheduleStepAtom } from "@/api/queries-store";
import ScheduleDate from "@/components/mentee/schedule-date";
import ScheduleSessionDate from "@/components/mentors/schedule-date";
import ScheduleSubmit from "@/components/mentors/schedule-submit";
import { usePortal } from "@ibnlanre/portal";
import { useForm } from "@mantine/form";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export interface FormType {
  dateScheduled: string | null | Date;
  mentorId: number;
  duration: null | number;
  timeScheduled: string;
  expectations: string[];
  questions: string[];
  message: string;
}

export default function ScheduleSession({
  params,
}: {
  params: { mentor_details: string };
}) {
  enum TimeType {
    MIN = "MIN",
    HR = "HR",
  }
  const [step] = usePortal.atom(scheduleStepAtom);

  const { data: mentorDetails, isFetching } = useQuery({
    queryFn: () =>
      builder.use().mentors.mentor_details_auth(params?.mentor_details),
    queryKey: builder.mentors.mentor_details_auth.use(params?.mentor_details),
    select: ({ data }) => data,
  });

  const form = useForm<FormType>({
    initialValues: {
      dateScheduled: null,
      mentorId: +params?.mentor_details,
      duration: null,
      timeScheduled: "",
      expectations: [],
      questions: [],
      message: "",
    },
  });
  const [durationType, setDurationType] = useState<TimeType>(TimeType.MIN);

  return step === 1 ? (
    <ScheduleSessionDate
      setDurationType={setDurationType}
      durationType={durationType}
      form={form}
      mentorDetails={mentorDetails}
    />
  ) : (
    <ScheduleSubmit
      durationType={durationType}
      form={form}
      mentorDetails={mentorDetails}
      id={+params?.mentor_details}
    />
  );
}
