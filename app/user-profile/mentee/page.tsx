import Hero from "@/components/home/hero";
import classes from "@/components/home/signup.module.css";
import MenteeProfileForm from "@/components/mentee/mentee-profile-form";
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
import React, { Suspense, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineEmail } from "react-icons/md";

export default function UserProfileMentor() {
  return (
    <section className=" flex flex-col">
      <Hero text="Edit Profile" />
      <Suspense>
        <MenteeProfileForm />
      </Suspense>
    </section>
  );
}
