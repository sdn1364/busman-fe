import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { textVariants } from "./variants";

const AnchorVariants = cva(
  "text-primary font-light hover:underline cursor-pointer",
  {
    variants: textVariants,
  },
);

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof AnchorVariants> {
  className?: string;
  asChild?: boolean;
}

const Anchor = ({ className, asChild, ...props }: AnchorProps) => {
  const Component = asChild ? Slot : "a";
  return (
    <Component
      className={cn(AnchorVariants({ className, ...props }))}
      {...props}
    />
  );
};

Anchor.displayName = "Anchor";

export { Anchor };
