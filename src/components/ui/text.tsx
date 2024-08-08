import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { textVariants } from "./variants";

const textComponentVariants = cva("", {
  variants: textVariants,
  defaultVariants: {
    size: "md",
    fs: "normal",
  },
});

interface TextProps extends VariantProps<typeof textComponentVariants> {
  children: ReactNode;
  className?: string;
  span?: boolean;
}

const Text = ({
  children,
  className,
  fs,
  size,
  fw,
  td,
  ta,
  tt,
  span,
}: TextProps) => {
  const Element = span ? "span" : "p";
  return (
    <Element
      className={cn(
        textComponentVariants({ className, fs, size, fw, td, ta, tt }),
      )}
    >
      {children}
    </Element>
  );
};

export { Text };
