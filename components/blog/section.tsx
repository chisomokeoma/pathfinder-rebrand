"use client";
import React from "react";

import { allBlogs } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { TiStarFullOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { Button } from "@mantine/core";
import Link from "next/link";
import { usePortal } from "@ibnlanre/portal";
import { userAtom } from "@/api/queries-store";
function formatDate(dateString: any) {
  // Parse the ISO string to a Date object
  const date = parseISO(dateString);
  // Format the date to a more readable form
  return format(date, "MMMM do, yyyy");
}

export default function SectionsBlog() {
  const ResourcesData = allBlogs;
  const [user, setUser] = usePortal.atom(userAtom);
  const { data: articleList, isLoading } = useQuery({
    queryFn: () => builder.use().resources.article.fetch(),
    queryKey: builder.resources.article.fetch.get(),
    select: ({ data }) => data,
  });

  return (
    <React.Fragment>
      <main className="">
        <section>
          {user?.role === "MENTOR" ? (
            <Link href="/blogs/create-article">
              <Button className="h-[50px]" variant="primary">
                <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                  Create Resources
                </span>
              </Button>
            </Link>
          ) : null}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-2">
            {articleList?.map((resources) => {
              return (
                <Card
                  key={resources?.id}
                  className="relative  flex flex-col  gap-4 w-80 p-4 border-l-0 border-r-2 border-t-2"
                >
                  <Image
                    src={resources?.coverPhoto ?? ""}
                    alt="blog"
                    width={100}
                    height={100}
                    className="w-72  block m-auto"
                  />
                  <Badge
                    variant="outline"
                    className="absolute top-6 left-4 text-md bg-purple text-white"
                  >
                    {resources?.category}
                  </Badge>
                  {/* <span className="flex items-center"> <TiStarFullOutline className="text-yellow-400"/> ({resources.review} Reviews)</span>
                   */}
                  <div className="flex gap-4">
                    <span className="flex gap-2 items-center text-sm group-hover:underline">
                      <CiCalendarDate /> {formatDate(resources?.createdAt)}
                    </span>
                    <span className="p-0 ml-0 flex gap-1 items-center text-sm">
                      {" "}
                      <CgProfile /> By {resources?.owner?.name}
                    </span>
                  </div>
                  <p className="font-bold p-0 items-start">
                    {resources?.title}
                  </p>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
