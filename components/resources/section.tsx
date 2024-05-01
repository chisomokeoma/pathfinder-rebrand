"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { MdArrowRightAlt, MdGridView } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import { ResourcesData } from "./data";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TiStarFullOutline } from "react-icons/ti";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { usePortal } from "@ibnlanre/portal";
import { userAtom } from "@/api/queries-store";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { FaStar } from "react-icons/fa";
import ListSkeleton from "../skeletons/list-skeleton";

export default function Sections() {
  const num = 100;
  const { push, replace } = useRouter();
  const [user, setUser] = usePortal.atom(userAtom);
  console.log(user, "user");

  const { data: courseList, isLoading } = useQuery({
    queryFn: () => builder.use().resources.courses.fetch(),
    queryKey: builder.resources.courses.fetch.get(),
    select: ({ data }) => data,
  });
  console.log(courseList, " course");

  return (
    <React.Fragment>
      <main className="">
        <div className="flex justify-between items-center">
          <span>Showing {num} Results</span>
          <div className="flex gap-2 items-center">
            <span>Sort By:</span>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Most popular" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="light">Most popular</SelectItem>
                <SelectItem value="dark">Categories</SelectItem>
                <SelectItem value="system">Price</SelectItem>
              </SelectContent>
            </Select>

            <MdGridView size={32} className="bg-purple-700 text-white p-1" />
            <TfiMenuAlt size={32} />

            {user?.role === "MENTOR" ? (
              <Link href="/resources/create-resource">
                <Button className="h-[50px]" variant="primary">
                  <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                    Create Resources
                  </span>
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
        <section>
          {isLoading ? (
            <ListSkeleton />
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-2">
              {courseList?.map((resource) => {
                return (
                  <Card
                    key={resource.id}
                    className="  flex flex-col  gap-4 w-80 p-4"
                  >
                    <Image
                      src={resource?.coverPhoto ?? ""}
                      alt="course picture"
                      width={100}
                      height={100}
                      className="w-72  block m-auto"
                    />
                    <div className="flex items-center gap-10 justify-between">
                      <Badge variant="outline">{resource?.category}</Badge>
                      <article className=" flex gap-[5px] items-center ">
                        <FaStar color="#F8BC24" />

                        <p className="text-[13px] font-normal text-[#7F7E97]">
                          4.8 Ratings
                        </p>
                      </article>
                    </div>
                    <p className="font-bold p-0 items-start">
                      {resource?.title}
                    </p>
                    <span className="p-0 ml-0 ">
                      By {resource?.owner?.name}
                    </span>

                    <div className="flex justify-between items-center">
                      <Button
                        variant="primary"
                        className="rounded-3xl flex gap-2 text-white"
                        onClick={() => push(`/resources/${resource?.id}`)}
                      >
                        Enrol Now <MdArrowRightAlt />
                      </Button>
                      <span className="text-blue-700 capitalize">
                        {resource.price}
                      </span>
                    </div>
                    {/* {resources.foot} */}
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </main>
    </React.Fragment>
  );
}
