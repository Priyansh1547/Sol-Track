"use client";

import { motion } from "framer-motion";
import { Button } from "../button/Button";

export const TabButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button
      className={`relative px-3 py-2 text-sm font-medium transition-colors border-b border-gray-200 ${
        active ? "text-white" : "text-gray-400 hover:text-gray-200"
      }`}
      role="tab"
      onClick={onClick}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-0 bg-primary rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
      <motion.span className="relative z-10">{children}</motion.span>
    </Button>
  );
};
