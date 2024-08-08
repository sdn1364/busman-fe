import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { Button, buttonVariants } from "./button";

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
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "neutral"
    | "ghost";
  className?: string;
  children: ReactNode;
}

const ActionButton = forwardRef<HTMLButtonElement, ActionButtonType>(
  ({ className, children, size, variant, ...rest }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
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
