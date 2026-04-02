"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { AppContext } from "@/contexts/appContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/logo";


const Header = () => {
  const { on, mode } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`h-20 w-full sticky top-0 flex items-center justify-center z-20`}
    >
      <nav
        className={`${on ? "bg-white/30 text-gray-600" : "bg-black/30 text-gray-200"} shadow-xl flex w-[90%] h-12 p-5 backdrop-blur-lg rounded-2xl justify-between items-center *:cursor-pointer`}
      >
        <div>
          <Link href="/" className={`transition-colors duration-300`}>
            <Logo/>
          </Link>
        </div>
        <div
          className={`${on ? "text-black" : "text-white"} hidden md:flex gap-5 items-center overflow-hidden *:active:scale-98`}
        >
          <Link href="/techstack">Tech Stack</Link>
          <Link href="/projects" className={`transition-colors duration-300`}>
            Projects
          </Link>
          <Link href="/" className={`transition-colors duration-300`}>
            About Me
          </Link>
          <Link
            href="/projects#contact"
            className={`transition-colors duration-300`}
          >
            Contact
          </Link>
          <div className="h-5 w-px border-none bg-gray-400 mx-1"></div>
          <div
            onClick={() => {
              mode();
            }}
          >
            {on ? <FaSun /> : <FaMoon />}
          </div>
        </div>

        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
      <div
        className={`${on ? "text-gray-600 bg-white/30" : "bg-black/30 text-gray-200"} transition-all duration-500 ease-in-out backdrop-blur-lg md:hidden top-20 w-[90%] p-5 rounded-3xl absolute flex flex-col gap-4 items-center *:cursor-pointer *:active:scale-98 
          ${open ? "opacity-100 translate-y-0 scale-100":"opacity-0 -translate-y-5 scale-95 pointer-events-none" }`}
        >
          <Link
            className={`${on ? "text-black" : "text-white"} transition-colors duration-300`}
            href="/techstack"
          >
            Tech Stack
          </Link>
          <Link
            href="/"
            className={`${on ? "text-black" : "text-white"} transition-colors duration-300`}
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/projects#contact"
            className={`${on ? "text-black" : "text-white"} transition-colors duration-300`}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className={`${on ? "text-black" : "text-white"} transition-colors duration-300`}
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <div className="h-px w-10 border-none bg-gray-400 mx-1"></div>
          <div
            onClick={() => {
              mode();
              setOpen(false);
            }}
          >
            {on ? <FaSun /> : <FaMoon />}
          </div>
        </div>
     
    </div>
  );
};

export default Header;
