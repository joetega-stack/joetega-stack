"use client";
import React, { useContext, useRef } from "react";
import Image from "next/image";
import { MovingArrow } from "./floatingImg";
import { AppContext } from "@/contexts/appContext";
import { useRouter } from "next/navigation";
import { card } from "../constants/items";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { RxPeople } from "react-icons/rx";
import { FaEye } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { motion,useScroll } from "framer-motion";

const list = [
  {
    id: "01",
    icon: <HiOutlineLightningBolt />,
    h2: "Fast Learner",
    p: "Picks up new tools and ships in days, not weeks",
  },
  {
    id: "02",
    icon: <RxPeople />,
    h2: "Team Player",
    p: "Collaborates closely across design, product & backend.",
  },
  {
    id: "03",
    icon: <FaEye />,
    h2: "Detail-Oriented",
    p: "Pixel-perfect, accessibility-aware, performance-first.",
  },
  {
    id: "04",
    icon: <LuBrain />,
    h2: "User-Focused",
    p: "Builds for humans — clarity over cleverness.",
  },
];

const Main = () => {
  const { on } = useContext(AppContext);
  const router = useRouter();
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset:['start 80%', 'end 80%']
  })

  const { scrollXProgress } = useScroll({
    target: sectionRef,
    offset:['start 80%', 'end 80%']
  })


  return (
    <div className={`${on ? "text-gray-950" : "text-gray-200"}`}>
      <section className="w-full flex flex-col gap-5 lg:h-dvh lg:px-15 px-10 lg:pt-10">
        <p className="text-2xl font-semibold font-sans">Hi, I'm</p>
       <motion.h1
  initial={{
    opacity: 0,
    y: 30,
    textShadow: "0px 0px 0px #334155",
  }}
  animate={{
    opacity: 1,
    y: 0,
    textShadow: `
      2px 2px 0 #1e293b,
      4px 4px 0 #334155,
      6px 6px 0 #475569,
      8px 8px 0 #64748b
    `,
  }}
  transition={{
    duration: 1.2,
    ease: "easeOut",
  }}
  className="
    text-[clamp(5rem,18vw,12rem)]
    font-black
    leading-none
    tracking-[-0.07em]
    animate-pulse
  "
>
  Joseph O.
</motion.h1>
        <p className="text-3xl font-semibold">Full-Stack</p>
        <p className="text-3xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Software Developer</p>
        <p className="text-lg text-gray-400">
          I build scalable web application and digital experiences <br /> using React, Next.js, Node.js, Python and modern technologies.
        </p>
        <div className="flex gap-5 mt-10">
          <button
            onClick={()=> router.push("/projects#contact")}
            className={`${on?" text-gray-200 hover:bg-blue-800 hover:text-gray-50":"text-gray-200 hover:bg-blue-500 hover:text-gray-900"} text-[15px] bg-blue-600 active:scale-95 transition-colors duration-300 h-13 px-10 flex items-center justify-center rounded-3xl font-bold`}
          >
            LET'S CONNECT
          </button>
          <div className="relative inline-flex rounded-4xl p-[2px] overflow-hidden">
                      <motion.div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#3b82f6,#22d3ee,#3b82f6)]"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease:"linear"
                      }}/>
          <a href="Joseph Avwunu CV.pdf" className="relative">
            <button
              className={`${on ? "border-gray-300 " : "border-gray-500"} backdrop-blur-3xl h-13 px-10 border text-[15px] shadow font-bold rounded-4xl active:scale-99 cursor-pointer flex justify-between items-center`}
            >
              DOWNLOAD CV <MovingArrow />
            </button>
            </a>
            </div>
        </div>
      </section>
      <section className="flex p-5 gap-5 mb-5 flex-col lg:flex-row">
        <div className="flex gap-2">
          <p className="text-2xl text-blue-600 font-semibold font-mono">01</p>
          <div className="mt-1">
            <p className="font-bold">ABOUT</p>
            <div className="relative mt-1 h-1 w-12 overflow-hidden">
              <motion.div className="absolute h-full w-20 left-0 top-0 bg-gradient-to-r from-transparent via-blue-500 to-blue-600" animate={{x:["-100%", "250%"]}} transition={{duration:2,repeat:Infinity,ease:"linear"}} />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={require("../public/19276.jpg")}
            alt={"img"}
            width={1000}
            height={1000}
            className="lg:w-180"
          />
          <div className="w-full lg:w-180 p-5 border-2 border-blue-500 rounded-2xl backdrop-blur mt-5">
            <p>
              I'm a passionate front-end developer with a keen eye for design
              and a love for creating seamless user experiences. With expertise
              spanning modern web technologies, I transform ideas into elegant,
              high-performance applications.
            </p>
            <p>
              My journey in tech is driven by curiosity and a commitment to
              continuous learning. I believe in writing clean, maintainable code
              and building products that make a real difference.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 lg:w-130">
          {list.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 group border-2 hover:translate-x-5 duration-1000 p-5 border-blue-500 rounded-2xl backdrop-blur"
            >
              <div className="border-2 border-blue-500 bg-blue-950 backdrop-blur-2xl size-13 rounded-lg flex justify-center items-center text-3xl group-hover:rotate-4 text-blue-600">{item.icon}</div>
              <div>
                <p className="font-bold text-blue-500 text-xl font-mono">{item.id}</p>
                <p className="font-semibold text-xl">{item.h2}</p>
                <p className="text-gray-400">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section ref={sectionRef} className="relative">
        <div className="pl-5 flex gap-2">
          <p className="text-2xl text-blue-600 font-semibold font-mono">02</p>
          <div className="mt-1">
            <p className="font-bold">EXPERIENCE</p>
            <div className="relative mt-1 h-1 w-20 overflow-hidden">
              <motion.div className="absolute h-full w-20 left-0 top-0 bg-gradient-to-r from-transparent via-blue-500 to-blue-600" animate={{x:["-100%", "250%"]}} transition={{duration:2,repeat:Infinity,ease:"linear"}} />
            </div>
          </div>
        </div>
        <div className="relative m-3">
          {/* <div className="absolute lg:left-1/2 left-2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-cyan-500"></div> */}
          <motion.div className="absolute lg:left-1/2 left-2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-blue-600" style={{scaleY:scrollYProgress, transformOrigin: "50% 0%"}}/>
          {card.map((job, idx) => (
            <div
              className={`grid grid-cols-1 lg:grid-cols-2`}
              key={idx}
            >
              {idx % 2 === 0 ? (
                <div className="relative mb-2">
                   <div className="lg:translate-x-15 translate-x-4 md:w-[97%] lg:w-[90%] w-[95%]  rounded-3xl border-2 border-blue-600 p-8 lg:text-end">
                    <p>{job.date}</p>
                    <p>{job.h1}</p>
                    <p>{job.p}</p>
                    <p>{job.ul.list1}</p>
                    <p>{job.ul.list2}</p>
                    <p>{job.ul.list3}</p>
                  </div>
                  <div className="flex justify-center absolute top-1/2 lg:right-0 lg:translate-x-1/2 ">
                    <div className="size-3 rounded-full bg-blue-600" />
                  </div>
                 </div>
              ) : (
                <div className="relative mb-2 lg:col-start-2 flex items-center lg:pl-12 w-full">
                  <div className="flex justify-center absolute left-0 lg:-translate-x-1.5">
                    <div className="size-3 rounded-full bg-blue-600" />
                  </div>
                  <div className="justify-self-start lg:-translate-x-8 translate-x-4 md:left-8 md:w-[97%] lg:w-[90%] w-[95%] rounded-3xl border-2 border-blue-600 p-8">
                    <p>{job.date}</p>
                    <p>{job.h1}</p>
                    <p>{job.p}</p>
                    <p>{job.ul.list1}</p>
                    <p>{job.ul.list2}</p>
                    <p>{job.ul.list3}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Main;
