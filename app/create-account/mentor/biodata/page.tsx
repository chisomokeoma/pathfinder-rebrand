import Hero from "@/components/home/hero";
import MentorBiodata from "@/components/mentors/mentor-biodata";

export default function CreateAccountMentor() {
  return (
    <section className="flex flex-col">
      <Hero text="Create Account" />
      <div className="mt-10 mb-10 bg-[#F9F9F9] py-[38px]">
        <article className="flex justify-between px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[clamp(345px,47vw,690px)]  max-[493px]:w-full mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[clamp(29px,2.5vw,36px)] text-black font-semibold leading-[46.8px]">
              Biodata
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              Hey there! We just need a few details from you to get started.
            </p>
          </div>
          <MentorBiodata />
        </article>
      </div>
    </section>
  );
}
