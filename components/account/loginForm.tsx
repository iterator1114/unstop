"use client";
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import AccountIcon from "@/components/icons/account";
import EmailIcon from "@/components/icons/email";
import PasswordIcon from "@/components/icons/key";
import VisibilityIcon from "@/components/icons/visibility";
import { useRouter } from "next/navigation";
import { FormData } from "../types";

const LoginForm = () => {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const validateUsername = (value: string) => {
    return value === "emilys" || "Username must be 'emilys'";
  };

  const validateEmail = (value: string) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(value) || "Please enter a valid email";
  };

  const validatePassword = (value: string) => {
    return value.length >= 8 || "Password must be at least 8 characters long";
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    const result = await res.json();
    if (result?.accessToken) {
      localStorage.setItem("accessToken", result.accessToken);
      router.push("/home");
    } else {
      alert(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <section className="relative">
        <section
          className={`flex items-center gap-x-2 bg-[#F4F4F4] rounded-lg py-4 px-4 ${
            errors.username ? "border border-red-500 mb-7" : "mb-4"
          }`}
        >
          <AccountIcon className="h-7 w-7" />
          <section className="ml-6 w-full">
            <label
              htmlFor="username"
              className="text-[#1C1B1F] text-sm block pb-1.5"
            >
              User name
            </label>
            <Controller
              name="username"
              control={control}
              rules={{ validate: validateUsername }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className="w-full text-lg font-bold text-[#1C1B1F] bg-[#F4F4F4] focus:outline-none"
                  />
                </>
              )}
            />
          </section>
        </section>
        <section className="absolute -bottom-5 right-0">
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </section>
      </section>

      <section className="relative">
        <section
          className={`flex items-center gap-x-2 bg-[#F4F4F4] rounded-lg py-4 px-4 ${
            errors.email ? "border border-red-500 mb-7" : "mb-4"
          }`}
        >
          <EmailIcon className="h-7 w-7" />
          <section className="ml-6 w-full">
            <label
              htmlFor="email"
              className="text-[#1C1B1F] text-sm block pb-1.5"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ validate: validateEmail }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    className={`w-full text-lg font-bold text-[#1C1B1F] bg-[#F4F4F4] focus:outline-none ${
                      errors.email ? " border-red-500" : ""
                    }`}
                  />
                </>
              )}
            />
          </section>
        </section>
        <section className="absolute -bottom-5 right-0">
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </section>
      </section>

      <section className="relative">
        <section
          className={`flex items-center gap-x-2 bg-[#F4F4F4] rounded-lg py-4 px-4 ${
            errors.password ? "border border-red-500 mb-7" : "mb-4"
          }`}
        >
          <PasswordIcon className="h-7 w-7" />
          <section className="relative ml-6 w-full">
            <label
              htmlFor="password"
              className="text-[#1C1B1F] text-sm block pb-1.5"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ validate: validatePassword }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    type={isPasswordVisible ? "text" : "password"}
                    className={`w-full text-lg font-bold text-[#1C1B1F] bg-[#F4F4F4] focus:outline-none ${
                      errors.password ? "border-red-500" : ""
                    }`}
                  />
                  <button
                    className="absolute right-3 top-1/4"
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? (
                      <VisibilityIcon className="h-7 w-7" color={"#077BFF"} />
                    ) : (
                      <VisibilityIcon className="h-7 w-7" color={"#1C1B1F"} />
                    )}
                  </button>
                </>
              )}
            />
          </section>
        </section>
        <section className="absolute -bottom-5 right-0">
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </section>
      </section>

      <section className="my-6 flex justify-between items-center">
        <label className="flex items-center gap-x-3">
          <input type="checkbox" className="w-4 h-4 bg-[#D9D9D9]" />
          <p>Remember me</p>
        </label>
        <section>
          <a href="#" className="text-[#6358DC]">
            Forgot Password?
          </a>
        </section>
      </section>

      <button
        type="submit"
        className="bg-[#6358DC] w-full rounded-lg text-white py-5 font-semibold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
