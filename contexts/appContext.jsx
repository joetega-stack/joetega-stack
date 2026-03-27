"use client";
import { useState, useEffect, createContext, useContext } from "react";

export const AppContext = createContext({});

const Provider = ({ children }) => {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);

  const mode = () => {
    setOn((prev) => {
      const next = !prev;
      localStorage.setItem("theme", String(next));
      return next;
    });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const saved = localStorage.getItem("theme");
    if (saved !== null) {
      setOn(saved === "true");
    }
  }, [mounted]);

  return (
    <AppContext.Provider value={{ mode, on, setOn }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
