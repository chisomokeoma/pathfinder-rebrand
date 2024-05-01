"use client";

import Image from "next/image";
import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";
import { ArrowRight } from "iconsax-react";
import { FcAcceptDatabase } from "react-icons/fc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import toast from "react-hot-toast";
import { Action } from "@/types";
import { MdRemoveModerator } from "react-icons/md";

export default function RejectRequest({ id }: { id: number }) {
  const queryClient = useQueryClient()
  const { close } = useContext(ModalContext) as IModalContext;
  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      builder
        .use()
        .mentors.mentorship_requests.accept_reject({
          requestId: id,
          action: Action.REJECT,
        }),
    onSuccess(data) {
      toast.success("Request rejected successfully");
      queryClient.invalidateQueries( builder.mentors.mentorship_requests.pending_mentorship_requests.get())

      close();
    },
  });
  return (
    <main className=" w-[496px] items-center h-[400px] px-[20px] ">
      <div className=" flex items-end  justify-end">
        <CgCloseR
          size={30}
          className=" cursor-pointer"
          onClick={() => close()}
        />
      </div>
      <section className="flex-col w-full p-[2px] gap-[40px] flex">
        <div className=" items-center flex flex-col gap-[14px]">
          <MdRemoveModerator
            size={200}
            color="#C41E3A"
            className=" text-center items-center"
          />
          <p className=" text-[18px] font-semibold">
            Are you sure you want reject this request?
          </p>
        </div>

        <div className=" items-center flex justify-between">
          <Button
            onClick={() => close()}
            styles={{
              root: {
                background: "#fff",
                color: "#000",
                border: "1px solid #000",

                height: "49px",
                paddingInline: "32px",
                borderRadius: "50px",
                width: "fit-content",
              },
            }}
          >
            <span className="flex items-center text-base font-semibold leading-[17.92px]  gap-1">
              Cancel
            </span>
          </Button>

          <Button
            loading={isLoading}
            onClick={() => mutate()}
            styles={{
              root: {
                background: "#C41E3A",

                height: "49px",
                paddingInline: "32px",
                borderRadius: "50px",
                width: "fit-content",
                "&:hover": {
                  backgroundColor: "#7630F7",
                },
              },
            }}
          >
            <span className="flex items-center text-base font-semibold leading-[17.92px]  gap-1">
              Yes
            </span>
          </Button>
        </div>
      </section>
    </main>
  );
}
