"use client";

import { Button } from "@mantine/core";
import React, { useContext } from "react";
import classes from "@/components/home/signup.module.css";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import RejectRequest from "../modals/reject-request";
import CancelRequest from "../modals/cancel-requests";

function MentorRequestBtn({ id }: { id: number }) {
  const { setModalState } = useContext(ModalContext) as IModalContext;

  return (
    <section className=" flex gap-[24px] items-end justify-end">
      {/* <Button onClick={() => setModalState({
        component: <ResendRequest/>,
        opened: true
      })}
        styles={{
          root: {
            marginTop: "12px",
            width: "fit-content",
            background: "#ECE8FF",
            color: "#4B0082"
          },
        }}
        classNames={classes}
        type="submit"
      >
     Resend
      </Button> */}
      <Button
        onClick={() =>
          setModalState({
            component: <CancelRequest id={id} />,
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
      >
        Cancel
      </Button>
    </section>
  );
}

export default MentorRequestBtn;
