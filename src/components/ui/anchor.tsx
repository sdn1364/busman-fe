import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ElementType, ReactNode } from "react";
import { textVariants } from "./variants";

const AnchorVariants = cva(
  "dark:text-green-600 text-green-700 hover:text-green-600 cursor-pointer",
  {
    variants: textVariants,
    defaultVariants: {
      td: "underline",
    },
  },
);

interface Anchor extends VariantProps<typeof AnchorVariants> {
  children: ReactNode;
  className?: string;
  component?: ElementType;
}

const Anchor = ({
  children,
  className,
  component: Component = "a",
  ...rest
}: Anchor) => {
  return (
    <Component className={cn(AnchorVariants({ className, ...rest }))} {...rest}>
      {children}
    </Component>
  );
};

Anchor.displayName = "Anchor";

export { Anchor };
