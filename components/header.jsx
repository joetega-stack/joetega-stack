"use client";
import React, { useContext, useState,useEffect } from "react";
import Link from "next/link";
import { AppContext } from "@/contexts/appContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/components/logo";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Links = [
  {name:"Tech Stack",link:"/techstack"},
  {name:"Projects",link:"/projects"},
  {name:"About Me",link:"/"},
]

const Header = () => {
  const { on, mode } = useContext(AppContext);
  const [open, setOpen] = useState(false);
  const pathname = usePathname()

  return (
    <div
      className={`h-20 w-full sticky top-0 flex items-center justify-center z-20 bg-none`}
    >
      <nav className={`${on ? "text-gray-600 " : "text-gray-200"} p-5 flex flex-1 gap-5 justify-center items-center`}>
        <div
          className={`flex flex-1 justify-between items-center *:cursor-pointer`}
        >
          <div className="flex-1 flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_4px_rgba(34,211,238,0.6)]" />
            <Link href="/" className={`transition-colors duration-300`}>
              <Logo />
            </Link>
          </div>
          <div
            className={`${on ? "text-black border-blue-300 " : "text-white border-blue-800"} backdrop-blur-lg border px-5 h-12 rounded-3xl hidden md:flex gap-5 items-center *:active:scale-98`}
          >
            {Links.map((item) => (
              <Link key={item.name} href={item.link} className={`transition-colors duration-300 ${pathname === item.link ? "border-b-3 border-blue-500":"border-b-2 border-transparent"}`}>{item.name}</Link>
           ))}
          </div>
        </div>
        <div
            className="lg:hidden md:hidden sm:block text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>

        <div className="items-center gap-5 hidden justify-center md:flex lg:flex">
          
          <div className="relative inline-flex rounded-3xl p-[2px] overflow-hidden">
            <motion.div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent,blue,cyan,transparent)]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease:"linear"
            }}/>
            <Link
            href="/projects#contact"
            className={`${on?" text-gray-200 hover:bg-blue-800 hover:text-gray-50":"text-gray-200 hover:bg-blue-500 hover:text-gray-900"} relative bg-blue-600 active:scale-95 transition-colors duration-300 h-10 px-5 flex items-center justify-center rounded-3xl font-bold`}
          >
            Contact
          </Link>
          </div>
           <div
              onClick={() => {
                mode();
              }}
            >
              {on ? <FaSun /> : <FaMoon />}
            </div>
        </div>
      </nav>
      <div
        className={`${on ? "text-gray-600 bg-white/30" : "bg-black/30 text-gray-200"} transition-all duration-500 ease-in-out backdrop-blur-lg md:hidden top-20 w-[90%] p-5 rounded-3xl absolute flex flex-col gap-4 items-center *:cursor-pointer *:active:scale-98 
          ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-5 scale-95 pointer-events-none"}`}
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
