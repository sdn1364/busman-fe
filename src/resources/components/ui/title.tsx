import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { textVariants } from "./variants";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { size, ...otherVariants } = textVariants;

const titleVariant = cva("font-primary font-bold", {
  variants: {
    ...otherVariants,
    order: {
      1: "text-3xl",
      2: "text-2xl",
      3: "text-xl",
      4: "text-lg",
      5: "text-md",
      6: "text-sm",
    },
  },
});

type TitleOrders = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends VariantProps<typeof titleVariant> {
  order: TitleOrders;
  children: ReactNode;
  className?: string;
}

const Title = ({ order, className, ...props }: TitleProps) => {
  const Component = `h${order}` as keyof JSX.IntrinsicElements;
  return (
    <Component className={cn(titleVariant({ className, order }))} {...props} />
  );
};

Title.displayName = "Title";

export { Title };
