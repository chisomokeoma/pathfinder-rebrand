"use client"
import React from "react";


import { allBlogs } from "@/.contentlayer/generated";
import { format, parseISO } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";
import Image from "next/image";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge"
import { TiStarFullOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
function formatDate(dateString: any) {
    // Parse the ISO string to a Date object
    const date = parseISO(dateString);
    // Format the date to a more readable form
    return format(date, "MMMM do, yyyy");
  }

export default function SectionsBlog() {
  const ResourcesData = allBlogs;
  return (
    <React.Fragment>
      <main className="">
        
        <section>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-2">
            {ResourcesData.map((resources) => {
              return (
                <Card key={resources._id} className="relative  flex flex-col  gap-4 w-80 p-4 border-l-0 border-r-2 border-t-2">
                  <Image
                    src={resources.image?.filePath.replace("../public", "") ?? ""}
                    alt="blog"
                    width={100}
                    height={100}
                    className="w-72  block m-auto"
                  />
                  <Badge variant="outline" className="absolute top-2 left-4 text-md bg-purple text-white">{resources.tags}</Badge> 
                   {/* <span className="flex items-center"> <TiStarFullOutline className="text-yellow-400"/> ({resources.review} Reviews)</span>
                    */}
                    <div className="flex gap-4">
                    <span className="flex gap-2 items-center text-sm group-hover:underline">
                    <CiCalendarDate /> {formatDate(resources.publishedAt)}
                  </span>
                    <span className="p-0 ml-0 flex gap-1 items-center text-sm"> <CgProfile /> By {resources.author}</span>
                  
                    </div>
                  <p className="font-bold p-0 items-start">{resources.description}</p>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
