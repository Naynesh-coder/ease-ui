import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

// 1. Tooltip animation, position & style lookup configurations
export const tooltipVariantConfigs = {
  "fade-slide-up": {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    theme: "bg-slate-800 text-white shadow-lg border border-slate-700/50",
    animation:
      "transition-all duration-300 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-slate-800",
    easingStyle: {},
  },
  "scale-glow": {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    theme:
      "bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    animation:
      "transition-all duration-200 ease-out transform opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-slate-900/80",
    easingStyle: {},
  },
  "elastic-bounce": {
    container: "top-full left-1/2 -translate-x-1/2 mt-2",
    theme: "bg-slate-900 text-white shadow-2xl border border-slate-800",
    animation:
      "transition-all duration-500 transform opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900",
    easingStyle: {
      transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
  // Legacy support for light / dark / outline
  light: {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    theme: "bg-white text-gray-900 shadow-xl border border-gray-200",
    animation:
      "transition-all duration-300 transform opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-white",
    easingStyle: {},
  },
  dark: {
    container: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    theme:
      "bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.5)]",
    animation:
      "transition-all duration-200 ease-out transform opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100",
    arrow: "top-full left-1/2 -translate-x-1/2 border-t-slate-900/80",
    easingStyle: {},
  },
  outline: {
    container: "top-full left-1/2 -translate-x-1/2 mt-2",
    theme: "bg-slate-900 text-white shadow-2xl border border-slate-800",
    animation:
      "transition-all duration-500 transform opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0",
    arrow: "bottom-full left-1/2 -translate-x-1/2 border-b-slate-900",
    easingStyle: {
      transitionTimingFunction: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    },
  },
} as const;

export type TooltipVariantType = keyof typeof tooltipVariantConfigs;

// 2. Size variants with CVA
const TooltipSizeVariants = cva("", {
  variants: {
    size: {
      sm: "px-2.5 py-1 text-xs min-w-[100px]",
      md: "px-3.5 py-1.5 text-sm min-w-[150px]",
      lg: "px-5 py-2.5 text-base min-w-[200px]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

export interface TooltipProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TooltipSizeVariants> {
  asChild?: boolean;
  isOpen?: boolean;
  variant?: TooltipVariantType;
  title?: string;
  description?: string;
  onClose?: () => void;
  onDone?: () => void;
  doneText?: string;
  closeText?: string;
  children?: React.ReactNode;
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      asChild = false,
      variant = "fade-slide-up",
      size = "sm",
      title,
      description,
      children,
      className,
      isOpen,
      onClose,
      onDone,
      doneText,
      closeText,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const config =
      tooltipVariantConfigs[variant] || tooltipVariantConfigs["fade-slide-up"];

    return (
      <div
        className={cn(
          "absolute z-50 pointer-events-none w-max",
          config.container,
          isOpen === true
            ? "block"
            : isOpen === false
            ? "hidden"
            : "hidden group-hover:block"
        )}
      >
        <Comp
          ref={ref}
          style={config.easingStyle}
          className={cn(
            "relative rounded-lg font-normal shadow-md",
            TooltipSizeVariants({ size }),
            config.theme,
            config.animation,
            isOpen && "`!opacity-100` `!translate-y-0` `!scale-100`",
            className
          )}
          {...props}
        >
          {title && (
            <h4 className="`font-semibold` `text-[inherit]` `text-xs` `mb-0.5`">
              {title}
            </h4>
          )}
          {description && (
            <p className="`opacity-90 text-[11px]` `text-[inherit]` `mb-1`">
              {description}
            </p>
          )}

          {children}

          {/* Tooltip Arrow Element */}
          <div
            className={cn(
              "absolute border-4 border-transparent",
              config.arrow
            )}
          />
        </Comp>
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export { Tooltip, TooltipSizeVariants as TooltipVariants };
export default Tooltip;