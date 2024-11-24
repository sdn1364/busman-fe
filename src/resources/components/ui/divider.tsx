import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const dividerVariants = cva(
  "after:dark:border-slate-800 before:dark:border-slate-800 after:border-slate-100 before:border-slate-100 after:content-none before:content-none flex w-full items-center text-muted-foreground before:mr-2 before:flex-1 after:ml-2 after:flex-1 before:mr-2 before:h-px before:flex-1 before:border-t after:ml-2 after:h-px after:flex-1 after:border-t",
  {
    variants: {
      variant: {
        solid: "after:border-solid before:border-solid",
        dashed: "after:border-dashed before:border-dashed",
        dotted: "after:border-dotted before:border-dotted",
      },
      size: {
        xs: "after:border   before:border   ",
        sm: "after:border-2 before:border-2 ",
        lg: "after:border-4 before:border-4 ",
        xl: "after:border-8 before:border-8 ",
      },
      oriantation: {
        vertical: "w-px border-r",
        horizontal: "h-full after:border-t before:border-t",
      },
      labelPosition: {
        right: "before:content-['']",
        center: "before:content-[''] after:content-['']",
        left: "after:content-['']",
      },
    },
    defaultVariants: {
      size: "xs",
      oriantation: "horizontal",
      labelPosition: "center",
    },
  },
);

interface DividerProps extends VariantProps<typeof dividerVariants> {
  className?: string;
  label?: string;
}

const Divider = ({
  label,
  className,
  size,
  variant,
  oriantation,
  labelPosition,
}: DividerProps) => {
  return (
    <span
      className={cn(
        dividerVariants({
          className,
          size,
          variant,
          oriantation,
          labelPosition: label ? labelPosition : undefined,
        }),
        !label && "before:content-none after:content-['']",
      )}
    >
      {label}
    </span>
  );
};

export { Divider };
