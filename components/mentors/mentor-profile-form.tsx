"use client";

import { builder } from "@/api/builder";
import Hero from "@/components/home/hero";
import classes from "@/components/home/signup.module.css";
import {
  Avatar,
  Button,
  FileInput,
  Menu,
  MenuDropdown,
  MenuItem,
  MenuTarget,
  MultiSelect,
  NumberInput,
  PasswordInput,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ArrowDown2, InfoCircle } from "iconsax-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineEmail } from "react-icons/md";

interface IMentorBiodata {
  name: string;
  gender: string;
  location: string;
  industry: string;
  yearsOfExperience: number | null;
  levelOfExpertise: string;
  availability: { dayAvailable: string; timeAvailable: number }[];
  bio: string;
  headline: string;
}

const styless = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    flex: 1,
    paddingLeft: "14px",
    fontSize: "18px",
  },
  label: {
    marginBottom: "5px",
  },
};

export default function MentorProfileForm() {
  const queryClient = useQueryClient();

  const mentorForm = useForm({
    initialValues: {
      name: "",
      gender: "",
      location: "",
      industry: "",
      yearsOfExperience: null,
      levelOfExpertise: "",
      availability: [],
      bio: "",
      headline: "",
    },
  });

  const [imgMentor, setImgMentor] = useState<File | null>(null);
  //   profile image
  const { mutate: mutatePicture, isLoading: pictureLoading } = useMutation({
    mutationFn: (payload: FormData) =>
      builder.use().user.upload_profile_picture(payload),
    onSuccess() {
      queryClient.invalidateQueries(builder.user.user_details.get());
      toast.success("Profile image successfully updated");
    },
  });
  // get user
  const { data: userDetails } = useQuery({
    queryFn: () => builder.use().user.user_details(),
    queryKey: builder.user.user_details.get(),
  });

  useEffect(() => {
    if (userDetails) {
      mentorForm.setValues({
        name: userDetails?.data?.name,
        gender: userDetails?.data?.gender,
        location: userDetails?.data?.location,
        industry: userDetails?.data?.industry,
        yearsOfExperience: userDetails?.data?.yearsOfExperience as any,
        levelOfExpertise: userDetails?.data?.levelOfExpertise,
        // availability: userDetails?.data?.availability?.map((item) => item),
        bio: userDetails?.data?.bio,
        headline: userDetails?.data?.headline,
      });
      form.setValues({
        entries: userDetails?.data?.availability?.map((el) => ({
          day: el?.dayAvailable,
          time: el?.timeAvailable,
        })),
      });
    }
    // form.setFieldValue("entries", userDetails?.data?.availability as any);
  }, [userDetails]);

  // edit profile
  const { mutate, isLoading } = useMutation({
    mutationFn: () => builder.use().user.mentor_biodata(mentorForm.values),
    onSuccess() {
      queryClient.invalidateQueries(builder.user.user_details.get());
      toast.success("Profile Updated successfully");
    },
  });

  // Created this state  to be able to disable button until the user changes something on the textInput.
  // So i updated the setState to all the textInput to be true norm, disabled takes only truty value. So until you edit something, submit buttion would be disabled
  const [editText, setEditText] = useState(false);

  enum TimeType {
    MIN = "MIN",
    HR = "HR",
  }

  const form = useForm<{
    entries: { day: string; time: number; type?: TimeType }[];
  }>({
    initialValues: {
      entries: [],
    },
  });

  console.log(!!imgMentor);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formDate = new FormData();
        if (imgMentor) {
          formDate.append("profile_picture", imgMentor as File);
          mutatePicture(formDate);
        }
        if (editText) {
          mutate();
        }
      }}
      className="mt-[100px] mb-[200px] mx-auto flex flex-col gap-[50px]  w-[clamp(421px,59vw,843px)] "
    >
      <div className=" flex p-6 gap-[70px] items-center bg-purple rounded-[10px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-6 items-center">
              <label htmlFor="file-input" className="relative cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-[-8px] right-[-8px]"
                >
                  <rect width="20" height="20" rx="5" fill="#4B0082" />
                  <path
                    d="M7.81657 14.1663H12.1832C13.3332 14.1663 13.7916 13.4622 13.8457 12.6038L14.0624 9.16217C14.1207 8.26217 13.4041 7.49967 12.4999 7.49967C12.2457 7.49967 12.0124 7.35384 11.8957 7.12884L11.5957 6.52467C11.4041 6.14551 10.9041 5.83301 10.4791 5.83301H9.52491C9.09574 5.83301 8.59574 6.14551 8.40407 6.52467L8.10407 7.12884C7.98741 7.35384 7.75407 7.49967 7.49991 7.49967C6.59574 7.49967 5.87907 8.26217 5.93741 9.16217L6.15407 12.6038C6.20407 13.4622 6.66657 14.1663 7.81657 14.1663Z"
                    stroke="white"
                    strokeWidth="0.9375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.375 8.33301H10.625"
                    stroke="white"
                    strokeWidth="0.9375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.99992 12.5003C10.7458 12.5003 11.3541 11.892 11.3541 11.1462C11.3541 10.4003 10.7458 9.79199 9.99992 9.79199C9.25409 9.79199 8.64575 10.4003 8.64575 11.1462C8.64575 11.892 9.25409 12.5003 9.99992 12.5003Z"
                    stroke="white"
                    strokeWidth="0.9375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <FileInput
                  id="file-input"
                  value={imgMentor}
                  onChange={(val) => {
                    setImgMentor(val);
                  }}
                  className="hidden"
                  accept="image/png,image/jpeg"
                />
                {imgMentor ? (
                  <Avatar
                    size={64}
                    radius={8}
                    src={URL.createObjectURL(imgMentor)}
                  />
                ) : (
                  // <svg
                  //   width="64"
                  //   height="65"
                  //   viewBox="0 0 64 65"
                  //   fill="none"
                  //   xmlns="http://www.w3.org/2000/svg"
                  // >
                  //   <rect
                  //     y="0.690918"
                  //     width="64"
                  //     height="64"
                  //     rx="8"
                  //     fill="#ECE8FF"
                  //   />
                  //   <path
                  //     d="M42.6666 44.6909V42.0243C42.6666 40.6098 42.1047 39.2532 41.1045 38.253C40.1043 37.2528 38.7477 36.6909 37.3333 36.6909H26.6666C25.2521 36.6909 23.8955 37.2528 22.8953 38.253C21.8952 39.2532 21.3333 40.6098 21.3333 42.0243V44.6909M37.3333 26.0243C37.3333 28.9698 34.9454 31.3576 31.9999 31.3576C29.0544 31.3576 26.6666 28.9698 26.6666 26.0243C26.6666 23.0787 29.0544 20.6909 31.9999 20.6909C34.9454 20.6909 37.3333 23.0787 37.3333 26.0243Z"
                  //     stroke="#4B0082"
                  //     strokeWidth="2.66667"
                  //     strokeLinecap="round"
                  //     strokeLinejoin="round"
                  //   />
                  // </svg>
                  <Avatar
                    size={64}
                    radius={8}
                    src={userDetails?.data?.profilePicture || ""}
                  />
                )}
              </label>
            </div>
          </div>
        </div>

        <section className=" flex flex-col gap-[12px] flex-1 ">
          <div className=" flex flex-col gap-[7px]">
            <article className=" flex gap-[11px] items-center">
              <p className=" text-white text-[24px] font-semibold">
                {userDetails?.data?.name}
              </p>
            </article>
            <p className=" text-white">{userDetails?.data?.role}</p>
          </div>

          <article className=" flex gap-[12px] items-center">
            <MdOutlineEmail size={24} color="#fff" />
            <div className=" flex gap-2">
              <p className=" text-white">{userDetails?.data?.email}</p>
            </div>
          </article>
        </section>
      </div>

      <div className=" flex flex-col flex-1 gap-[50px] px-[20px] pb-[30px] pt-[10px] justify-between  border-[#DFDFDF] border shadow-xl rounded-[10px]">
        <section className=" flex flex-col gap-4 ">
          <TextInput
            styles={styless}
            placeholder="Your Name"
            label="Name"
            value={mentorForm.values.name}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue("name", e.target.value);
            }}
          />
          <Select
            styles={styless}
            label="Gender"
            placeholder="Gender"
            data={["Male", "Female"]}
            value={mentorForm.values.gender}
            onChange={(val) => {
              setEditText(true);
              mentorForm.setFieldValue("gender", String(val));
            }}
            // {...mentorForm.getInputProps("gender")}
          />

          <TextInput
            styles={styless}
            label="Location"
            placeholder="Lagos, Nigeria"
            value={mentorForm.values.location}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue("location", e.target.value);
            }}
            // {...mentorForm.getInputProps("location")}
          />

          <TextInput
            styles={styless}
            label="Industry"
            placeholder="Technology"
            value={mentorForm?.values?.industry}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue("industry", e.target.value);
            }}
            // {...mentorForm.getInputProps("industry")}
          />

          <TextInput
            styles={styless}
            label="Headline"
            placeholder="Your headline"
            value={mentorForm?.values?.headline}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue("headline", e.target.value);
            }}
            // {...mentorForm.getInputProps("headline")}
          />

          {/* <div className=" flex flex-col border-[#A2A2A2] border px-[16px] pb-[16px] rounded-[7px] gap-1 ">
              <label
                htmlFor="Gender"
                className=" text-[#6F6F6F] text-[13px] font-semibold"
              >
                Availability
              </label>
              <article className=" justify-between flex">
                <input
                  type="text"
                  className=" border-none flex-1 outline-none placeholder:text-[17px] placeholder:text-[#161439] font-semibold"
                  placeholder="10 hours per week"
                />
                <RiEdit2Fill size={24} color="#6F6F6F" />
              </article>
            </div> */}

          <MultiSelect
            label={
              <span className="flex text-purple gap-1">
                <InfoCircle size={20} />
                Please choose the days and time you would be available for each
                day, you can update this later in your profile
              </span>
            }
            data={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
            styles={{
              ...styless,
              input: { ...styless.input, display: "flex" },
            }}
            placeholder="Availability"
            value={form.values.entries.map((item) => item?.day)}
            onChange={(val) => {
              form.setFieldValue(
                "entries",
                val.map((item) => ({
                  day: item,
                  time: 0,
                  type: TimeType.MIN,
                }))
              );
            }}
          />
          {form.values.entries.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <p>{item.day}</p>
              <NumberInput
                styles={{
                  input: { borderRadius: "8px", width: "100px" },
                  section: {
                    paddingRight: "8px",
                    width: "fit-content",
                  },
                }}
                clampBehavior="strict"
                max={item.type === TimeType.HR ? 24 : 60}
                rightSection={
                  <Menu
                    styles={{
                      item: {
                        fontSize: "14px",
                      },
                    }}
                  >
                    <MenuTarget>
                      <p className="flex cursor-pointer text-sm items-center gap-1">
                        {item?.type?.toLocaleLowerCase()}
                        <ArrowDown2 size={14} />
                      </p>
                    </MenuTarget>
                    <MenuDropdown>
                      <MenuItem
                        onClick={() =>
                          form.setFieldValue(`entries.${idx}.type`, TimeType.HR)
                        }
                      >
                        hr
                      </MenuItem>
                      <MenuItem
                        onClick={() =>
                          form.setFieldValue(
                            `entries.${idx}.type`,
                            TimeType.MIN
                          )
                        }
                      >
                        min
                      </MenuItem>
                    </MenuDropdown>
                  </Menu>
                }
                {...form.getInputProps(`entries.${idx}.time`)}
              />
            </div>
          ))}

          <TextInput
            styles={styless}
            label="Years of Experience"
            placeholder="3 years"
            value={mentorForm?.values?.yearsOfExperience as any}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue(
                "yearsOfExperience",
                e.target.value as any
              );
            }}
            // {...mentorForm.getInputProps("yearsOfExperience")}
          />

          <Textarea
            resize="vertical"
            styles={styless}
            label="Biography"
            placeholder="Your Bio"
            value={mentorForm?.values?.bio}
            onChange={(e) => {
              setEditText(true);
              mentorForm.setFieldValue("industry", e.target.value);
            }}
            // {...mentorForm.getInputProps("bio")}
          />
        </section>

        <Button
          disabled={!editText && !imgMentor}
          type="submit"
          classNames={classes}
          loading={pictureLoading || isLoading}
        >
          Submit
        </Button>
        {/* <Button type="submit" classNames={classes}>
            Submit
          </Button> */}
      </div>
    </form>
  );
}
