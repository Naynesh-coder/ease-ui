import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import type { InputHTMLAttributes } from "react";
const inputVariants = cva(
  "w-full rounded-md border focus:outline-none shadow-sm transition-all duration-150 bg-white placeholder:text-gray-400", // <-- Added 'border' here
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg",
      },
      tone: {
        default:
          "border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
        error:
          "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400",
        success:
          "border-green-400 focus:ring-2 focus:ring-green-400 focus:border-green-400",
      },
      disabled: {
        true: "bg-gray-100 text-gray-400 cursor-not-allowed opacity-80",
      },
    },
    defaultVariants: {
      size: "md",
      tone: "default",
      disabled: false,
    },
  }
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "disabled">,
    VariantProps<typeof inputVariants> {
  disabled?: boolean;
  label?: string;
  hint?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      className,
      size,
      tone,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    // Generate fallback unique ID safely using standard React.useId()
    const reactId = React.useId();
    const inputId = id || reactId;

    // Automatically switch tone to error if an error message is passed
    const computedTone = tone || (error ? "error" : "default");

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            inputVariants({ size, tone: computedTone, disabled }),
            className
          )}
          disabled={disabled}
          {...props}
        />
        {error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : hint ? (
          <p className="text-sm text-gray-500">{hint}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input, inputVariants };