import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export function Web3Input({
  className,
  placeholder,
  type,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <>
      <input
        className={cn(
          "h-12 rounded-xl border-2 border-solid bg-inputBaground px-4 text-base text-inputText placeholder-placeholderText outline-none ring-0 focus:ring-0 border-baseBorderLight focus:border-accentBlue w-full",
          className
        )}
        placeholder={placeholder}
        type={type}
      />
    </>
  );
}

export { Input };
