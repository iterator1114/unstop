import React from "react";
import LoginWithButton from "./loginWithButton.tsx";
import GoogleIcon from "@/components/icons/google";
import FacebookIcon from "@/components/icons/facebook";
import OrWithLine from "./horizontalLine";
import LoginForm from "./loginForm";

const Account = () => {
  return (
    <section className="p-5 m-2 border-2 border-black max-w-[746px]">
      <h1 className="text-4xl font-medium">Welcome to</h1>
      <h1 className="text-5xl font-black text-[#6358DC] py-2">unstop</h1>
      <LoginWithButton logo={GoogleIcon} text={"Login with Google"} />
      <LoginWithButton logo={FacebookIcon} text={"Login with Facebook"} />
      <OrWithLine />
      <LoginForm />
      <section className="my-6 text-center">
        <span>Don’t have an account?</span>
        <span className="pl-1 text-[#6358DC]">Register</span>
      </section>
    </section>
  );
};

export default Account;
