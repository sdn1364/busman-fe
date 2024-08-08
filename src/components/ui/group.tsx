import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { flexBoxVariants } from "./variants";

const groupVariants = cva("flex flex-row", {
  variants: flexBoxVariants,
  defaultVariants: {
    justify: "start",
    align: "stretch",
    gap: "xs",
  },
});

interface GroupProps extends VariantProps<typeof groupVariants> {
  children: ReactNode;
  className?: string;
}

const Group = ({ children, className, align, justify, gap }: GroupProps) => {
  return (
    <div className={cn(groupVariants({ className, align, justify, gap }))}>
      {children}
    </div>
  );
};

export { Group };
