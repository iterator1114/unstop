import { LoginWithButtonProps } from "@/components/types";
import React from "react";

const LoginWithButton: React.FC<LoginWithButtonProps> = ({
  logo: Logo,
  text,
}) => {
  return (
    <>
      <section className="max-w-full border-[#E2E2E2] border rounded-lg my-5 shadow-md">
        <button className="flex gap-x-2 items-center p-5 mx-auto ">
          <Logo className="w-8 h-8" />
          <p className="font-medium">{text}</p>
        </button>
      </section>
    </>
  );
};

export default LoginWithButton;
