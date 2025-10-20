"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const GRID_SIZE = 30;

const AnimatedGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const dots = Array.from({ length: GRID_SIZE * GRID_SIZE });

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 h-full w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 z-10 bg-gradient-to-b from-background/0 via-background/0 to-background"
      ></div>
      <div className="absolute inset-[-200%] grid h-[400%] w-[400%] animate-[grid_120s_linear_infinite] grid-cols-[repeat(30,1fr)] grid-rows-[repeat(30,1fr)]">
        {dots.map((_, i) => {
          const col = i % GRID_SIZE;
          const row = Math.floor(i / GRID_SIZE);
          return (
            <div
              key={i}
              className={cn(
                "h-px w-px transition-colors duration-500",
                "bg-primary/20",
                (row % 6 === 0 || col % 6 === 0) && "bg-primary/40",
              )}
            />
          );
        })}
      </div>

       <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, transparent, hsl(var(--background)) 50%)`,
        }}
      />
    </div>
  );
};

export default AnimatedGrid;
