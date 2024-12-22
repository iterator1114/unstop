import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ProfilePic from "./../public/images/profile.jpg";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    router.push("/auth/login");
  };

  return (
    <>
      <section className="mx-auto flex justify-center items-start h-screen bg-white">
        <section className="text-center py-6 my-20">
          <h1 className="text-4xl font-medium">Welcome to</h1>
          <h1 className="text-5xl font-black text-[#6358DC] mt-2">Unstop</h1>

          <section className="border border-[#E2E2E2] shadow-lg rounded-lg w-[250px] py-5 my-16 lg:my-24">
            <section className="w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
              <Image
                src={ProfilePic}
                alt={"profile_cover"}
                className="w-full h-full object-cover"
              />
            </section>
            <p className="text-[#6358DC] font-bold">Michael Dam</p>
            <section className="py-3">
              <p>example@gmail.com</p>
              <p>Female</p>
            </section>

            <button
              onClick={logoutHandler}
              type="button"
              className="bg-[#6358DC] w-[137px] rounded-lg text-white py-3 font-bold"
            >
              Logout
            </button>
          </section>
        </section>
      </section>
    </>
  );
};

export default Home;
