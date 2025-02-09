"use client"
import React, { useState, useEffect } from "react";
import clsx from "clsx";

export const Meteors = ({ number = 20 }: { number?: number }) => {
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  if (screenWidth === undefined) {
    return null;
  }

  const meteorCount = screenWidth <= 768 ? Math.max(number / 2, 5) : number;

  return (
    <>
      {Array.from({ length: meteorCount }).map((_, idx) => {
        const size = Math.random() * 50 + 20; 
        const duration = Math.random() * 5 + 3; 
        const brightness = idx === meteorCount - 1 ? "brightness-150" : "brightness-100"; 

        return (
          <span
            key={`meteor-${idx}`}
            className={clsx(
              "animate-meteor absolute h-[1px] w-[1px] bg-white/30 shadow-[0_0_5px_#ffffff40] rotate-[225deg]",
              "before:content-[''] before:absolute before:w-full before:h-[2px] before:bg-gradient-to-r before:from-[#ffffff80] before:to-transparent",
              brightness
            )}
            style={{
              top: Math.random() * -50 + "vh", 
              left: Math.random() * 80 + "vw", 
              width: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${Math.random() * 1.5}s`,
            }}
          />
        );
      })}
    </>
  );
};
