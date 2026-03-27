"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InfiniteMovingCardsDemo() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const images = [
    { src: "/dictionary.png" },
    { src: "/dictionary.png" },
    { src: "/dictionary.png" },
    { src: "/dictionary.png" },
  ];

  const paginate = (newDirection) => {
    setIndex(([prevIndex]) => {
      const newIndex =
        (prevIndex + newDirection + images.length) % images.length;
      return [newIndex, newDirection];
    });
  };

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      paginate(1);
    }, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div
      className="relative w-full flex items-center justify-center h-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) paginate(1);
            if (info.offset.x > 100) paginate(-1);
          }}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.6 }}
          className="absolute text-2xl font-bold cursor-grab active:cursor-grabbing"
        >
          <Image
            src={images[index].src}
            alt="slider image"
            width={1000}
            height={1000}
            className="h-100 w-100"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
