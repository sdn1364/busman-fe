import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { flexBoxVariants } from "./variants";

const stackVariants = cva("flex flex-col", {
  variants: flexBoxVariants,
  defaultVariants: {
    justify: "start",
    align: "stretch",
    gap: "xs",
  },
});
interface StackProps extends VariantProps<typeof stackVariants> {
  children: ReactNode;
  className?: string;
}
const Stack = ({ children, className, justify, align, gap }: StackProps) => {
  return (
    <div className={cn(stackVariants({ justify, className, align, gap }))}>
      {children}
    </div>
  );
};

export { Stack };
