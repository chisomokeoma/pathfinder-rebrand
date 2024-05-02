"use client";

import Development from "@/components/icons/development";
import Finance from "@/components/icons/finance";
import GraphicsDesign from "@/components/icons/graphics-design";
import HeroText from "@/components/icons/hero-text";
import Lifestyle from "@/components/icons/lifestyle";
import Management from "@/components/icons/management";
import Marketing from "@/components/icons/marketing";
import { Accordion, Avatar, Button, TextInput } from "@mantine/core";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import Image from "next/image";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import MentorText from "@/components/home/mentor-text";
import { Carousel } from "@mantine/carousel";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaStar,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import clsx from "clsx";
import Curve from "@/components/home/curve";
import { CiCalendar } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import CarouselSection from "@/components/home/carousel-section";
import AccordionSection from "@/components/home/accordion-section";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { usePortal } from "@ibnlanre/portal";
import { userAtom } from "@/api/queries-store";
import {ArticleCard} from "@/components/resources/article-card";
import {CourseCard} from "@/components/resources/course-card";
import { ResourceType } from "@/types";

const items = [
  {
    icon: <GraphicsDesign />,
    text: "Graphic Design",
    number: 22,
  },
  {
    icon: <Finance />,
    text: "Finance",
    number: 41,
  },
  {
    icon: <Development />,
    text: "Development",
    number: 29,
  },
  {
    icon: <Marketing />,
    text: "Marketing",
    number: 22,
  },
  {
    icon: <Lifestyle />,
    text: "Life Style",
    number: 22,
  },
  {
    icon: <Management />,
    text: "Management",
    number: 22,
  },
];

const carouselList = [
  {
    name: "Ngozi Onwuka",
    img: "/expertise1.svg",
    skill: " Development",
    details: "Learning JavaScript With Imagination",
    id: 1,
  },
  {
    name: "Stella Frank",
    img: "/crush.svg",
    skill: " Design",
    details: "The Complete Graphic Design for Beginners",
    id: 2,
  },
  {
    name: "Quenneth Yussuf",
    img: "/course.svg",
    skill: " Marketing",
    details: "Learning Digital Marketing on Facebook",
    id: 3,
  },
  {
    name: "Sonia Onwuka",
    img: "/pro.svg",
    skill: " Business",
    details: "Financial Analyst Training & Investing Course",
    id: 4,
  },
];

const mentorList = [
  "Meet Top Class Mentors",
  "Access Learning Resources",
  "Flexible Schedules",
];

const skilledMentors = [
  {
    name: "Olamide Adeyemi",
    skill: "UX Design Lead",
    img: "/instructor1.svg",
    id: 1,
  },
  {
    name: "Olivia Mia",
    skill: "Web Design",
    img: "/instructor2.svg",
    id: 2,
  },
  {
    name: "Ngozi Onwuka",
    skill: "Digital Marketing",
    img: "/instructor3.svg",
    id: 3,
  },
  {
    name: "Mohammed Ali",
    skill: "Web Development",
    img: "/instructor4.svg",
    id: 4,
  },
];

const communityList = [
  {
    image: "/learn-expert.svg",
    name: "Active Menteees",
  },

  {
    image: "/gain-knowledge.svg",
    name: "Resources",
  },
  {
    image: "/certificate.svg",
    name: "Mentors",
  },
  {
    image: "/network.svg",
    name: "Active Months",
  },
];

