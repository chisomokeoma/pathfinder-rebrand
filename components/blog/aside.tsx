// "use client"
import { allBlogs } from "@/.contentlayer/generated";
// import { useLiveReload } from 'next-contentlayer2/hooks'
import { Card, CardHeader, CardTitle } from "../ui/card";
import { BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";
import Search from "./search";
import { sortBlogs } from "@/lib/utils";
import { FaChevronRight } from "react-icons/fa";
import { format, parseISO } from "date-fns";
import { CiCalendarDate } from "react-icons/ci";
function formatDate(dateString: any) {
  // Parse the ISO string to a Date object
  const date = parseISO(dateString);
  // Format the date to a more readable form
  return format(date, "MMMM do, yyyy");
}

export interface BlogCat {
  title: string;
  description: string;
  _id: string;
  tags: string;
  image: string;
  publishedAt: string;
}

//   const blogCat = sortBlogs(allBlogs)
export default function AsideBlog() {
  // useLiveReload()

  return (
    <>
      <main className="flex flex-col gap-12">
        <Search />
        <Cate />
        <LatestBlogs />
      </main>
    </>
  );
}

const Cate = () => {
  const blogCat = allBlogs;
  return (
    <Card className="p-4 px-8 w-72 bg-[#85608833]">
      <div className="space-y-4 ">
        <h3 className="font-bold text-2xl">Categories</h3>

        <div className="space-y-1">
          {blogCat.map((cate) => {
            return (
              <ul className="flex flex-col gap-6 p-4" key={cate._id}>
                <div className="flex gap-2 items-center group">
                <FaChevronRight className="text-purple text-[1.1rem] font-light" />
                  <li className="text-[1.2rem] font-medium">
                    <Link href="/">{cate.tags}</Link>
                  </li>
                </div>
              </ul>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

const LatestBlogs = () => {
  const blogCat = allBlogs.slice(0, 4);

  return (
    <section className="p-6 px-2 w-72 bg-[#85608833]">
      <h2 className="font-bold text-2xl ml-7">Latest blogs</h2>
      <ul className="flex flex-col gap-8 p-">
        {blogCat.map((cat) => {
          return (
            <li key={cat._id} className="flex gap-4 items-center">
              <Link href="/" className="flex gap-4 items-center group">
                <Image
                  src={cat.image?.filePath.replace("../public", "" ) ?? ""}
                  width={100}
                  height={100}
                  alt="blog"
                  className="group-hover:animate-pulse"
                />
                <div className="flex flex-col gap-2">
                  <span className="flex gap-2 items-center text-sm group-hover:underline">
                    <CiCalendarDate /> {formatDate(cat.publishedAt)}
                  </span>
                  <p className="text-md font-semibold group-hover:underline">{cat.title}</p>
                </div>
              </Link>
              {/* this error means nothing just a typescript minor error but we can ignore it for now  */}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
