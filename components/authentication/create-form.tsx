"use client";

import { TextInput, PasswordInput, Button } from "@mantine/core";

import { Loader, FacebookIcon, AppleIcon } from "lucide-react";
import React, { useState } from "react";
import GoogleIIcon from "../icons/google-icon";
import { builder } from "@/api/builder";
import { errorMessageHandler, ErrorType } from "@/utils/error-handler";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import classes from "@/components/home/signup.module.css";
import { base64decode, base64encode } from "nodejs-base64";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { EmailQuery } from "@/api/queries-store";
import Link from "next/link";
import { Age, UserRole } from "@/types";

export interface ICreateForm {
  email: string;
  password: string;
  role: string;
  isAdult? : boolean
}

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    paddingLeft: "14px",
  },
};

function CreateForm() {
  const createForm = useForm<ICreateForm>({
    initialValues: {
      email: "",
      password: "",
      role: "",
    },
  });

  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  const age = searchParams.get("span");
  const decodedAge = base64decode(age ?? "")
  const { push } = useRouter();

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: ICreateForm) =>
      builder.use().authentication.signup(payload),
    mutationKey: builder.authentication.signup.get(),
    onSuccess(data) {
      toast("Registered succesfully");
      cookieStorage.setItem("pathfinder-auth", data?.data?.access_token);
      // setUserEmail(data?.data?.email)
      push(`/create-account/otp?auth=${base64encode(createForm.values.email)}`);
    },
    onError(error, variables, context) {
      errorMessageHandler(error as ErrorType)
    },
  });

  return (
    <form
      className="w-[413px]  mx-auto flex flex-col gap-11 "
      onSubmit={createForm.onSubmit(() => {
        mutate({
          ...createForm.values,
          role: base64decode(role as string).toUpperCase(),
          ...(role === UserRole.MENTEE && {isAdult: decodedAge === Age.ABOVE_18})
        });
      })}
    >
      <div className="flex gap-10 pt-6 flex-col">
        {/* <TextInput
          styles={styles}
          placeholder="Name"
          {...createForm.getInputProps("name")}
        /> */}

        <TextInput
          styles={styles}
          placeholder={decodedAge === Age.UNDER_18? "Parent Email" : "Email"}
          {...createForm.getInputProps("email")}
        />

        <PasswordInput
          styles={styles}
          placeholder="Passsword"
          {...createForm.getInputProps("password")}
        />
      </div>
      {/* <Link
      className="w-full mt-[13px]"
      href="/"
    > */}

      <Button
        loading={isLoading}
        styles={{
          root: {
            marginTop: "12px",
          },
        }}
        classNames={classes}
        type="submit"
        // loading={isLoading}
      >
        Submit
      </Button>
      {/* </Link> */}
      <div className=" flex gap-6 flex-col items-center">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Or Sign Up With
        </p>
        <div className="flex gap-10 items-center">
          <GoogleIIcon />
          <FacebookIcon />
          <AppleIcon />
        </div>
      </div>
      <div className="">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Already have an account?
          <Link
            href="/create-account/mentor/biodata"
            className="text-[#64748B] text-[20.8px] leading-[25.36px]"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </form>
  );
}

export default CreateForm;
