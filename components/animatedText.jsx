"use client";
import { useEffect, useState } from "react";

const phrases = ["Web developer", "App developer", "Web designer"];

export default function AnimatedText() {
  const [displayText, setDisplayText] = useState("");
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = phrases[currentPhrase];

    let timeout;

    if (!isDeleting) {
      if (displayText !== currentText) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1200);
      }
    } else {
      if (displayText !== "") {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, 100);
      } else {
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPhrase]);

  return (
    <div className="w-80 lg:w-150 text-3xl font-bold flex lg:text-6xl">
      <p>{displayText}</p>
    </div>
  );
}
