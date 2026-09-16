"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useContext } from "react";
import { MovingArrow } from "@/components/floatingImg";
import { AppContext } from "@/contexts/appContext";
import { SparklesCore } from "@/components/ui/sparkles";
import { project_items } from "@/constants/items";
import FloatingImg from "@/components/floatingImg";
import Image from "next/image";
import Link from "next/link";
import CustomCursor from "@/components/ui/customCursor";
import { AiOutlineMail } from "react-icons/ai";
import { VscCoffee } from "react-icons/vsc";
import { MdArrowRightAlt } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import EmailIcon from "@/components/EmailIcon";

export default function Projects() {
  const [clicked, setClicked] = useState(false);
  const { on } = useContext(AppContext);

  const whatsappMessage =
  "Hello Joseph, I found your portfolio and would like to work with you.";

  const handleForm = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  return (
    <div
      className={`${on ? "text-gray-950 bg-gray-200" : "text-gray-50 bg-[#0b0223] backdrop-blur-2xl"} relative duration-1000`}
    >
      <CustomCursor />
      <Header />
      {on ? (
        ""
      ) : (
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
      )}
      <div className="px-5">
        <section className="flex flex-col lg:flex-row  mt-10">
          <div className="h-full lg:w-[20%] ">
            <p className="text-blue-600 font-bold text-2xl">MY PROJECTS</p>
            <p className="text-3xl font-bold">Some of the things I've built</p>
            <p className={`${on ? "text-gray-600" : "text-gray-400"} `}>
              Here are a few projects I've worked on, showcasing my skills in
              full-stack <br className="hidden md:block" /> development, UI/UX
              and problem solving
            </p>
          </div>
          <div className="flex-1">
            <div className="h-30 px-20 hidden lg:block md:block">
              <FloatingImg />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
              {project_items.map((item, idx) => {
                return (
                  <Link
                    href={`${item.url}`}
                    key={idx}
                    className={`${on ? "bg-white" : "border-gray-700 border"} backdrop-blur-lg group rounded-2xl relative w-full overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-lg shadow-gray-200/50 flex flex-col lg:flex-row`}
                  >
                    <div className="lg:w-[50%] p-3">
                      <div className="relative h-60 lg:h-full w-full overflow-hidden rounded-2xl">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>
                        <Image
                          src={item.img}
                          alt={item.img}
                          width={1000}
                          height={1000}
                          loading="lazy"
                          className=" lg:w-full lg:h-full h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="lg:w-[50%] py-8 flex flex-col gap-5 px-5">
                      <p className="lg:text-3xl text-xl font-bold group-hover:text-gray-600 duration-700">
                        {item.projectName}
                      </p>
                      <p className="text-gray-400 lg:font-semibold">
                        {item.description}
                      </p>
                      <div className="lg:*:font-bold grid lg:gap-3 gap-0.5 *:bg-blue-50 text-blue-600 group-hover:*:bg-blue-600 duration-700 group-hover:text-gray-50 *:p-2  *:flex *:justify-center *:rounded-2xl">
                        <p>{item.programLanguage.lang1}</p>
                        <p>{item.programLanguage.lang2}</p>
                        <p>{item.programLanguage.lang3}</p>
                        {item.programLanguage.lang4 && (
                          <p>{item.programLanguage.lang4}</p>
                        )}
                        {item.programLanguage.lang5 && (
                          <p>{item.programLanguage.lang5}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="lg:h-150 w-full flex items-center justify-center my-10"
        >
          {clicked ? (
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <form
                className={`${on ? "border-blue-300" : "border-blue-900"} w-full lg:w-150 border p-5 flex flex-col gap-3 rounded-2xl`}
              >
                <p className="lg:text-4xl font-bold">GET IN TOUCH</p>
                <div className="grid grid-cols-1 *:text-[10px] gap-2 lg:*:w-full *:w-full lg:*:h-10 *:h-10 *:rounded-lg *:bg-gray-300 *:outline-none *:p-2 *:text-gray-600 z-10 *:border-blue-300 *:border">
                  <input type="text" placeholder="FULL NAME" required />
                  <input type="email" placeholder="EMAIL ADDRESS" required />
                </div>
                <textarea
                  placeholder="WRITE COMMENTS"
                  className="border-blue-300 border p-2 h-30 lg:h-30 w-full text-[10px] bg-gray-300 outline-none rounded-lg text-gray-600 z-10"
                ></textarea>
                <button
                  className={`${on ? "bg-blue-600 text-gray-200" : "bg-gray-200 hover:shadow-[0_0_5px_1px_white] text-gray-600"} hover:text-[20px] cursor-pointer text-[15px] rounded-lg active:scale-95 flex items-center gap-1 p-2 font-bold hover:w-30 h-10 w-27 z-10`}
                >
                  Submit <MovingArrow />
                </button>
              </form>
              <div className="flex flex-col py-3 lg:px-10 gap-3">
                <a href="mailto:rolandjosepharjo@gmail.com?subject=Hello&body=I%20want%20to%20ask%20something">
                  <div className={`${on ? "border-blue-300" : "border-blue-900"} hover:border-blue-600 group hover:border-2 lg:w-full border p-5 flex flex-col gap-3 rounded-2xl`}>
                    <div className="group">
                      <AiOutlineMail className="size-10 group-hover:hidden hidden lg:block" />
                      <EmailIcon size={40} className="lg:hidden group-hover:block animate-pulse" />
                    </div>
                    <p className="text-2xl font-semibold group-hover:text-blue-400">E-mail</p>
                    <p className={`${on ? "text-gray-400 group-hover:text-blue-300" : "text-gray-400 group-hover:text-blue-200"} text-lg `}>rolandjosepharjo@gmail.com</p>
                  </div>
                </a>
                <div className={`${on ? "border-blue-300" : "border-blue-900"} hover:border-blue-600 group hover:border-2 w-full border p-5 flex flex-col gap-3 rounded-2xl`}>
                  <VscCoffee />
                  <p className="text-2xl font-semibold group-hover:text-blue-400">Book a Coffee Chat</p>
                  <p className={`${on ? "text-gray-400" : "text-gray-400"}`}>
                    30 minutes. No agenda. Tell me about what you're building
                    and let's see if we click
                  </p>
                  <a  href={`https://wa.me/2348012345678?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                  rel="noopener noreferrer">
                    <button className={`${on ? "border-blue-300" : "border-blue-900 "}  backdrop-blur-lg flex items-center justify-center gap-3 group-hover:border-2 group-hover:border-blue-600 active:scale-95 group-hover:animate-bounce px-5 py-3 rounded-4xl border`}>
                    PICK A TIME <MdArrowRightAlt />
                  </button>
                  </a>
                </div>
                <div className="flex gap-2 *:rounded-xl *:flex *:justify-center *:items-center *:cursor-pointer *:active:scale-98">
                  <a href="https://www.linkedin.com/in/j-stack/" className={`${on?"border-blue-600":"border-blue-600 hover:text-blue-600 "} lg:hover:animate-pulse animate-pulse hover:border-2 border size-12 text-xl hover:text-blue`}>
                    <FaLinkedin />
                  </a>
                  <a  href="https://github.com/joetega-stack"
  target="_blank"
  rel="noopener noreferrer" className={`${on?"border-blue-600":"border-blue-600 hover:text-blue-600 "} lg:hover:animate-pulse animate-pulse hover:border-2 border size-12 text-xl hover:text-blue`}>
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="lg:w-200 lg:h-145 flex flex-col items-center justify-center p-5 gap-3 lg:p-10 lg:gap-10 lg:border border-gray-400 rounded-2xl">
              <p className="lg:text-5xl font-bold text-2xl">
                Let's Work Together
              </p>
              <p className="lg:text-xl text-lg text-center">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
               <button
            onClick={handleForm}
            className={`${on?" text-gray-200 hover:bg-blue-800 hover:text-gray-50":"text-gray-200 hover:bg-blue-500 hover:text-gray-900"} text-[15px] bg-blue-600 active:scale-95 transition-colors duration-300 h-13 px-10 flex items-center justify-center rounded-3xl font-bold`}
          >
            Say Hello
          </button>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}
