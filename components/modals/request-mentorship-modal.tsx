"use client";

import { useContext } from "react";
import { IModalContext, ModalContext } from "../provider/modal-provider";
import { CgCloseR } from "react-icons/cg";
import { Button } from "@mantine/core";
import { CiSquareQuestion } from "react-icons/ci";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import toast from "react-hot-toast";
import { errorMessageHandler, ErrorType } from "@/utils/error-handler";

export default function RequestMentorShipModal({ id }: { id: string }) {
  const { close } = useContext(ModalContext) as IModalContext;
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().mentee.request_mentorship(id),
    onSuccess(data) {
      toast.success("Request sent successfully");
      queryClient.invalidateQueries(
        builder.mentors.mentor_details_auth.use(id)
      );
      close();
    },
    onError(error) {
      errorMessageHandler(error as ErrorType);
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
          <CiSquareQuestion
            size={200}
            color="#4B0082"
            className=" text-center items-center"
          />
          <p className=" text-[18px] text-center font-semibold">
            Are you sure you want this mentor to be your mentor?
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
                background: "#4B0082",

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
