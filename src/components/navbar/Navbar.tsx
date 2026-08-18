import { Slot } from "@radix-ui/react-slot";
import React, { forwardRef, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";
import { hoverAnimations } from "@/libs/animations/hoverAnimation";
import gsap from "gsap";

const navbarVariants = cva(
  "w-full flex items-center justify-between px-6 py-4 rounded-md border border-gray-200 transition-all",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white border-slate-800",
        light: "bg-white text-gray-800 shadow",
        primary: "bg-indigo-600 text-white border-indigo-500",
        glass: "backdrop-blur-md bg-white/10 text-white border-white/20",
      },
      size: {
        default: "h-16",
        sm: "h-12",
        lg: "h-20",
        xl: "h-24",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
);

export interface NavbarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {
  asChild?: boolean;
  animation?: keyof typeof entranceAnimations | "none";
  hoverAnimation?: keyof typeof hoverAnimations | "none";
}

const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      animation = "fadeIn",
      hoverAnimation = "none",
      children,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "nav";
    const internalRef = useRef<HTMLElement | null>(null);

    // Merge outer ref and internal ref safely
    const setRef = (node: HTMLElement | null) => {
      internalRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    };

    useEffect(() => {
      if (!internalRef.current || animation === "none") return;
      const ctx = gsap.context(() => {
        entranceAnimations[animation]?.(internalRef.current!);
      }, internalRef);

      return () => ctx.revert(); // Memory leak safety
    }, [animation]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
      onMouseEnter?.(e);
      if (internalRef.current && hoverAnimation !== "none") {
        hoverAnimations[hoverAnimation]?.(internalRef.current);
      }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
      onMouseLeave?.(e);
      if (internalRef.current && hoverAnimation !== "none") {
        gsap.to(internalRef.current, {
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 0.15,
          ease: "power1.out",
        });
      }
    };

    return (
      <Comp
        ref={setRef}
        className={cn(navbarVariants({ variant, size }), className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);

Navbar.displayName = "Navbar";

export { Navbar, navbarVariants };