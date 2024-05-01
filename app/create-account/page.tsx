"use client";

import { Button, LoadingOverlay } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useState } from "react";
import { base64encode } from "nodejs-base64";

export default function CreateAccount() {
  const [selected, setSelected] = useState<"" | "mentor" | "mentee">("");
  const [isloading, setIsLoading] = useState(false);
  return (
    <section className="flex flex-col">
      <Hero text="Apply as" />
      <div className="mt-[50px] mb-[50px] bg-[#F9F9F9] py-[40px]">
        <article className="flex gap-[50px] px-12 py-7 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[clamp(345px,47vw,690px)]  max-[493px]:w-full  mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Apply as ...
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              For a better experience tailored to your needs
            </p>
          </div>
          <div className="flex flex-col gap-[80px]">
            <div className="flex flex-col gap-[57px]">
              <Button
                onClick={() => setSelected("mentee")}
                style={{
                  height: "56px",
                  borderRadius: "30px",
                  background: selected === "mentee" ? "#4B0082" : "#DAD4FF",
                  width: "100%",
                  color: selected === "mentee" ? "white" : "black",
                }}
              >
                <span className="font-bold text-[24px] leading-6">Mentee</span>
              </Button>
              <Button
                onClick={() => setSelected("mentor")}
                style={{
                  height: "56px",
                  borderRadius: "30px",
                  background: selected === "mentor" ? "#4B0082" : "#DAD4FF",
                  color: selected === "mentor" ? "white" : "black",
                }}
              >
                <span className="font-bold text-[24px] leading-6">Mentor</span>
              </Button>
            </div>
            <Link
              onClick={() => setIsLoading(true)}
              className={
                !selected ? "pointer-events-none cursor-not-allowed" : ""
              }
              // href={selected  === "mentee" ? `/create-account/${selected}/age` : `/create-account/${selected}/biodata` }
              href={selected ===  "mentor" ?  `/create-account/details?role=${base64encode(selected)}` :  `/create-account/mentee/age?role=${base64encode(selected)}`}
            >
              <Button
                disabled={!selected}
                classNames={classes}
                loading={isloading}
              >
                Proceed
              </Button>
            </Link>
            <p className="text-base self-center leading-7 text-[#6D6C80]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#5751E1] text-base leading-7 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
