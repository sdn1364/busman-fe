import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Button, buttonVariants } from "./button/button";

const actionButtonVariants = cva(
  "flex items-center justify-center rounded-sm !p-0",
  {
    variants: {
      size: {
        default: "h-10 w-10 ",
        xs: "h-7 w-7 rounded-sm ",
        sm: "h-9 w-9 rounded-sm ",
        lg: "h-11 w-11 rounded-sm",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);
interface ActionButtonType
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionButtonVariants> {
  variant:
    | "default"
    | "outline"
    | "transparent"
    | "light"
    | "white"
    | "ghost"
    | undefined
    | null;
  c?:
    | "default"
    | "primary"
    | "secondary"
    | "neutral"
    | "success"
    | "info"
    | "warning"
    | "destructive";
  className?: string;
  children: ReactNode;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonType>(
  (
    { className, children, size, variant = "default", c = "default", ...rest },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        c={c}
        className={cn(
          buttonVariants({ variant }),
          actionButtonVariants({ size }),
          className,
        )}
        {...rest}
      >
        {children}
      </Button>
    );
  },
);

export { ActionButton };