const blogs = [
  {
    img: "/wellness.svg",
    datails: "How To Become idiculously Self-Aware In 20 Minutes",
    tag: "Wellness",
  },
  {
    img: "/ui-ux.svg",
    datails: "Get Started With UI Design With Tips To Speed",
    tag: "UI/UX",
  },
  {
    img: "/career.svg",
    datails: " How to Write the Best Cv to Land that Next Job",
    tag: "Career",
  },
  {
    img: "/leadership.svg",
    datails: "Essential Leadership and Communication Skills",
    tag: "Leadership",
  },
];

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "50px",
    border: "0.93px solid #4B0082",
    width: "100%",
    paddingLeft: "14px",
  },
};
export default function Home() {
  const { push, replace } = useRouter();

  // const { data: categoryList } = useQuery({
  //   queryFn: () => builder.use().user.categories(),
  //   queryKey: builder.user.categories.get(),
  //   // select: ({}) =>
  // });
  console.log();
  const [user, setuser] = usePortal.atom(userAtom);
  const { data: courseList, isLoading } = useQuery({
    queryFn: () => builder.use().resources.courses.fetch(),
    queryKey: builder.resources.courses.fetch.get(),
    select: ({ data }) => data,
  });

  const { data: articleList, isLoading: articleLoading } = useQuery({
    queryFn: () => builder.use().resources.article.fetch(),
    queryKey: builder.resources.article.fetch.get(),
    select: ({ data }) => data,
  });

  const { data: mentorLists, isFetching } = useQuery({
    queryFn: () => builder.use().mentors.mentors_list(),
    queryKey: builder.mentors.mentors_list.get(),
    select: ({ data }) => data,
  });

  const statistics = [
    {
      name: "10K +",
      text: "Active Menteees",
    },

    {
      name: (courseList?.length ?? 0) + (articleList?.length ?? 0),
      text: "Resources",
    },
    {
      name: mentorList?.length ?? 0,
      text: "Mentors",
    },
    {
      name: "3",
      text: "Active Months",
    },
  ];

  return (
    <section>
      <section className="h-[520px] flex items-center bg-[url(/hero-bg-image.png)] bg-cover bg-center bg-no-repeat">
        <div className="flex max-w-[1400px] mx-auto items-center pl-[60px] justify-between max-[941px]:flex-col">
          <div className="flex flex-col gap-8">
            <div className="flex gap-3 flex-col">
              <div className="flex flex-col gap-1">
                <span className="inline-flex font-medium text-[40px] leading-[60px] items-end gap-1 max-[941px]:hidden">
                  Unlock Your <HeroText />
                </span>
                <span className="font-medium text-[clamp(32px,2.7vw,40px)] ">
                  Find <span className="font-bold">Your Mentor</span> Today{" "}
                </span>
              </div>
              <p className="text-[clamp(14px,1vw,18px)] leading-[28.8px] text-[#6D6C80]">
                Dream big with mentors to help guide your way.
              </p>
            </div>
            <Button
              component={Link}
              href="./create-account"
              styles={{
                root: {
                  boxShadow: "4px 6px 0px 0px #7630F7",
                  background: "#4B0082",
                  height: "49px",
                  paddingInline: "32px",
                  borderRadius: "50px",
                  width: "fit-content",
                },
              }}
            >
              <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                Get Started
                <ArrowRight size={14} color="white" />
              </span>
            </Button>
          </div>
          <Image
            src="/hero-image.png"
            width={600}
            height={600}
            className="h-full w-[720px] object-cover"
            alt="illustration"
          />
        </div>
      </section>
      <section className="mt-[120px] mb-[200px] max-w-[1400px] mx-auto px-4">
        <div className="gap-[14px] items-center flex flex-col">
          <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082]">
            Trending Categories
          </span>
          <h2 className="text-[36px] text-[#161439] tracking-[-0.75px] font-semibold">
            Top Category We Have
          </h2>
          <p className="text-center text-base text-[#020617] leading-7">
            Find mentors in any of these industries
          </p>
          <div className="bg-[#85608833] w-full rounded-[500px] pt-[52px] pb-[45px] px-[50px] flex items-center gap-[45px]">
            <span className="w-[50px] bg-[#4B0082] border border-[#F1F5F9] rounded-[25px] min-w-[50px] flex items-center justify-center h-[50px] min-h-[50px]">
              <ArrowLeft color="white" size={15} />
            </span>
            <div className="w-full flex gap-11 overflow-hidden">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center flex-col gap-3">
                  {item.icon}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-[18px] font-medium text-[#161439] leading-[27px]">
                      {item.text}
                    </p>
                    <span className="text-[#6D6C80] text-base leading-[20.8px]">
                      ({item.number})
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <span className="w-[50px] bg-[#4B0082] border border-[#F1F5F9] rounded-[25px] min-w-[50px] flex items-center justify-center h-[50px] min-h-[50px]">
              <ArrowRight color="white" size={15} />
            </span>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="mb-[100px] max-w-[1400px] mx-auto px-5 items-center">
        <section className="flex items-center ">
          <div className=" flex flex-1 flex-col">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yL3nyDDrY1k?si=PFFJ44UNV5ojuACI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div
              className=" py-[13px] px-[20px] flex flex-col gap-[2px] rounded-[10px] border border-[#B2BBCC] w-[220px] -mt-[1rem] -ml-[5rem]  bg-white"
              style={{ boxShadow: "0px 6px 0px 0px #B2BBCC" }}
            >
              <h4 className=" font-semibold text-[16px] text-[#161439]">
                10K+{" "}
                <span className=" font-medium text-[16px] text-purple">
                  Enrolled Mentees
                </span>
              </h4>
              <Avatar.Group>
                <Avatar src="/instructor1.svg" />
                <Avatar src="/instructor2.svg" />
                <Avatar src="/instructor3.svg" />
                <Avatar src="/instructor4.svg" />
                <Avatar>+2</Avatar>
              </Avatar.Group>
            </div>
          </div>

          <section className=" flex flex-col gap-[40px] flex-1">
            <div className="gap-[13px] flex flex-col">
              <article className=" px-4 py-[2px] bg-violet rounded-[30px] w-fit ">
                <p className="text-base font-medium text-purple">
                  More About Us
                </p>
              </article>
              <div className="flex flex-col gap-1">
                <span className="inline-flex font-semibold text-[36px] leading-[60px] items-end gap-1">
                  Top Class
                  <MentorText />
                </span>
                <span className="font-semibold text-[36px] leading-[60px]">
                  All in One Place
                </span>
              </div>
              <div className=" flex flex-col gap-[22px]">
                <p className=" w-[500px] text-[#020617] text-[16px] font-normal">
                  With a diverse network of mentors from various fields and
                  experiences, we strive to foster a community of empowered
                  individuals, ready to reach their fullest potential
                </p>

                {mentorList?.map((item, idx) => (
                  <ul
                    className=" flex flex-col gap-[15px] justify-center"
                    key={idx}
                  >
                    <article className=" flex gap-[16px]">
                      <div className=" rounded-full w-[30px] h-[30px] flex items-center p-[8px] bg-purple">
                        <MdOutlineArrowForwardIos size={16} color="white" />
                      </div>
                      <p className=" text-[18px] text-[#161439] font-semibold">
                        {item}
                      </p>
                    </article>
                  </ul>
                ))}
              </div>
            </div>
            <Button
              component={Link}
              href="/mentors"
              styles={{
                root: {
                  background: "#4B0082",
                  height: "49px",
                  paddingInline: "32px",
                  borderRadius: "50px",
                  width: "fit-content",
                },
              }}
            >
              <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                Expore
                <ArrowRight size={14} color="white" />
              </span>
            </Button>
          </section>
        </section>
      </section>

      {/* Explore Section */}
      <section className=" bg-[#85608833] h-[801px]  px-[100px] flex flex-col gap-[62px] py-[50px] items-center  mb-[21px]">
        <div className=" flex flex-col gap-[18px] items-center">
          <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082]">
            Top Class Courses
          </span>

          <h3 className=" font-semibold text-[36px] text-[#161439]">
            Explore Our Lessons and Webninars
          </h3>
        </div>

        <section className="flex w-full gap-4 overflow-x-scroll">
          {/* <Carousel
            styles={{
              root: {
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
              },
              container: {
                paddingRight: 0,
                marginRight: 0,
                flex: 1,
                alignItems: "center",
                justifyItems: "center",
              },
            }}
            withIndicators
            // height={200}
            slideSize={{ base: "100%", sm: "50%", md: "20.333333%" }}
            slideGap={{ base: 0, sm: "md" }}
            loop
            // slidesToScroll={4}
            align="start"
          >
            {courseList?.map((item) => (
              <Carousel.Slide styles={{}}>
                
              </Carousel.Slide>
            ))}
          </Carousel> */}
          {courseList?.map((item, idx) => (
            <CourseCard key={idx} {...item} />
          ))}
        </section>
      </section>

      {/* Subscribe Now Section */}
      <section className="h-[378px] bg-[#85608880]">
        <div className="flex max-w-[1400px] items-center  justify-between pl-[60px] pt-[15px]">
          <Image
            src="/subscribe.svg"
            width={600}
            height={600}
            className="h-full w-[380px] object-cover"
            alt="subscribe"
          />

          <section className=" flex items-center">
            <div className=" flex flex-col gap-[25px]">
              <h2 className=" w-[547px] text-[36px] text-white font-normal">
                Want to stay{" "}
                <span className=" text-[36px] font-bold">informed </span>
                about Our
                <span className="text-[36px] font-bold"> Offers?</span>
              </h2>
              <article className=" flex gap-[10px] ">
                <TextInput
                  disabled
                  placeholder="Type your e-mail"
                  styles={styles}
                />
                <Button
                  styles={{
                    root: {
                      background: "#4B0082",
                      height: "49px",
                      paddingInline: "32px",
                      borderRadius: "50px",
                      width: " fit-content",
                    },
                  }}
                >
                  <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                    Subscribe Now
                  </span>
                </Button>
              </article>
            </div>

            <Image
              src="/illustration.png"
              width={600}
              height={600}
              className="h-full w-[380px] object-cover"
              alt="illustration"
            />
          </section>
        </div>
      </section>

      {/* Skilled Mentors Section */}
      <section className=" flex justify-center px-[clamp(50px,7vw,100px)] py-[clamp(50px,7vw,100px)] items-center">
        <div className=" flex flex-col gap-[18px] flex-1 ">
          <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082] w-fit">
            Skilled Mentors
          </span>

          <section className=" flex flex-col gap-[16px]">
            <h3 className=" text-[#161439] font-semibold text-[36px] w-[348px]">
              Our Top Class Mentors
            </h3>
            <article className=" flex flex-col gap-[12px] ">
              <p className="w-[382px] text-[#6D6C80] text-normal text-[16px]">
                All our mentors are vetted and handpicked based on
                qualifications to offer only the best. Check each mentor’s
                profile, send a request and schedule a session.
              </p>
            </article>
            <Button
              href="/mentors"
              component={Link}
              styles={{
                root: {
                  background: "#4B0082",
                  height: "49px",
                  paddingInline: "32px",
                  borderRadius: "50px",
                  width: "fit-content",
                  "&:hover": {
                    backgroundColor: "#7630F7",
                  },
                },
              }}
            >
              <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                See All Mentors
                <ArrowRight size={14} color="white" />
              </span>
            </Button>
          </section>
        </div>

        <section className=" grid grid-cols-2 gap-[35px] ">
          {mentorLists?.map((item) => (
            <div key={item.id} className=" flex gap-[15px] items-center">
              <figure className="w-[235px] min-w-[166px] ">
                <Image
                  src={item?.profilePicture ?? ""}
                  alt="mentors-images"
                  width={100}
                  height={100}
                  className=" w-full"
                />
              </figure>
              <div className=" flex flex-col gap-[15px] ">
                <section className=" flex flex-col gap-[12px]">
                  <article className=" flex flex-col gap-2">
                    <h4 className=" text-[#161439] font-semibold text-[20px]">
                      {item.name}
                    </h4>
                    <p className=" text-[16px] text-lilac font-normal">
                      {item.industry}
                    </p>
                  </article>
                  <article className=" flex gap-[5px] items-center">
                    <FaStar color="#F8BC24" />

                    <p className="text-[15px] font-normal text-[#7F7E97]">
                      (4.8 Ratings)
                    </p>
                  </article>
                </section>
                {/* <div className=" flex gap-2 items-center">
                  <article className=" py-[8px] px-[11px] w-[36px] h-[36px] rounded-full border-[#9292B4] border items-center flex text-shadow">
                    <FaFacebookF color="#7F7E97" size={20} />
                  </article>
                  <article className=" py-[8px] px-[11px] w-[36px] h-[36px] rounded-full border-[#9292B4] border  items-center flex text-shadow">
                    <FaTwitter color="#7F7E97" size={20} />
                  </article>
                  <article className=" py-[8px] px-[11px] w-[36px] h-[36px] rounded-full border-[#9292B4] border  items-center flex text-shadow">
                    <FaWhatsapp color="#7F7E97" size={20} />
                  </article>
                  <article className=" py-[8px] px-[11px] w-[36px] h-[36px] rounded-full border-[#9292B4] border  items-center flex text-shadow">
                    <FaLinkedinIn color="#7F7E97" size={20} />
                  </article>
                  <article className=" py-[8px] px-[11px] w-[36px] h-[36px] rounded-full border-[#9292B4] border  items-center flex text-shadow">
                    <FaYoutube color="#7F7E97" size={20} />
                  </article>
                </div> */}
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* Mentorship Section */}
      <section className=" flex flex-col gap-[92px]  bg-[#F7F7F9] px-[clamp(50px,7vw,100px)] pb-[clamp(25px,3.4vw,50px)] background-shadow ">
        <div className=" flex py-[clamp(25px,3.7vw,54px)]   px-[clamp(40px,5.3vw,80px)]  bg-purple justify-between rounded-[40px] -mt-[4rem]  ">
          {statistics.map((item, idx) => (
            <article
              key={idx}
              className={clsx(
                item.text !== "Active Months"
                  ? "border-shadow pr-[80px]"
                  : null,
                "flex flex-col gap-2 "
              )}
            >
              <h4 className=" text-white font-semibold text-[50px]">
                {item.name}
              </h4>
              <p className=" text-[15px] text-white font-medium">{item.text}</p>
            </article>
          ))}
        </div>

        <section className=" flex gap-[70px] mx-auto max-w-[1440px] items-center ">
          {/* <div className=" flex flex-col"> */}

          {/* <p className=" rotated-text">* Connect* with *mentors* who *inspire*</p> */}

          {/* <Curve/> */}
          <figure className=" w-[clamp(275px,27vw,400px)] min-w-[275px] ">
            <Image
              src="mentorship.svg"
              alt="mentorship-image"
              width={20}
              height={20}
              className=" w-full"
            />
          </figure>
          {/* </div> */}

          <section className=" flex flex-col gap-[40px] flex-1 overflow-auto ">
            <div className=" flex flex-col gap-[13px]">
              <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082] w-fit">
                FAQs
              </span>
              <h4 className=" text-[36px] text-[#161439] font-semibold">
                Mentorship made Simple
              </h4>
            </div>

            <AccordionSection />
          </section>
        </section>
      </section>
      {/* Commmunity Section */}
      <section className=" flex px-[clamp(50px,7vw,100px)] pt-[clamp(50px,7vw,100px)] pb-[29px] flex-col justify-between bg-purple mx-auto items-center gap-[24px]">
        <h4 className=" text-[36px] font-semibold text-white pb-[40px]">
          Join Our Community Today!
        </h4>
        <div className="gap-[clamp(35px,4.8vw,70px)] flex items-center ">
          {communityList?.map((ele, idx) => (
            <article className=" flex flex-col gap-[24px]" key={idx}>
              <figure className="w-[94px]  ">
                <Image
                  src={ele.image}
                  alt="mentors-images"
                  width={100}
                  height={100}
                  className=" w-full"
                />
              </figure>
              <p className=" text-[20px] text-white font-semibold">
                {ele.name}
              </p>
            </article>
          ))}
        </div>

        <div className=" flex gap-[clamp(15px,2vw,30px)] pt-[40px]">
          <section className=" flex gap-[18px] bg-white rounded-[16px]">
            <figure
              className="w-[clamp(95px,13vw,190px)] bg-cover bg-no-repeat  "
              style={{
                backgroundImage: 'url("/mentorr-apply.svg")',
              }}
            ></figure>

            <div className=" flex flex-col gap-[5px] py-[clamp(22px,3vw,44px)]">
              <h3 className=" font-semibold text-[#161439] text-[28px]">
                Become a Mentor
              </h3>
              <p className=" w-[368px] text-base font-normal text-[#6D6C80] pb-2">
                Take the step to mentor people and make global impact while also
                enhancing your career
              </p>

              {/* {!user?.isVerified 


} */}
              <Button
                href="/create-account/details"
                component={Link}
                styles={{
                  root: {
                    background: "#4B0082",
                    height: "49px",
                    paddingInline: "32px",
                    borderRadius: "50px",
                    width: "fit-content",
                    "&:hover": {
                      backgroundColor: "#7630F7",
                    },
                  },
                }}
              >
                <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                  Apply Now
                  <ArrowRight size={14} color="white" />
                </span>
              </Button>
            </div>
          </section>

          <section className=" flex gap-[18px] bg-white rounded-[16px]">
            <figure
              className="w-[clamp(95px,13vw,190px)] bg-cover bg-no-repeat  "
              style={{
                backgroundImage: 'url("./menteee-apply.svg")',
              }}
            ></figure>

            <div className=" flex flex-col gap-[5px] py-[clamp(22px,3vw,44px)]">
              <h3 className=" font-semibold text-[#161439] text-[28px]">
                Become a Mentee
              </h3>
              <p className=" w-[340px] text-base font-normal text-[#6D6C80] pb-2  pr-1">
                Join millions of people from around the world to seek guidance
                and grow together.
              </p>

              <Button
                href="/create-account/details?view=mentee"
                component={Link}
                styles={{
                  root: {
                    background: "#4B0082",
                    height: "49px",
                    paddingInline: "32px",
                    borderRadius: "50px",
                    width: "fit-content",
                    "&:hover": {
                      backgroundColor: "#7630F7",
                    },
                  },
                }}
              >
                <span className="flex items-center text-base font-semibold leading-[17.92px] text-white gap-1">
                  Apply Now
                  <ArrowRight size={14} color="white" />
                </span>
              </Button>
            </div>
          </section>
        </div>
      </section>

      {/* Blogs Section         */}

      <section className=" background-shadow   px-[100px] flex flex-col gap-[62px] py-[50px] items-center  mb-[21px]">
        <div className=" flex flex-col gap-[18px] items-center">
          <span className="rounded-[30px] bg-[#EFEEFE] px-4 py-[2px] font-medium text-base leading-[25.92px] text-[#4B0082]">
            News & Blogs{" "}
          </span>

          <h3 className=" font-semibold text-[36px] text-[#161439]">
            Our Latest News Feed
          </h3>
        </div>
        <section className=" flex w-full overflow-x-scroll gap-[20px] ">
          {articleList?.map((item, idx) => (
            <ArticleCard key={idx} {...item} />
          ))}
        </section>
      </section>
    </section>
  );
}
