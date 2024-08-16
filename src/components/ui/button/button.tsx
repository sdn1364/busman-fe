import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";

const buttonVariants = cva(
  "overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        white: "",
        filled: "",
        light: "",
        outline: "",
        transparent: "",
        ghost: "",
      },
      c: {
        default: "",
        success: "",
        primary: "",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        info: "bg-info text-info-foreground hover:bg-info/80",
        warning: "bg-warning text-warning-foreground hover:bg-warning/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        neutral: "bg-neutral text-neutral-foreground hover:bg-neutral/80",
      },
      loading: {
        true: "space-x-2",
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
        class: "bg-slate-500 hover:bg-slate-500/90 text-slate-300",
      },
      {
        variant: "default",
        c: "success",
        class: "bg-success text-success-foreground hover:bg-success/90",
      },
      {
        variant: "default",
        c: "primary",
        class: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      },
      {
        variant: "outline",
        c: "primary",
        class:
          "border border-primary text-primary bg-transparent hover:border-primary/90 hover:text-primary/90 hover:bg-primary/90",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading, c, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, c, size, className, loading }))}
        ref={ref}
        disabled={loading ? loading : props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <LoaderCircle className="animate-spin" size="1rem" />
            <span>{props.children}</span>{" "}
          </>
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
