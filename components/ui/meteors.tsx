"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <>
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        const left = Math.floor(Math.random() * (400 - -400) + -400) + "px";
        const animationDuration = Math.floor(Math.random() * (10 - 2) + 2) + "s";
        const animationDelay = Math.random() * (0.8 - 0.1) + 0.1 + "s";

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
              className,
            )}
            style={{
              top: "0px",
              left: left,
              animationDelay: animationDelay,
              animationDuration: animationDuration,
            }}
          ></span>
        );
      })}
    </>
  );
};