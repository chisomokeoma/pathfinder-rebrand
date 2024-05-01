import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { base64decode } from "nodejs-base64";
import toast from "react-hot-toast";
import { useForm } from "@mantine/form";
import { usePortal } from "@ibnlanre/portal";
import { EmailQuery } from "@/api/queries-store";
import { Button, LoadingOverlay, PinInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";

export interface IVerify {
  otp: number;
}

export default function OtpForm() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("auth");
  const [userEmail, setUserEmail] = usePortal.atom(EmailQuery);
  const verifyForm = useForm({
    initialValues: {
      // email: base64decode(auth as string),
      otp: "",
    },
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: () =>
      builder.use().authentication.verify_email({
        otp: +verifyForm?.values.otp,
      }),
    onSuccess(data, variable) {
      toast.success(`Account verified successfully`);
      // push(`/create-account/${base64decode(email as string).toLocaleLowerCase()}/biodata`)
      push(`/create-account/${data.data?.role.toLowerCase()}/biodata`);
    },
  });
  
  const { mutate: mutateResendEmail, isLoading: loadingResend } = useMutation({
    mutationFn: () => builder.use().authentication.resend_otp(),
    onSuccess(data, variable) {
      console.log(data);
      toast.success(`Email resent`);
    },
  });
  // x = "mentor"

  // `/create-account/shyjytujztjyztrjyrzhjth/biodata`

  return (
    <form
      className="mt-[30px] mb-[50px] bg-[#F9F9F9] py-[58px]"
      onSubmit={verifyForm.onSubmit(() => mutate())}
    >
      <article className="flex gap-[50px] items-center  px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[590px]  mx-auto flex-col max-[630px]:w-full">
        <div className="flex flex-col items-center gap-[21px]">
          <div className=" w-[308px]">
            <PinInput
              type="number"
              size="xl"
              styles={{
                root: {
                  gap: "12px",
                },
                input: {
                  border: "1px solid #4B0082",
                },
              }}
              placeholder=""
              oneTimeCode
              aria-label="One time code"
              mask
              {...verifyForm.getInputProps("otp")}
            />
          </div>

          <div className="flex flex-col items-center gap-2">
            <h2 className="text-[clamp(20px,2.5vw,36px)] font-semibold leading-[46.8px] text-[#161439]">
              Enter Verification Code
            </h2>
            <p className="text-base leading-7 text-[#161439] text-center">
              {/* Almost there! We&apos;ve sent a mail to {base64decode(auth as string)} Please input
              one time password sent */}
              Almost there! We&apos;ve sent a mail to{" "}
              {base64decode(email as string)} Please input one time password
              sent
            </p>
          </div>
        </div>
        <div className=" flex flex-col ">
          <Button
            loading={isLoading}
            type="submit"
            classNames={classes}
            style={{ width: "350px", paddingInline: "4px" }}
            // loading={isLoading}
          >
            Send
          </Button>

          <p
            onClick={() => mutateResendEmail()}
            className=" flex text-[13px] text-red-700 font-medium cursor-pointer self-end justify-end"
          >
            Resend Email
          </p>
        </div>
      </article>
      <LoadingOverlay visible={loadingResend} />
    </form>
  );
}
