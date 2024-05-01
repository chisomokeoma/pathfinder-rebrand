"use client";

import { FormType } from "@/app/mentors/[mentor_details]/schedule-session/page";
import { DatePicker } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import React, { useState } from "react";

export default function ScheduleDate({
  form,
}: {
  form: UseFormReturnType<FormType, (values: FormType) => FormType>;
}) {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <div className=" bg-[#ECE8FF] w-[360px] flex   ">
      <DatePicker
        size="lg"
        w="100%"
        styles={{ day: {} }}
        allowDeselect
        value={form.values.dateScheduled as Date}
        onChange={(val) => form.setFieldValue("dateScheduled", val)}
      />
    </div>
  );
}
