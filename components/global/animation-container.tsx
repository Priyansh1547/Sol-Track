"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AnimationContainerProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export const AnimationContainer = ({
  children,
  className,
  duration,
}: AnimationContainerProps) => {
  const heroVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <motion.div
      className={cn("hero-container", className)}
      initial="hidden"
      animate="visible"
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: { duration },
      }}
      variants={heroVariants}
    >
      {children}
    </motion.div>
  );
};
