import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

const buttonVariants = cva(
  "overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        white: "bg-slate-50 hover:bg-slate-100",
        light: "",
        outline: "border bg-transparent",
        transparent: "",
        ghost: "",
      },
      c: {
        default: "",
        success: "",
        primary: "",
        secondary: "",
        info: "",
        warning: "",
        destructive: "",
        neutral: "",
      },
      loading: {
        true: "space-x-2",
      },
      hasRightIcon: { true: "space-x-2" },
      hasLeftIcon: { true: "space-x-2" },
      fullWidth: {
        true: "w-full",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 rounded-sm px-2",
        sm: "h-9 rounded-sm px-3",
        lg: "h-11 rounded-sm px-8",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        c: "default",
        class: "bg-slate-600 hover:bg-slate-600/90 text-slate-200",
      },
      {
        variant: "light",
        c: "default",
        class:
          "bg-slate-600/10 hover:bg-slate-600/20 dark:text-slate-200 text-slate-700",
      },
      {
        variant: "ghost",
        c: "default",
        class:
          "bg-transparent hover:bg-slate-600/20 dark:text-slate-200 text-slate-700",
      },
      {
        variant: "white",
        c: "default",
        class: "text-slate-800 ",
      },
      // primary
      {
        variant: "default",
        c: "primary",
        class: "bg-primary text-primary-foreground hover:bg-primary/90",
      },
      {
        variant: "outline",
        c: "primary",
        class:
          "border-primary text-primary bg-transparent hover:border-primary/90 hover:text-primary/90 hover:bg-primary/10",
      },
      {
        variant: "ghost",
        c: "primary",
        class: "text-primary bg-transparent hover:bg-primary/10",
      },
      {
        variant: "light",
        c: "primary",
        class: "text-primary bg-primary/10 hover:bg-primary/20",
      },
      {
        variant: "transparent",
        c: "primary",
        class: "text-primary",
      },
      {
        variant: "white",
        c: "primary",
        class: "bg-slate-50 text-primary",
      },
      // secondary
      {
        variant: "default",
        c: "secondary",
        class: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      {
        variant: "outline",
        c: "secondary",
        class:
          "border-secondary text-secondary bg-transparent hover:border-secondary/90 hover:text-secondary/90 hover:bg-secondary/10",
      },
      {
        variant: "ghost",
        c: "secondary",
        class: "!text-secondary bg-transparent hover:bg-secondary/10",
      },
      {
        variant: "light",
        c: "secondary",
        class: "text-secondary bg-secondary/10 hover:bg-secondary/20",
      },
      {
        variant: "transparent",
        c: "secondary",
        class: "text-secondary",
      },
      {
        variant: "white",
        c: "secondary",
        class: "bg-slate-50 text-secondary",
      },
      // Neutral
      {
        variant: "default",
        c: "neutral",
        class: "bg-neutral text-neutral-foreground hover:bg-neutral/90",
      },
      {
        variant: "outline",
        c: "neutral",
        class:
          "border-neutral text-neutral bg-transparent hover:border-neutral/90 hover:text-neutral/90 hover:bg-neutral/10",
      },
      {
        variant: "ghost",
        c: "neutral",
        class: "!text-neutral bg-transparent hover:bg-neutral/10",
      },
      {
        variant: "light",
        c: "neutral",
        class: "text-neutral bg-neutral/10 hover:bg-neutral/20",
      },
      {
        variant: "transparent",
        c: "neutral",
        class: "text-neutral",
      },
      {
        variant: "white",
        c: "neutral",
        class: "bg-slate-50 text-neutral",
      },
      // success
      {
        variant: "default",
        c: "success",
        class: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "outline",
        c: "success",
        class:
          "border-success text-success bg-transparent hover:border-success/90 hover:text-success/90 hover:bg-success/10",
      },
      {
        variant: "ghost",
        c: "success",
        class: "!text-success bg-transparent hover:bg-success/10",
      },
      {
        variant: "light",
        c: "success",
        class: "text-success bg-success/10 hover:bg-success/20",
      },
      {
        variant: "transparent",
        c: "success",
        class: "text-success",
      },
      {
        variant: "white",
        c: "success",
        class: "bg-slate-50 text-success",
      },
      // info
      {
        variant: "default",
        c: "info",
        class: "bg-info text-info-foreground hover:bg-info/90",
      },
      {
        variant: "outline",
        c: "info",
        class:
          "border-info text-info bg-transparent hover:border-info/90 hover:text-info/90 hover:bg-info/10",
      },
      {
        variant: "ghost",
        c: "info",
        class: "!text-info bg-transparent hover:bg-info/10",
      },
      {
        variant: "light",
        c: "info",
        class: "text-info bg-info/10 hover:bg-info/20",
      },
      {
        variant: "transparent",
        c: "info",
        class: "text-info",
      },
      {
        variant: "white",
        c: "info",
        class: "bg-slate-50 text-info",
      },
      // warning
      {
        variant: "default",
        c: "warning",
        class: "bg-warning text-warning-foreground hover:bg-warning/90",
      },
      {
        variant: "outline",
        c: "warning",
        class:
          "border-warning text-warning bg-transparent hover:border-warning/90 hover:text-warning/90 hover:bg-warning/10",
      },
      {
        variant: "ghost",
        c: "warning",
        class: "!text-warning bg-transparent hover:bg-warning/10",
      },
      {
        variant: "light",
        c: "warning",
        class: "text-warning bg-warning/10 hover:bg-warning/20",
      },
      {
        variant: "transparent",
        c: "warning",
        class: "text-warning",
      },
      {
        variant: "white",
        c: "warning",
        class: "bg-slate-50 text-warning",
      },
      // destructive
      {
        variant: "default",
        c: "destructive",
        class:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      {
        variant: "outline",
        c: "destructive",
        class:
          "border-destructive text-destructive bg-transparent hover:border-destructive/90 hover:text-destructive/90 hover:bg-destructive/10",
      },
      {
        variant: "ghost",
        c: "destructive",
        class: "!text-destructive bg-transparent hover:bg-destructive/10",
      },
      {
        variant: "light",
        c: "destructive",
        class: "text-destructive bg-destructive/10 hover:bg-destructive/20",
      },
      {
        variant: "transparent",
        c: "destructive",
        class: "text-destructive",
      },
      {
        variant: "white",
        c: "destructive",
        class: "bg-slate-50 text-destructive",
      },
    ],
    defaultVariants: {
      variant: "default",
      c: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  right?: React.ReactNode | boolean;
  left?: React.ReactNode | boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading,
      fullWidth,
      right,
      left,
      c,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            c,
            size,
            fullWidth,
            hasRightIcon: !!right,
            hasLeftIcon: !!left,
            className,
            loading,
          }),
        )}
        ref={ref}
        disabled={loading ? loading : props.disabled}
        {...props}
      >
        {left && !loading && <>{left}</>}
        {loading && left && <Loader size={15} className="animate-spin" />}

        {props.children}

        {right && !loading && <>{right}</>}
        {loading && right && <Loader size={15} className="animate-spin" />}
      </Comp>
    );
  },
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
