'use Client'
import { motion, useMotionValue, useSpring } from "framer-motion";
import { createPortal } from "react-dom";
import { useState,useEffect } from "react";




export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);
  
  const [isHovering, setIsHovering] = useState(false);
  const [mounted,setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
  
    const onOver = (e) => {
      const t = e.target;
      setIsHovering(!!t.closest("a, button, [role='button'], input, textarea"))
    }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onOver)
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver)
    }
  }, [mouseX, mouseY]);
  
  if (!mounted) return null
  
  return createPortal(
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-y-1/2 -translate-x-1/2  rounded-full bg-blue-500 hidden md:block"
        style={{ x: mouseX, y: mouseY }}
      />
        <motion.div
          className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-y-1/2 -translate-x-1/2 rounded-full border border-blue-600 opacity-80 hidden md:block"
          style={{
            x: ringX,
            y: ringY,
            width: isHovering ? 56 : 36,
            height: isHovering ? 56 : 36,
          }}
      />
    </>,
    document.body
  )

  
}