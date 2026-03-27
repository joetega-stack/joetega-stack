"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppContext } from "@/contexts/appContext";
import { useContext } from "react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";

const TechStack = () => {
  const { on } = useContext(AppContext);
  return (
    <div className={`${on ? " bg-gray-200" : "bg-blue-900"}`}>
      <Header />
      <div
        className={`${on ? "text-gray-300" : "text-gray-200"} mb-10 lg:px-45`}
      >
        <div className="bg-black/40 backdrop-blur-2xl p-10 rounded-4xl relative">
          <div className="w-full absolute inset-0 -z-10">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="mb-10 cursor-pointer">
            <h1 className="mb-5 text-4xl">Front-End</h1>
            <div className="*:aspect-square *:rounded-3xl *:cursor-pointer *:border grid grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/html5-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">HTML5</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/css3-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">CSS3</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/tailwindcss-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Tailwind</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/javascript-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Javascript</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/bootstrap-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Bootstrap</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/typescript-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Typescript</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/jquery-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Jquery</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/react-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">React</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/nextjs-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Nextjs</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="mb-5 text-4xl">Back-End</h1>
            <div className="*:aspect-square *:cursor-pointer *:rounded-3xl *:border grid grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/python-svgrepo-com.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Python</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/FastAPI.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">FastAPI</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/mongodb-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Mongodb</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/postgresql-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Postgresql</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/supabase-icon.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Supabase</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/oauth-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Oauth</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/rest-api-svgrepo-com.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Rest-api</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="mb-5 text-4xl">Tools & Others</h1>
            <div className="*:aspect-square *:cursor-pointer *:rounded-3xl *:border grid grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/git-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Git</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/github-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Github</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/vscode-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">VS Code</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/figma-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Figma</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/npm-original-wordmark.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">npm</p>
                </div>
              </div>
              <div className="hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 ">
                <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                  <Image
                    src={"/postman-original.svg"}
                    alt="/2.svg"
                    height={100}
                    width={100}
                    className="h-15 lg:h-30"
                  />
                  <p className="font-bold">Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechStack;
