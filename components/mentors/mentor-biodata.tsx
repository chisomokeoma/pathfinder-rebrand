"use client";

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
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useContext, useState } from "react";
import { ModalContext } from "@/components/provider/modal-provider";
import { useForm } from "@mantine/form";
import { ArrowDown2, InfoCircle } from "iconsax-react";
import { useMutation } from "@tanstack/react-query";
import { builder } from "@/api/builder";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export interface IMentorBiodata {
  name: string;
  gender: string;
  location: string;
  industry: string;
  yearsOfExperience: number | null;
  levelOfExpertise: string;
  availability: {}[];
  bio: string;
  headline: string;
}

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    paddingLeft: "14px",
  },
};

export default function MentorBiodata() {
  const { setModalState } = useContext(ModalContext);
  const [imgMentor, setImgMentor] = useState<File | null>(null);
  const { push } = useRouter();

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

  const { mutate: mutatePicture, isLoading: pictureLoading } = useMutation({
    mutationFn: (payload: FormData) =>
      builder.use().user.upload_profile_picture(payload),
  });

  const { mutate, isLoading } = useMutation({
    mutationFn: (payload: IMentorBiodata) =>
      builder.use().user.mentor_biodata(payload),
    onSuccess(data) {
      const formData = new FormData();
      if (imgMentor) {
        formData.append("profile_picture", imgMentor);
      }
      toast.success("Mentor account created successfully");
      push(`/`);
    },
  });

  enum TimeType {
    MIN = "MIN",
    HR = "HR",
  }

  const form = useForm<{
    entries: { day: string; time: number; type: TimeType }[];
  }>({
    initialValues: {
      entries: [],
    },
  });
  return (
    <form
      onSubmit={mentorForm.onSubmit(() =>
        mutate({
          ...mentorForm.values,
          yearsOfExperience: mentorForm.values.yearsOfExperience
            ? Number(mentorForm.values.yearsOfExperience)
            : null,
          availability: form.values.entries.map((item) => ({
            dayAvailable: item.day.toUpperCase(),
            timeAvailable:
              item.type === TimeType.HR ? item.time * 60 : item.time,
          })),
        })
      )}
      className="flex flex-col gap-[50px]"
    >
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-2">
            <p className="text-medium-12 text-blue-50">
              Upload course preview photo
            </p>
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
                  onChange={setImgMentor}
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
                  <svg
                    width="64"
                    height="65"
                    viewBox="0 0 64 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.690918"
                      width="64"
                      height="64"
                      rx="8"
                      fill="#ECE8FF"
                    />
                    <path
                      d="M42.6666 44.6909V42.0243C42.6666 40.6098 42.1047 39.2532 41.1045 38.253C40.1043 37.2528 38.7477 36.6909 37.3333 36.6909H26.6666C25.2521 36.6909 23.8955 37.2528 22.8953 38.253C21.8952 39.2532 21.3333 40.6098 21.3333 42.0243V44.6909M37.3333 26.0243C37.3333 28.9698 34.9454 31.3576 31.9999 31.3576C29.0544 31.3576 26.6666 28.9698 26.6666 26.0243C26.6666 23.0787 29.0544 20.6909 31.9999 20.6909C34.9454 20.6909 37.3333 23.0787 37.3333 26.0243Z"
                      stroke="#4B0082"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </label>
              <div className="flex flex-col">
                {/* <p>  Upload course preview photo</p> */}
                <p className="text-medium-12 text-grey-70">
                  Maximum size is 1MB
                </p>
                <p className="text-normal-12 text-grey-50">
                  Supported file type: jpg, jpeg, png
                </p>
              </div>
            </div>
          </div>
        </div>

        <TextInput
          styles={styles}
          placeholder="Name"
          {...mentorForm.getInputProps("name")}
        />
        <Select
          styles={styles}
          placeholder="Gender"
          data={["Male", "Female"]}
          {...mentorForm.getInputProps("gender")}
        />
        {/* <TextInput
          styles={styles}
          placeholder="Email"
          {...mentorForm.getInputProps("email")}
        /> */}
        <TextInput
          styles={styles}
          placeholder="Profession"
          {...mentorForm.getInputProps("industry")}
        />

        <TextInput
          styles={styles}
          placeholder="Headline"
          {...mentorForm.getInputProps("headline")}
        />

        <NumberInput
          min={0}
          styles={styles}
          placeholder="Years of Experience"
          {...mentorForm.getInputProps("yearsOfExperience")}
        />
        <Select
          styles={styles}
          data={["Advanced", "Expert", "Intermediate", "Novice"]}
          placeholder="Level of Expertise"
          {...mentorForm.getInputProps("levelOfExpertise")}
        />

        <Textarea resize="vertical"
          styles={styles}
          placeholder="Biography"
          {...mentorForm.getInputProps("bio")}
        />
        <TextInput
          styles={styles}
          placeholder="Location"
          {...mentorForm.getInputProps("location")}
        />
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
            ...styles,
            input: { ...styles.input, display: "flex" },
          }}
          placeholder="Availability"
          value={form.values.entries.map((item) => item.day)}
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
                <Menu styles={{ item: { fontSize: "14px" } }}>
                  <MenuTarget>
                    <p className="flex cursor-pointer text-sm items-center gap-1">
                      {item.type.toLocaleLowerCase()}
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
                        form.setFieldValue(`entries.${idx}.type`, TimeType.MIN)
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
      </div>
      <div className="flex flex-col gap-7">
        {/* <Link className="w-full" href="/create-account/verification"> */}
        <Button
          type="submit"
          classNames={classes}
          loading={isLoading || pictureLoading}
        >
          Submit
        </Button>
        {/* </Link> */}
        <p className="text-base self-center leading-7 text-[#6D6C80]">
          Already have an account?
          <Link
            href="/login"
            className="text-[#5751E1] text-base leading-7 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}
