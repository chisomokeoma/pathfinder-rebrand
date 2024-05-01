import { Button } from "../ui/button";
import { MdArrowRightAlt } from "react-icons/md";
import img1 from "@/public/images/course.png";
import img3 from "@/public/images/marketing.png";
import img2 from "@/public/images/Ai.png";
import img4 from "@/public/images/Finacial.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

interface CateProps {
  title: string;
  num: number;
  // button: Element
  id: number;
}

interface ResourcesProps {
  id: number;
  img: StaticImageData;
  tag: string;
  review: number;
  desc: string;
  by: string;
  foot: JSX.Element;
}

export const ResourcesData: ResourcesProps[] = [
  {
    id: 0,
    img: img1,
    tag: "Development",
    review: 4.8,
    desc: "Learning Javascript With Imagination",
    by: "Ngozi Onwuka",
    foot: (
      <span className="text-blue-700 capitalize font-bold">12,000 NGN</span>

      // <div className="flex justify-between  items-center">
      //   <Button className="rounded-3xl flex gap-2" asChild>
      //       <Link href="/resources/details">
      //       Enrol Now <MdArrowRightAlt />
      //       </Link>

      //   </Button>
      //   <span className="text-blue-700 capitalize font-bold">12,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 1,
    img: img2,
    tag: "Design",
    review: 4.5,
    desc: "The Complete Graphic Design for Beginners",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">9,990 NGN</span>
      // </div>
    ),
  },
  {
    id: 2,
    img: img3,
    tag: "Marketing",
    review: 4.3,
    desc: "Learning Digital Marketing on Facebook",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">

      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">14,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 3,
    img: img4,
    tag: "Business",
    review: 4.8,
    desc: "Financial Analyst Training & Investing Course",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">20,000 NGN</span>
      // </div>
    ),
  },

  {
    id: 4,
    img: img1,
    tag: "Development",
    review: 4.8,
    desc: "Learning Javascript With Imagination",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize font-bold">12,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 5,
    img: img2,
    tag: "Design",
    review: 4.5,
    desc: "The Complete Graphic Design for Beginners",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-1">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">9,990 NGN</span>
      // </div>
    ),
  },
  {
    id: 6,
    img: img3,
    tag: "Marketing",
    review: 4.3,
    desc: "Learning Digital Marketing on Facebook",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">14,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 7,
    img: img4,
    tag: "Business",
    review: 4.8,
    desc: "Financial Analyst Training & Investing Course",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">20,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 8,
    img: img1,
    tag: "Development",
    review: 4.8,
    desc: "Learning Javascript With Imagination",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize font-bold">12,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 9,
    img: img2,
    tag: "Design",
    review: 4.5,
    desc: "The Complete Graphic Design for Beginners",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">9,990 NGN</span>
      // </div>
    ),
  },
  {
    id: 10,
    img: img3,
    tag: "Marketing",
    review: 4.3,
    desc: "Learning Digital Marketing on Facebook",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center">
      //   <Button className="rounded-3xl flex gap-2">
      //     Enrol Now <MdArrowRightAlt />
      //   </Button>
      <span className="text-blue-700 capitalize">14,000 NGN</span>
      // </div>
    ),
  },
  {
    id: 11,
    img: img4,
    tag: "Business",
    review: 4.8,
    desc: "Financial Analyst Training & Investing Course",
    by: "Ngozi Onwuka",
    foot: (
      // <div className="flex justify-between items-center gap-20">
      //   <Button className="rounded-3xl flex gap-2 ">
      //     Enrol Now <MdArrowRightAlt/>
      //   </Button>
      <span className="text-blue-700 capitalize">20,000 NGN</span>
      // </div>
    ),
  },
];

export const Cates: CateProps[] = [
  {
    title: "Art & Design",
    num: 8,
    id: 1,
  },
  {
    title: "Business",
    num: 12,
    id: 2,
  },
  {
    title: "Data Science",
    num: 17,
    id: 3,
  },
  {
    title: "Development",
    num: 10,
    id: 4,
  },
  {
    title: "Finance",
    num: 8,
    id: 5,
  },
  {
    title: "Health & Fitness",
    num: 8,
    id: 5,
  },
  {
    title: "Lifestyle",
    num: 9,
    id: 6,
  },
];

export const Instructors: CateProps[] = [
  {
    title: "Ngozi Onwuka",
    num: 10,
    id: 1,
  },
  {
    title: "Olamide Adeyemi",
    num: 13,
    id: 2,
  },
  {
    title: "Uche Eze",
    num: 22,
    id: 3,
  },
  {
    title: "Mohammed Ali",
    num: 42,
    id: 4,
  },
];
