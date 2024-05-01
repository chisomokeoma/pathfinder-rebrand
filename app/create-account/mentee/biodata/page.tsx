import Hero from "@/components/home/hero";
import MenteeBiodata from "@/components/authentication/mentee-biodata";
import { Suspense } from "react";



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

export default function CreateAccountMentee() {
  return (
    <section className="flex flex-col">
      <Hero text="Create Account" />
      <div className="mt-2 mb-2 bg-[#F9F9F9] py-[40px] overflow-auto h-screen">
        <article className="flex justify-between  px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[clamp(345px,47vw,690px)] min-w-[441px] max-[493px]:w-full  mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Biodata
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              Hey there! We just need a few details from you to get started.
            </p>
          </div>
          <Suspense>
            <MenteeBiodata />
          </Suspense>
        </article>
      </div>
    </section>
  );
}
