"use client";

import { Button } from "@mantine/core";
import React, { useContext } from "react";
import classes from "@/components/home/signup.module.css";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import AcceptRequest from "../modals/resend-request";
import ResendRequest from "../modals/resend-request";
import { scheduleStepAtom } from "@/api/queries-store";
import { usePortal } from "@ibnlanre/portal";

function ScheduleBtn() {
  const [, setStep] = usePortal.atom(scheduleStepAtom);

  return (
    <section className=" flex gap-[24px] self-end justify-end">
      <Button
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content",
            borderRadius: "8px",
          },
        }}
        classNames={classes}
        type="submit"
        onClick={() => setStep(2)}
      >
        Next
      </Button>
    </section>
  );
}

export default ScheduleBtn;
