import React from "react";
import GoogleIcon from "@/components/icons/google";
import FacebookIcon from "@/components/icons/facebook";
import LoginWithButton from "@/components/account/loginWithButton.tsx";
import OrWithLine from "@/components/account/horizontalLine";
import LoginForm from "@/components/account/loginForm";
import HomeIcon from "@/components/icons/home";

const Account = () => {
  return (
    <>
      <section className="grid lg:grid-cols-2 gap-4 mx-4 lg:mx-8 xl:mx-16">
        <section className="hidden lg:block mx-auto pt-16 lg:pt-44">
          <HomeIcon className="h-auto max-w-[320px] lg:max-w-[640px]" />
        </section>

        <section className="px-6 py-8 mx-2 border border-[#E2E2E2] rounded-lg shadow-md bg-white my-12 lg:my-28">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium">
            Welcome to
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#6358DC] py-2">
            unstop
          </h1>

          <section className="space-y-4">
            <LoginWithButton logo={GoogleIcon} text={"Login with Google"} />
            <LoginWithButton logo={FacebookIcon} text={"Login with Facebook"} />
          </section>

          <OrWithLine />

          <LoginForm />

          <section className="mt-6 text-center">
            <span>Don’t have an account?</span>
            <span className="pl-1 text-[#6358DC] cursor-pointer">Register</span>
          </section>
        </section>
      </section>
    </>
  );
};

export default Account;
