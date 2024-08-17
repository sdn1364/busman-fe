import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { flexBoxVariants } from "./variants";

const stackVariants = cva("flex flex-col", {
  variants: flexBoxVariants,
  defaultVariants: {
    justify: "start",
    align: "stretch",
    gap: "xs",
  },
});
interface StackProps
  extends VariantProps<typeof stackVariants>,
    HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, className, justify, align, gap, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(stackVariants({ justify, className, align, gap }))}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

export { Stack };
