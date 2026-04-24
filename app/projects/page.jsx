"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState, useContext } from "react";
import { MovingArrow } from "@/components/floatingImg";
import { AppContext } from "@/contexts/appContext";
import { SparklesCore } from "@/components/ui/sparkles";
import { project_items } from "@/constants/items";
import Image from "next/image";
import Link from "next/link";


export default function Projects() {
  const [clicked, setClicked] = useState(false);
  const { on } = useContext(AppContext);

  const handleForm = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };
  return (
    <div
      className={`${on ? "text-gray-600 bg-gray-200" : "text-gray-200 bg-blue-900"}`}
    >
      <Header />
      <div className="lg:px-15 px-5">
        <section className="mb-2 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 lg:px-30">
          {project_items.map((item, idx) => {
            return (
              <Link href={`${item.url}`}
                key={idx}
                className={`${on? "bg-black/50": "bg-blue-950"} group rounded-3xl relative w-full backdrop-blur-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-lg shadow-gray-200/50`}
              >
                <div className="w-full p-3">
                  <div className="relative w-full aspect-16/10 overflow-hidden rounded-2xl">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 z-10"></div>
                  <Image
                    src={item.img}
                    alt={item.img}
                    width={1000}
                    height={1000}
                    loading="lazy"
                    className="lg:w-full lg:h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  </div>
                </div>
                <div className="px-5">
                  <p className="text-3xl font-bold group-hover:text-gray-50 duration-700">{item.projectName}</p>
                  <div className="px-3 py-5 *:text-[10px] *:font-bold flex flex-wrap lg:gap-3 gap-0.5 *:bg-gray-900 group-hover:*:bg-gray-800 duration-700 group-hover:text-gray-50 *:p-2 *:flex *:justify-center *:rounded-xl">
                    <p>{item.programLanguage.lang1}</p>
                    <p>{item.programLanguage.lang2}</p>
                    <p>{item.programLanguage.lang3}</p>
                    {item.programLanguage.lang4 ? <p>{item.programLanguage.lang4}</p>:""}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
        <section
          id="contact"
          className="lg:h-150 w-full flex items-center justify-center my-10"
        >
          {clicked ? (
            <form
              className={`${on ? "shadow-[0_0_3px_1px_black]" : "shadow-[0_0_3px_1px_white]"} relative w-80 lg:w-150 border p-5 flex flex-col gap-3 rounded-2xl`}
            >
              <div className="w-full absolute inset-0">
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
              <p className="lg:text-4xl font-bold">GET IN TOUCH</p>
              <div className="grid grid-cols-1 *:text-[10px] gap-2 lg:*:w-full *:w-full lg:*:h-10 *:h-10 *:rounded-lg *:bg-gray-300 *:outline-none *:p-2 *:text-gray-600 z-10">
                <input type="text" placeholder="FULL NAME" required/>
                <input type="email" placeholder="EMAIL ADDRESS" required/>
              </div>
              <textarea
                placeholder="WRITE COMMENTS"
                className="p-2 h-30 lg:h-30 w-full text-[10px] bg-gray-300 outline-none rounded-lg text-gray-600 z-10"
              ></textarea>
              <button
                className={`${on ? "bg-gray-600 hover:shadow-[0_0_5px_1px_black] text-gray-200" : "bg-gray-200 hover:shadow-[0_0_5px_1px_white] text-gray-600"} cursor-pointer text-[15px] rounded-lg flex items-center gap-1 p-2 font-bold h-10 w-27 z-10`}
              >
                Submit <MovingArrow />
              </button>
            </form>
          ) : (
            <div className="lg:w-200 lg:h-145 flex flex-col items-center relative justify-center p-5 gap-3 lg:p-10 lg:gap-10 lg:border rounded-2xl">
              <div className="w-full absolute inset-0">
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
              <p className="lg:text-5xl font-bold text-3xl">
                Let's Work Together
              </p>
              <p className="text-2xl">
                I'm currently looking for new opportunities. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>
              <button
                className={`${on ? "bg-gray-600 hover:shadow-[0_0_5px_1px_black] text-gray-200" : "bg-gray-200 hover:shadow-[0_0_5px_1px_white] text-gray-600"} z-10 font-bold h-10 w-50 cursor-pointer active:scale-98 rounded-lg`}
                onClick={handleForm}
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
