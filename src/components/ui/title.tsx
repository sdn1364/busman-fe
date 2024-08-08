import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TitleOrders = 1 | 2 | 3 | 4 | 5 | 6;
type TitleProps = {
  order: TitleOrders;
  children: ReactNode;
  className?: string;
};

const Title = ({ order, children, className }: TitleProps) => {
  const Element = `h${order}` as keyof JSX.IntrinsicElements;
  return (
    <Element
      className={cn(
        "font-primary font-[800]",
        className,
        order === 1 && "text-3xl",
        order === 2 && "text-2xl",
        order === 3 && "text-xl",
        order === 4 && "text-lg",
        order === 5 && "text-md",
        order === 6 && "text-sm",
      )}
    >
      {children}
    </Element>
  );
};

Title.displayName = "Title";

export { Title };
