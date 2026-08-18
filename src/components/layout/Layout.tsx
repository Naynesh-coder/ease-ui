import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "@/libs/utils";

// 1. Variant configurations
export const layoutVariantConfigs = {
  default: "bg-slate-50 text-slate-900",
  dark: "bg-slate-950 text-slate-50 border-slate-800",
  boxed: "bg-slate-100/80 p-4 md:p-8 text-slate-900",
} as const;

export type LayoutVariantType = keyof typeof layoutVariantConfigs;

// 2. Base CVA Setup
const layoutVariants = cva("min-h-screen w-full flex flex-col transition-colors", {
  variants: {
    variant: {
      default: layoutVariantConfigs.default,
      dark: layoutVariantConfigs.dark,
      boxed: layoutVariantConfigs.boxed,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/* ==========================================================================
   Root Layout Component
   ========================================================================== */
export interface LayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  asChild?: boolean;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ asChild = false, variant = "default", className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(layoutVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Layout.displayName = "Layout";

/* ==========================================================================
   Header Sub-component
   ========================================================================== */
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  fixed?: boolean;
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ asChild = false, fixed = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "header";

    return (
      <Comp
        ref={ref}
        className={cn(
          "w-full z-30 transition-all",
          fixed && "sticky top-0 backdrop-blur-md bg-white/80 dark:bg-slate-900/80",
          className
        )}
        {...props}
      />
    );
  }
);
Header.displayName = "Header";

/* ==========================================================================
   Sidebar Sub-component
   ========================================================================== */
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  collapsible?: boolean;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "aside";

    return (
      <Comp
        ref={ref}
        className={cn(
          "w-64 shrink-0 transition-all duration-300 flex flex-col",
          className
        )}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

/* ==========================================================================
   Content Sub-component
   ========================================================================== */
export interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const Content = React.forwardRef<HTMLElement, ContentProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "main";

    return (
      <Comp
        ref={ref}
        className={cn("flex-1 w-full min-w-0", className)}
        {...props}
      />
    );
  }
);
Content.displayName = "Content";

/* ==========================================================================
   Footer Sub-component
   ========================================================================== */
export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ asChild = false, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "footer";

    return (
      <Comp
        ref={ref}
        className={cn("w-full mt-auto", className)}
        {...props}
      />
    );
  }
);
Footer.displayName = "Footer";

/* ==========================================================================
   Exports
   ========================================================================== */
export { Layout, Header, Sidebar, Content, Footer, layoutVariants };
export default Layout;