import Hero from "@/components/home/hero";
import CreateForm from "@/components/authentication/create-form";
import { Suspense } from "react";

export interface ICreateForm {
  email: string;
  password: string;
  name: string;
}

export default function CreateAccountDetails() {
  return (
    <section className="flex flex-col">
      <Hero text="Create Account" />
      <div className="mt-[30px] h-[70vh] mb-[132px] bg-[#F9F9F9] py-[38px]">
        <div className="w-[clamp(645px,86vw,1248px)] max-[645px]:w-full  h-full mx-auto flex">
          <div className="w-[40%] h-full flex items-center justify-center bg-[#4B0082] px-5 bg-cover bg-no-repeat bg-[url(/background-pattern)] max-[865px]:hidden">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[56px] font-bold leading-[83.2px] tracking-[4%] text-[#FDFDFD]">
                Hello There!
              </h3>
              <p className="font-medium text-center max-w-[370px] text-[#FDFDFD] leading-[26px] tracking-[4%] px-[4px]">
                Sign up to be a part of the community and access all features
              </p>
            </div>
          </div>
          <div className="flex-1 -ml-[38px] max-[865px]:-ml-[0px] py-6 flex flex-col bg-[#FDFDFD] rounded-l-[34.67px] h-full">
            <h3 className="text-[55.47px] text-center font-bold leading-[83.2px] tracking-[4%]">
              Create Account
            </h3>
            <Suspense>
              <CreateForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
