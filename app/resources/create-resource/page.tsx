"use client";
import { Avatar, Button, FileInput, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { Suspense, useState } from "react";
import CourseForm from "@/components/resources/course-form";

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

export default function CreateAccountMentor() {
  const [img, setImg] = useState<File | null>(null);
  return (
    <section className="flex flex-col">
      <Hero text="Create a Resource" />
      <div className="mt-[30px] mb-[50px] bg-[#F9F9F9] py-[50px]">
        <article className="flex justify-between h-[95vh] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Creating a Course
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              We need some details of the course you want to create
            </p>
          </div>
          <Suspense>
            <CourseForm />
          </Suspense>
        </article>
      </div>
    </section>
  );
}
