import Hero from "@/components/home/hero";
import MentorProfileForm from "@/components/mentors/mentor-profile-form";
import React, { Suspense } from "react";

export default function UserProfileMentor() {
  return (
    <section className=" flex flex-col">
      <Hero text="Edit Profile" />
      <Suspense>
        <MentorProfileForm />
      </Suspense>
    </section>
  );
}
