"use client";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Main from "@/components/main";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/contexts/appContext";
import { SparklesCore } from "@/components/ui/sparkles";
import CustomCursor from "@/components/ui/customCursor";


export default function Home() {
  const { on, loading, setLoading } = useContext(AppContext);

  function loadPage() {
    setLoading(true);
    try {
    } catch {
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={` ${on ? "bg-gray-200" : "bg-[#0b0223] backdrop-blur-2xl"} relative duration-1000`}
    >
      {loading ? "" : ""}
      {!on && (
        <div className="w-full absolute inset-0 -z-40">
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
      <CustomCursor />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
