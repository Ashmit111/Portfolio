"use client";
import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number; // Optional delay between words in milliseconds (default: 500ms)
  className?: string; // Allows custom styling via className
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay = 500, className }) => {
  const words = text.split(" ");
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < words.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + (index === 0 ? "" : " ") + words[index]);
        setIndex(index + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [index, words, delay]);

  return <div className={className}>{displayedText}</div>;
};

export default TypewriterEffect;
