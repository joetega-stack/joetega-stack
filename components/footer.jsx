"use client";
import React, { useContext } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { AppContext } from "@/contexts/appContext";
import Link from "next/link";

const Footer = () => {
  const { on } = useContext(AppContext);
  return (
    <div
      className={` ${on ? "text-gray-600" : "text-gray-200"} border-gray-400 border-t w-full pb-10 lg:px-15 px-2`}
    >
      <div className="grid md:grid-cols-3 gap-3 w-full md:h-50">
        <div className="p-3">
          <p className="text-3xl font-bold">Joseph — Full-Stack Developer</p>
          <p>
            Building responsive web apps with modern technologies. Open to
            internships, freelance and collaboration.
          </p>
        </div>
        <div className="p-3">
          <p className="text-2xl font-bold">Quick links</p>
          <div className="*:cursor-pointer *:active:scale-98 grid">
            <Link href="/techstack">Tech stack</Link>
            <Link href="/">About</Link>
            <Link href="/projects#contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <p className="text-2xl font-bold">Get in touch</p>
          <a href="rolandjosepharjo@gmail.com">rolandjosepharjo@gmail.com</a>
          <div className="grid grid-cols-3 gap-5 w-40 *:size-8 *:cursor-pointer *:active:scale-98">
            <BsInstagram />
            <FaFacebookSquare />
            <FaSquareXTwitter />
            <FaLinkedin />
            <AiFillTikTok />
          </div>
        </div>
      </div>
      <div className="mt-4 border-t border-t-gray-400">
        <p>© Allwell 2026. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
