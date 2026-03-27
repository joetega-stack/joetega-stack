'use client'
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { useContext } from "react";
import { AppContext } from "@/contexts/appContext";

export default function Home() {
  const {on} = useContext(AppContext)
  return (
    <div className={` ${on? "bg-gray-200": "bg-blue-900"}`}>
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}
