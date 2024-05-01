"use client"
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import img from "@/public/images/marketing.png";
import DotImage from "@/public/images/newsletter_shape02.png.png";
import { Badge } from "@/components/ui/badge";
import { TiStarFullOutline } from "react-icons/ti";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { CgTime } from "react-icons/cg";
import { BiBook } from "react-icons/bi";
import { BiExtension } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { MdArrowRightAlt } from "react-icons/md";

const Demo = ({ params }: { params: { demo: string } }) => {
  const date = new Date();
  return (
    <React.Fragment>
      <main>
        <div className="p-6 w-full h-56 flex items-center bg-[#856088]">
          <div className="flex gap-20">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-4xl">All Resources</h1>
              <Breadcrumbs />
            </div>
            <Image
              src={DotImage}
              width={100}
              height={100}
              alt="dot dot dot"
              className="h-16 w-16 items-start"
            />
          </div>
        </div>
        <div className="py-4 flex justify-center gap-32 mt-10">
          <section className="flex flex-col gap-2 w-full max-w-[800px]">
            <Image
              src={img}
              width={100}
              height={100}
              alt="resources"
              className="w-[59rem] -ml-8 h-82 container "
            />
            <div className="flex items-center  gap-10">
              <Badge variant="outline">Development</Badge>
              <span className="flex items-center">
                <TiStarFullOutline /> (4.5 Reviews)
              </span>
            </div>
            <h3 className="font-bold text-3xl w-full mt-2">
              Resolving Conflicts Between Designer And Engineers
            </h3>
            <div className="flex gap-2 items-center mt-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h4>
                By <b>David Okafor</b>.
              </h4>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 flex gap-1 items-center">< BiBook className="text-1xl"/> 24/07/2024</span>
                <b className="text-2xl -mt-3">.</b>
                <span className="text-gray-500 flex items-center gap-2">
                  <LuGraduationCap className="text-2xl" /> 2,250 Students
                </span>
              </div>
            </div>
            <div className="flex gap-2 items-center mt-6">
              <Button className="rounded-3xl bg-purple-800 px-7 py-3">Overview</Button>
              <Button className="rounded-3xl bg-gray-400 px-7 py-3">Curriculum</Button>
              <Button className="rounded-3xl bg-gray-400 px-7 py-3">Instructors</Button>
              <Button className="rounded-3xl bg-gray-400 px-7 py-3">Reviews</Button>
            </div>
            <div className="mt-6 p-4 border-2 border-gray-400 shadow-xl space-y-5">
              <h3 className="text-3xl font-bold">Course Description</h3>
              <article>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                ea. Eaque magnam accusantium asperiores architecto, vero
                dignissimos numquam cupiditate optio tempora aliquid! Totam
                doloremque quae quaerat nesciunt eveniet ipsa tempore voluptate
                sed ab excepturi facere itaque aperiam corrupti cum molestias
                mollitia cumque aliquid suscipit natus, maiores officiis
                quisquam. Illum est quisquam reiciendis consequatur, inventore
                quae nesciunt animi! Dicta expedita excepturi reprehenderit
                provident assumenda libero. Odio corrupti porro ipsam, maxime
                eveniet velit, sed iure harum et laboriosam debitis a molestiae
                optio alias autem possimus expedita. Iste doloremque ut fuga,
                aliquam ipsa eveniet distinctio! Expedita itaque error
                laboriosam dignissimos dolorem vitae reprehenderit.
              </article>
              <h3 className="text-3xl font-bold">
                What You&apos;ll learn in this course?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ab
                dignissimos sequi quisquam neque? Repellat quam cum laboriosam?
                Quod quas culpa eos soluta eligendi quisquam distinctio amet
                maxime, quia porro odio. Necessitatibus minima possimus nulla
                inventore enim quaerat recusandae voluptas?
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex gap-2 font-bold">
                  <FaChevronRight className="bg-purple-800  text-white rounded-full text-3xl p-2 " />
                  Work with color & Gradients & Grids
                </li>
                <li className="flex gap-2 font-bold">
                  <FaChevronRight className="bg-purple-800 text-white rounded-full text-3xl p-2" />
                  All the usefull shortcuts
                </li>
                <li className="flex gap-2 font-bold">
                  <FaChevronRight className="bg-purple-800 text-white rounded-full text-3xl p-2" />
                  Be able to create Flyers, Brochures, Advertisement
                </li>
                <li className="flex gap-2 font-bold">
                  <FaChevronRight className="bg-purple-800 text-white rounded-full text-3xl p-2" />
                  How to work with Images & Text
                </li>
              </ul>
              <div className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                odit ad laudantium, sint doloremque libero sapiente quos nemo
                pariatur, laborum quod labore repudiandae. Maxime atque est
                pariatur repellendus consectetur nostrum sunt veritatis
                voluptatem totam sit facilis quidem eius officia laborum, vel
                perspiciatis quia eligendi temporibus possimus, fuga numquam
                corrupti repudiandae!
              </div>
            </div>
          </section>
          <aside className="lg:block md:hidden sm:hidden p-5 flex flex-col gap-4 border-[1px] border-[#856088] shadow-xl w-72 h-[35rem]">
            <div className="p-4 flex flex-col shadow-2xl bg-purple-950 rounded-md text-white">
              <span>This Couse Fee:</span>
              <b className="text-3xl font-extrabold">12,000 NGN</b>
              <u className="line-through ml-36 text-2xl">40,000</u>
            </div>
            <div className="flex flex-col mt-5">
              <h3>Course Includes:</h3>
              <ul className="space-y-2 mt-3">
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <MdOutlineSignalCellularAlt /> Level
                  </span>
                  Expert
                </li>
                <Separator />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <CgTime /> Duration{" "}
                  </span>{" "}
                  11h 20m
                </li>
                <Separator />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <BiBook /> Lesson{" "}
                  </span>{" "}
                  12
                </li>
                <Separator />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center"> 
                    <BiExtension /> Quizzes
                  </span>{" "}
                  145
                </li>
                <Separator />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <PiCertificate /> Certification{" "}
                  </span>{" "}
                  yes
                </li>
                <Separator />
                <li className="flex justify-between">
                  <span className="flex gap-2 items-center">
                    <LuGraduationCap /> Graduation{" "}
                  </span>{" "}
                  670
                </li>
                <Separator />
              </ul>
            </div>
            <div className="mt-4">
              <h3>Secure Payment</h3>
            </div>
            <Separator />
            <div className="mt-4">
              <h3>Secure Payment</h3>
            </div>
            <Separator />
            <Button className="flex gap-4  w-full m-auto rounded-3xl bg-purple-900 text-white">
              See All Courses <MdArrowRightAlt />
            </Button>
          </aside>
        </div>
      </main>
    </React.Fragment>
  );
};

const Breadcrumbs = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" className="text-[#1C1A4A]">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-black"/>
        <BreadcrumbItem>
          <BreadcrumbLink href="/resources" className="text-[#1C1A4A]">Resources</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-black" />
        <BreadcrumbItem>
          <BreadcrumbPage className="text-[#4B0082]">
            Resolving Conflicts Between Designers And Engineers
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
export default Demo;
