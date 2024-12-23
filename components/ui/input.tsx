"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export function Input({
  className,
  placeholder,
  type,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  useEffect(() => {
    if (type === "password") {
      setIsPassword(true);
    }
  }, [type]);

  return (
    <>
      {!isPassword && (
        <input
          className={cn(
            "h-12 rounded-xl border-2 border-solid bg-inputBaground px-4 text-base text-inputText placeholder-placeholderText outline-none ring-0 focus:ring-0 border-baseBorderLight focus:border-accentBlue w-full",
            className
          )}
          placeholder={placeholder}
          type={type}
        />
      )}
      {isPassword && (
        <div className="relative">
          <input
            className={cn(
              "h-12 rounded-xl border-2 border-solid bg-inputBaground px-4 text-base text-inputText placeholder-placeholderText outline-none ring-0 focus:ring-0 border-baseBorderLight focus:border-accentBlue w-full",
              className
            )}
            placeholder={placeholder}
            type={isVisible ? "text" : "password"}
          />
          <button
            className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-placeholderText focus:outline-none focus:ring-0 ml-2"
            type="button"
            onClick={toggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            aria-controls="password"
          >
            {isVisible ? (
              <EyeOff size={18} strokeWidth={2} aria-hidden="true" />
            ) : (
              <Eye size={18} strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      )}
    </>
  );
}
