"use client";

import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

const scrollProgressVariants = cva("fixed z-30 origin-left", {
  variants: {
    variant: {
      default: "bg-gradient-to-r from-[#C9967A] via-[#D4A0B0] to-[#E4A0A0]",
      rose: "bg-gradient-to-r from-[#C9967A] via-[#E8BAA8] to-[#F2C9C9]",
      metallic: "bg-gradient-to-r from-[#C9967A] via-[#D4A0B0] to-[#F2C9C9]",
      solid: "bg-[#C9967A]",
      custom: "",
    },
    size: {
      xs: "h-0.5",
      sm: "h-1",
      default: "h-1.5",
      lg: "h-2",
      xl: "h-3",
    },
    position: {
      top: "inset-x-0 top-0",
      bottom: "inset-x-0 bottom-0",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      default: "rounded",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    glow: {
      none: "",
      sm: "shadow-sm",
      default: "shadow-md",
      lg: "shadow-lg drop-shadow-lg",
      xl: "shadow-xl drop-shadow-xl",
    },
  },
  defaultVariants: {
    variant: "metallic",
    size: "sm",
    position: "top",
    rounded: "none",
    glow: "none",
  },
});

interface ScrollProgressProps
  extends VariantProps<typeof scrollProgressVariants> {
  className?: string;
  customGradient?: string;
  springConfig?: {
    stiffness?: number;
    damping?: number;
    restDelta?: number;
  };
  showPercentage?: boolean;
  percentagePosition?: "left" | "right" | "center";
  container?: React.RefObject<HTMLElement>;
}

export function ScrollProgress({
  className,
  variant,
  size,
  position,
  rounded,
  glow,
  customGradient,
  springConfig = {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  },
  showPercentage = false,
  percentagePosition = "right",
  container,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll(container ? { container } : undefined);
  const scaleX = useSpring(scrollYProgress, springConfig);

  const [percentage, setPercentage] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setPercentage(Math.round(latest * 100));
  });

  const progressBarClasses = cn(
    scrollProgressVariants({ variant, size, position, rounded, glow }),
    variant === "custom" && customGradient,
    className
  );

  const percentageClasses = cn(
    "fixed z-40 text-xs font-medium text-[#F5EEF0] bg-[#0D0A0E]/80 backdrop-blur-sm px-2 py-1 rounded",
    position === "top" ? "top-2" : "bottom-2",
    percentagePosition === "left" && "left-4",
    percentagePosition === "right" && "right-4",
    percentagePosition === "center" && "left-1/2 -translate-x-1/2"
  );

  return (
    <>
      <motion.div
        className={progressBarClasses}
        style={{
          scaleX,
        }}
      />
      {showPercentage && (
        <motion.div
          className={percentageClasses}
          style={{
            opacity: scrollYProgress,
          }}
        >
          <motion.span>{percentage}%</motion.span>
        </motion.div>
      )}
    </>
  );
}
