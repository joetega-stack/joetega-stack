"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { AppContext } from "@/contexts/appContext";
import { useContext } from "react";
import Image from "next/image";
import { SparklesCore } from "@/components/ui/sparkles";
import { stacks } from "@/constants/stack";
import CustomCursor from "@/components/ui/customCursor";


const TechStack = () => {
  const { on } = useContext(AppContext);
  return (
    <div
      className={`${on ? " bg-gray-200" : "bg-[#0b0223] backdrop-blur-2xl"} relative duration-1000`}
    >
      <CustomCursor/>
      <Header />
      {on ? "" :
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
      }
      <div
        className={`${on ? "text-gray-800" : "text-gray-200"} mb-10 lg:px-20`}
      >
        <div className="py-5">
          <div className="px-14">
            {stacks.map((skill) => (
              <div key={skill.tech}>
                <h1 className="mb-5 mt-5 text-4xl">{skill.tech}</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 lg:gap-6">
                  {skill.stack.map((item) => (
                    <div
                      key={item.name}
                      className="aspect-square rounded-3xl cursor-pointer border border-gray-500 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-300 hover:border-gray-200 duration-300 shadow-md shadow-gray-200/50 "
                    >
                      <div className="w-full h-full flex flex-col gap-2 items-center justify-center hover:-translate-y-3 duration-500">
                        <Image
                          src={item.img}
                          alt="/2.svg"
                          height={100}
                          width={100}
                          className="h-20"
                        />
                        <p>{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TechStack;
