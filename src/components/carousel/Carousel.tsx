import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useRef } from "react";
import { cn } from "@/libs/utils";

// 1. Carousel style & configuration lookup
export const carouselVariantConfigs = {
  default: {
    container: "bg-transparent",
    track: "gap-6 py-2",
    card: "bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition",
    button: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 shadow-sm",
  },
  dark: {
    container: "bg-slate-950 p-6 rounded-3xl",
    track: "gap-6 py-2",
    card: "bg-slate-900 border border-slate-800 rounded-2xl p-4 text-white shadow-lg hover:border-slate-700 transition",
    button: "border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-200 shadow-sm",
  },
  minimal: {
    container: "bg-transparent",
    track: "gap-4 py-1",
    card: "bg-slate-50 border border-slate-200/60 rounded-xl p-3 hover:bg-white transition",
    button: "border border-transparent hover:bg-slate-200/60 text-slate-600",
  },
} as const;

export type CarouselVariantType = keyof typeof carouselVariantConfigs;

// 2. Size variants using CVA
const CarouselSizeVariants = cva("snap-start shrink-0", {
  variants: {
    size: {
      sm: "w-48",
      md: "w-64",
      lg: "w-80",
      full: "w-full",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface CarouselProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CarouselSizeVariants> {
  asChild?: boolean;
  variant?: CarouselVariantType;
  title?: string;
  description?: string;
  scrollAmount?: number;
  showControls?: boolean;
  children?: React.ReactNode;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      asChild = false,
      variant = "default",
      size = "md",
      title,
      description,
      scrollAmount = 280,
      showControls = true,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const Comp = asChild ? Slot : "div";
    const config =
      carouselVariantConfigs[variant] || carouselVariantConfigs["default"];

    const handleScrollLeft = () => {
      trackRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    };

    const handleScrollRight = () => {
      trackRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
    };

    return (
      <div
        className={cn("w-full max-w-6xl mx-auto px-4 py-6", config.container, className)}
        {...props}
      >
        {/* Header Section */}
        {(title || description || showControls) && (
          <div className="flex items-center justify-between mb-6">
            <div>
              {title && (
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {title}
                </h2>
              )}
              {description && (
                <p className="text-slate-500 text-sm mt-1">{description}</p>
              )}
            </div>

            {/* Navigation Controls */}
            {showControls && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleScrollLeft}
                  aria-label="Scroll left"
                  className={cn(
                    "p-2.5 rounded-full transition active:scale-95 flex items-center justify-center",
                    config.button
                  )}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleScrollRight}
                  aria-label="Scroll right"
                  className={cn(
                    "p-2.5 rounded-full transition active:scale-95 flex items-center justify-center",
                    config.button
                  )}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Carousel Track */}
        <div
          ref={trackRef}
          className={cn(
            "flex overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth",
            config.track
          )}
        >
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return child;

            return (
              <Comp
                ref={ref}
                className={cn(
                  CarouselSizeVariants({ size }),
                  config.card,
                (child.props as React.HTMLAttributes<HTMLElement>).className
                )}
              >
                {child}
              </Comp>
            );
          })}
        </div>
      </div>
    );
  }
);

Carousel.displayName = "Carousel";

export { Carousel, CarouselSizeVariants as CarouselVariants };
export default Carousel;