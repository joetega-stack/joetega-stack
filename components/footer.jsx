"use client";
import React, { useContext } from "react";

import { AppContext } from "@/contexts/appContext";
import Link from "next/link";
import Logo from "@/components/logo";

const Footer = () => {
  const { on } = useContext(AppContext);
  return (
    <div
      className={` ${on ? "text-gray-950" : "text-gray-200"} border-blue-600 border-t-2 w-full pb-10 lg:px-15 px-2`}
    >
      <div className="grid md:grid-cols-3 gap-3 w-full md:h-50">
        <div className="p-3 text-center lg:text-start md:text-start">
          <p className="text-2xl font-bold">Joseph - Full-stack Developer</p>
          <p className={`${on?"text-gray-500":"text-gray-400"} font-semibold`}>
            Building responsive web apps with modern technologies. Open to
            internships, freelance and collaboration.
          </p>
        </div>
        <div className="p-3 text-center lg:text-start md:text-start">
          <p className="text-xl font-semibold text-blue-600">Quick links</p>
          <div className="*:cursor-pointer *:active:scale-98 grid">
            <Link href="/techstack">Tech stack</Link>
            <Link href="/">About</Link>
            <Link href="/projects#contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3 text-center lg:text-start md:text-start">
          <p className="text-xl font-semibold text-blue-600">Services</p>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Back-End Development</li>
            <li>API Integration</li>
            <li>Website Maintenance</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 border-t-2 border-blue-600">
        <p>© Joetega-stack 2026. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
