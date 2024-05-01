"use client"

import { Carousel } from "@mantine/carousel";
import { Button } from '@mantine/core'
import { ArrowRight, Link } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'


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


export default function CarouselSection() {

  return (
    <section className=" ">
          <Carousel
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
            {carouselList.map((item, index) => (
              <Carousel.Slide key={index} styles={{}}>
                <Link
                  href="/resources"
                  className=" p-[clamp(12px,1.8vw,26px)] flex flex-col gap-[clamp(10px,1.4vw,20px)] bg-white rounded-lg"
                >
                  <figure className=" w-[clamp(200px,19vw,278px)] ">
                    <Image
                      src={item.img}
                      width={20}
                      height={20}
                      alt="laravel img"
                      className="w-full "
                    />
                  </figure>
                  <section className=" flex flex-col gap-[22px] ">
                    <div className=" flex justify-between items-center">
                      <article className=" py-[7px] px-[13px] bg-[#EFEFF2] rounded-[50px]">
                        <p className=" text-[#161439] text-[13px] font-medium">
                          {item?.skill}
                        </p>
                      </article>
                      <article className=" flex gap-1 items-center ">
                        <FaStar size={14} color="#F8BC24" />
                        <p className=" text-[#7F7E97] font-normal text-[14px]">
                          (4.5 Reviews)
                        </p>
                      </article>
                    </div>
                    <div className=" flex flex-col gap-[23px] ">
                      <section className=" flex flex-col gap[14px]">
                        <h3 className=" text-[18px] font-semibold">
                          {item.details}
                        </h3>
                        <p className=" text-[#6D6C80] text-[15px] font-normal">
                          By{" "}
                          <span className=" text-[15px] font-normal text-[#161439]">
                            {item.name}
                          </span>
                        </p>
                      </section>

                      <section className=" flex gap-[30px] items-center ">
                        <Button
                          component={Link}
                          href={`/mentors/${item.id}`}
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
                            Enroll Now
                            <ArrowRight size={14} color="white" />
                          </span>
                        </Button>
                        <p className=" text-[#5751E1] font-bold text-[20px] whitespace-nowrap">
                          12,000 NGN
                        </p>
                      </section>
                    </div>
                  </section>
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
         </section>
  )
}
