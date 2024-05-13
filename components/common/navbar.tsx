"use client";

import { Avatar, Button, FileInput, Menu, Popover, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import NotificationIcon from "../home/notification-icon";
import HamburgerMenu from "./hamburger-menu";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import { cookieStorage, usePortal } from "@ibnlanre/portal";
import { refetchUserDetails, userAtom } from "@/api/queries-store";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { UserRole } from "@/types";

const navArray = [
  { name: "Home", link: "/", dropDown: <IoIosArrowDown /> },
  { name: "Resources", link: "/resources", dropDown: <IoIosArrowDown /> },
  {
    name: "Mentors",
    link: "/mentors",
    dropDown: (
      <span className="">
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <span>
              <IoIosArrowDown />
            </span>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Link href="/mentors/requests">
                <p className=" text-[14px] text-black font-normal z-50 cursor-pointer p-1 hover:bg-slate-300">
                  Mentorship requests
                </p>
              </Link>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </span>
    ),
  },

  { name: "Blog", link: "/blogs" },
  { name: "Messages", link: "/messages" },
];
export default function NavBar() {
  const [user, setUser] = usePortal.atom(userAtom);
  const auth = cookieStorage.getItem("pathfinder-auth");
  const [refetch, setrefetch] = usePortal.atom(refetchUserDetails);

  const { data: userDetails } = useQuery({
    queryFn: () => builder.use().user.user_details(),
    queryKey: [...builder.user.user_details.get(), refetch],
    select: ({ data }) => data,
    enabled: !!auth,
  });

  useEffect(() => {
    if (userDetails) {
      setUser(userDetails);
      setrefetch(false);
    }
  }, [userDetails]);

  console.log({ user });
  console.log(user?.profilePicture, "profile");
  const { push } = useRouter();

  const [img, setImg] = useState<File | null>(null);

  const uploadPicture = (payload: FormData) => {
    toast.promise(builder.use().user.upload_profile_picture(payload), {
      loading: "Uploading profile picture...",
      success: () => {
        location.reload();
        return "Success";
      },
      error: "Error uploading profile picture",
    });
  };

  useEffect(() => {
    if (img) {
      const formData = new FormData();
      formData.append("profile_picture", img);
      uploadPicture(formData);
    }
  }, [img]);
  return (
    <nav className="py-[11px] sticky top-0 bg-white w-full z-10">
      <div className="flex items-center max-w-[1400px] mx-auto px-4 justify-between">
        <section className=" flex gap-[clamp(2.5rem,5.9vw,5.3rem)] items-center">
          <figure className=" w-[clamp(2.7rem,4.4vw,4.4rem)] h-[clamp(2.7rem,4.4vw,4.4rem)]">
            <Image
              className="!h-full !w-full"
              src="/logo.svg"
              width={100}
              height={0}
              alt="logo"
            />
          </figure>

          <div className=" flex justify-between gap-[clamp(14px,1.8vw,27px)] max-[738px]:hidden">
            {navArray.map((item, index) => (
              <div key={index} className=" flex gap-[10px] ">
                <Link
                  href={item.link}
                  className=" flex items-center cursor-pointer"
                >
                  <p className=" text-[#161439] font-medium text-base  hover:text-purple">
                    {item.name}
                  </p>
                </Link>
                {user ? (
                  <span className="pt-3  cursor-pointer ">
                    {/* <IoIosArrowDown /> */}
                    {item.dropDown}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </section>
        <section className=" flex gap-6 items-center ">
          <div className="flex border-[#8D9DB5] h-12 px-[9px] border items-center rounded-[50px] min-w-[120px] w-[80%] overflow-hidden  max-[1275px]:hidden">
            <article className=" flex gap-[10px] items-center">
              <TbCategoryPlus color="#7630F7" />
              <p className=" text-black text-[14px] font-medium">Categories</p>
              <MdOutlineKeyboardArrowDown />
            </article>
            <input
              type="text"
              placeholder="Search For Mentors . . ."
              className="border-none outline-none placeholder:text-[14px] placeholder:text-[#8D9DB5] placeholder:font-normal border-l"
            />
          </div>

          <div className=" flex items-center gap-[clamp(15px,2vw,29px)]">
            <article className=" flex gap-[29px]">
              <div className=" gap-[14px] flex items-center  ">
                {/* <article className=" hidden relative max-[735px]:flex ">
                              <div
                                className=" flex rounded-full bg-purple items-center justify-center p-[4px] w-[25px] h-[25px] absolute left-[21px] bottom-[29px]
    "
                              >
                                <p className=" text-white">0</p>
                              </div>

                              <span>
                              <GiHamburgerMenu
                                size={24}
                                className="cursor-pointer"
                              />
                              <LoveIcon />
                              </span>
                            </article> */}
                {/* <div className=" hidden max-[735px]:flex  ">
                              <Menu shadow="md" width={200}>
                                <Menu.Target>
                                  <span>
                                  <GiHamburgerMenu
                                size={24}
                                className="cursor-pointer"
                              />
                                  </span>
                                </Menu.Target>

                                <Menu.Dropdown>
                                  <Menu.Item>
                                    <Link href="./mentors/requests">
                                      <p className=" text-[14px] text-black font-normal z-50 cursor-pointer p-1 hover:bg-slate-300">
                                        Mentorship requests
                                      </p>
                                    </Link>
                                  </Menu.Item>
                                </Menu.Dropdown>
                              </Menu>
                            </div> */}
                <div className=" hidden max-[735px]:flex  ">
                  <HamburgerMenu />
                </div>

                <Link href="/notification" className=" relative">
                  <div
                    className=" flex rounded-full bg-purple items-center justify-center p-[4px] w-[25px] h-[25px] absolute left-[21px] bottom-[29px]
    "
                  >
                    <p className=" text-white">0</p>
                  </div>

                  <span>
                    <NotificationIcon />
                  </span>
                </Link>
              </div>
            </article>

            {user?.isVerified ? (
              <div className="flex items-center">
                {/* <Popover
                  width="fit-content"
                  position="bottom"
                  withArrow
                  shadow="md"
                >
                  <Popover.Target>
                    <Avatar
                      size={40}
                      radius="xl"
                      alt="profile picture"
                      src={user?.profilePicture ?? ""}
                      className=" cursor-pointer"
                    />
                  </Popover.Target>
                  <Popover.Dropdown>
                    <h3 className="whitespace-nowrap">{user?.name}</h3>
                    <p>{user?.role}</p>
                    <label
                      htmlFor="profile-input"
                      className=" text-[18px] font-semibold text-purple cursor-pointer"
                    >
                      Change Image
                    </label>
                    <FileInput
                      id="profile-input"
                      value={img}
                      onChange={setImg}
                      className="hidden"
                      accept="image/png,image/jpeg"
                    />
                    <p
                      onClick={() => {
                        location.href = "/";
                        cookieStorage.clear();
                      }}
                      className=" text-[18px] font-semibold text-purple cursor-pointer"
                    >
                      Log Out
                    </p>
                  </Popover.Dropdown>
                </Popover> */}

                <Menu>
                  <Menu.Target>
                    <Avatar
                      size={40}
                      radius="xl"
                      alt="profile picture"
                      src={user?.profilePicture ?? ""}
                      className=" cursor-pointer"
                    />
                  </Menu.Target>

                  <Menu.Dropdown>
                    <Menu.Item>
                      <h3 className="whitespace-nowrap">{user?.name}</h3>
                      <p>{user?.role}</p>
                    </Menu.Item>
                    <Menu.Item>
                      <label
                        htmlFor="profile-input"
                        className=" text-[18px] font-semibold text-purple cursor-pointer"
                      >
                        Change Image
                      </label>
                      <FileInput
                        id="profile-input"
                        value={img}
                        onChange={setImg}
                        className="hidden"
                        accept="image/png,image/jpeg"
                      />
                    </Menu.Item>
                    {/* <Menu.Item>
                      <Link
                        href={
                          user?.role === UserRole.MENTOR
                            ? "/user-profile"
                            : "/user-profile/mentee"
                        }
                        className="text-[18px] font-semibold text-purple cursor-pointer"
                      >
                        Profile
                      </Link>
                    </Menu.Item> */}
                    <Menu.Item>
                      <p
                        onClick={() => {
                          location.href = "/";
                          cookieStorage.clear();
                        }}
                        className=" text-[18px] font-semibold text-purple cursor-pointer"
                      >
                        Log Out
                      </p>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            ) : (
              <Link href="/login">
                <Button
                  style={{
                    height: "40px",
                    borderRadius: "50px",
                    backgroundColor: "#4B0082",
                    color: "#fff",
                    paddingInline: "30px",
                  }}
                >
                  <span className="font-semibold text-[16px] "> Log in</span>
                </Button>
              </Link>
            )}
          </div>
        </section>
      </div>
    </nav>
  );
}
