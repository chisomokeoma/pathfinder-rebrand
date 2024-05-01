import Hero from "@/components/home/hero";

import LoginForm from "@/components/authentication/login-form";
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

export default function Login() {
  return (
    <section className="flex flex-col">
      <Hero text="Sign In" />
      <div className="mt-[50px] h-[754px] mb-[40px] bg-[#F9F9F9] py-[30px]">
        <div className="w-[1248px] h-full mx-auto flex">
          <div className="w-[40%] h-full flex items-center justify-center bg-[#4B0082] px-5 bg-cover bg-no-repeat bg-[url(/background-pattern)]">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[40px] font-bold leading-[83.2px] tracking-[4%] text-[#FDFDFD]">
                Welcome Back!
              </h3>
              <p className="font-medium text-center max-w-[390px] text-[#FDFDFD] leading-[26px] tracking-[4%]">
                Sign in to access all features
              </p>
            </div>
          </div>
          <div className="flex-1 -ml-[38px] py-10 pt-20 flex flex-col bg-[#FDFDFD] rounded-l-[34.67px] h-full">
            <h3 className="text-[55.47px] text-center font-bold leading-[83.2px] tracking-[4%]">
              Sign In
            </h3>
            <Suspense>
              <LoginForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
