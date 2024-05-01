"use client";

import { TextInput } from "@mantine/core";
import React from "react";

import { Button, PasswordInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import GoogleIIcon from "@/components/icons/google-icon";
import FacebookIcon from "@/components/icons/facebook-icon";
import AppleIcon from "@/components/icons/apple-icon";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { builder } from "@/api/builder";

import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { ErrorType, errorMessageHandler } from "@/utils/error-handler";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { refetchUserDetails } from "@/api/queries-store";

export interface ILogin {
  password: string;
  email: string;
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
export default function LoginForm() {
  const searchParams = useSearchParams();
  const view = searchParams.get("view");
  const { push } = useRouter();

  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const queryClient = useQueryClient()
  const [refetch, setrefetch] = usePortal.atom(refetchUserDetails)

  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().authentication.signin(loginForm.values),
    onSuccess(data) {
      // queryClient.fetchQuery(builder.user.user_details.get())
      cookieStorage.setItem('pathfinder-auth', data?.data?.access_token)
      setrefetch(true)
      if (data?.data?.isVerified) {
        toast.success("Loggedin successfully");
        push("/");
      } else {
        push(`/otp`);
      }
    },
    onError(error) {
      errorMessageHandler(error as ErrorType);
    },
  });

  return (
    <form
      className="w-[413px] mx-auto"
      onSubmit={loginForm.onSubmit(() => mutate())}
    >
      <div className="flex gap-10 pt-6 flex-col">
        <TextInput
          styles={styles}
          placeholder="Email"
          {...loginForm.getInputProps("email")}
        />
        <PasswordInput
          styles={styles}
          placeholder="Passsword"
          {...loginForm.getInputProps("password")}
        />

        {/* <Link className="w-full mt-20" href=''> */}
        <Button loading={isLoading} classNames={classes} type="submit">
          Sign In
        </Button>
        {/* </Link> */}
      </div>
      <div className="mt-[67px] flex gap-6 flex-col items-center">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Or Sign In With
        </p>
        <div className="flex gap-10">
          <GoogleIIcon />
          <FacebookIcon />
          <AppleIcon />
        </div>
      </div>
      <div className="mt-10">
        <p className="text-center text-[17px] leading-[21.13px] font-medium tracking-[4%] text-[#8D8D8D]">
          Forgot Password?
          <Link
            href=""
            className="text-[#64748B] text-[20.8px] leading-[25.36px]"
          >
            Reset
          </Link>
        </p>
      </div>
    </form>
  );
}
