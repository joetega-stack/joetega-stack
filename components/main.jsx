"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { WiStars } from "react-icons/wi";
import AnimatedText from "./animatedText";
import FloatingImg from "./floatingImg";
import { MovingArrow } from "./floatingImg";
import { AppContext } from "@/contexts/appContext";
import InfiniteMovingCardsDemo from "./infinite-moving-cards-demo";
import { useRouter } from "next/navigation";


const Main = () => {
  const { on } = useContext(AppContext);
  const router = useRouter()
  return (
    <div className={`${on ? "text-gray-600" : "text-gray-200"} lg:px-15`}>
      <section className="w-full gap-5 flex-col relative lg:flex-row flex justify-between items-center">
        <div className="lg:flex absolute top-3 right-8 lg:static lg:w-150 lg:order-1">
          <div className="hidden lg:flex lg:flex-col lg:gap-5 lg:justify-end lg:pb-5">
            <p className="vertical">facebook</p>
            <p className="vertical">instagram</p>
            <p className="vertical">twitter</p>
            <p className="vertical">linkedin</p>
            <p className="vertical">TikTok</p>
          </div>
          <Image
            src={"/developer.png"}
            alt={"developer.png"}
            height={1000}
            width={1000}
            className="w-30 lg:flex-1 rounded-3xl"
          />
        </div>
        <div className={`flex flex-col gap-5 flex-1 h-full order-1 lg:order-2 rounded-3xl p-5`}>
          <div className="h-40 hidden lg:block">
            <FloatingImg />
          </div>
          <div className="h-28 lg:h-35">
            <div className="flex items-center">
              <WiStars className="text-blue-600 size-10" />
              <p>Hey there!</p>
            </div>
            <h1 className="lg:text-6xl font-bold text-3xl">I'm joseph</h1>
            <AnimatedText />
          </div>
          <div>
            <p className="lg:text-2xl">
              I'm a FullStack Developer working remotely from Lagos, Nigeria.
            </p>
            <p className="lg:text-2xl">
              Over the past few years, I’ve pushed into different parts of web
              creation, from crafting UI layouts to coding interactive features.
              I’m proud of how far I’ve evolved.
            </p>
            <p className="lg:text-2xl">
              These days, I focus on personal projects, tutorials or school.
            </p>
            <a href="Joseph Avwunu CV.pdf">
              <button
              className={`${on ? "bg-gray-600 hover:shadow-[0_0_5px_1px_black] text-gray-200" : "bg-gray-200 hover:shadow-[0_0_5px_1px_white] text-gray-600"} h-10 p-2 text-[15px] shadow mt-5 font-bold rounded-lg active:scale-99 cursor-pointer flex justify-between items-center`}
            >
              Download CV <MovingArrow />
            </button>
            </a>
          </div>
        </div>
      </section>
      <section className="flex p-5 gap-10 mb-5 flex-col lg:flex-row">
        <div className="lg:w-[50%]">
          <p className="font-bold lg:text-2xl">
            Let's collaborate if you're committed to sustainability, education,
            equality, or carbon neutrality.
          </p>
          <p className="mt-5">
            I’m committed to leaving the world better for those who come after
            us, and I aim to contribute however I can. If you value that too,
            I’d love to talk.
          </p>
          <button
            onClick={()=> router.push("/projects#contact")}
            className={`${on ? "bg-gray-600 hover:shadow-[0_0_5px_1px_black] text-gray-200" : "bg-gray-200 hover:shadow-[0_0_5px_1px_white] text-gray-600"} h-10 p-2 shadow mt-5 font-bold rounded-lg active:scale-99 cursor-pointer flex justify-between items-center`}
          >
            Get In Touch <MovingArrow />
          </button>
        </div>
        <div className="flex-1 rounded-2xl"><InfiniteMovingCardsDemo/></div>
      </section>
    </div>
  );
};

export default Main;
