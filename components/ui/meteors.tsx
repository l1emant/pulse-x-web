"use client";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteors, setMeteors] = useState<Array<{left: string; duration: string; delay: string}>>([]);

  useEffect(() => {
    const meteorArray = new Array(number || 20).fill(null).map(() => ({
      left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
      duration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
      delay: Math.random() * (0.8 - 0.1) + 0.1 + "s",
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <>
      {meteors.map((meteor, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className,
          )}
          style={{
            top: "0px",
            left: meteor.left,
            animationDelay: meteor.delay,
            animationDuration: meteor.duration,
          }}
        ></span>
      ))}
    </>
  );
};