import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

const fieldsetVariant = cva("rounded-md border", {
  variants: {
    variant: {
      default: "border-forground",
      destructive: "border border-destructive/40 [&>legend]:text-destructive",
      info: "border border-info/40 [&>legend]:text-info",
      warning: "border border-warning/40 [&>legend]:text-warning",
      success: "border border-succes/40 [&>legend]:text-succes",
    },
    type: {
      default: {},
      filled: {},
      unstyled: {},
    },
  },
  compoundVariants: [
    {
      variant: "default",
      type: "filled",
      class: "dark:bg-slate-900 bg-slate-100",
    },
    {
      variant: "destructive",
      type: "filled",
      class: "border-destructive/25 bg-destructive/25",
    },
    {
      variant: "info",
      type: "filled",
      class: "border-info/25 bg-info/25",
    },
    {
      variant: "default",
      type: "unstyled",
      class: "dark:bg-none bg-none border-none px-0 [&>legend]:px-0",
    },
  ],
  defaultVariants: {
    variant: "default",
    type: "default",
  },
});

interface FieldsetType extends VariantProps<typeof fieldsetVariant> {
  label?: string;
  className?: string;
  children: ReactNode;
}

const Fieldset = ({
  variant,
  label,
  className,
  children,
  type,
}: FieldsetType) => {
  return (
    <fieldset
      className={cn("p-5", fieldsetVariant({ className, variant, type }))}
    >
      <legend className={cn("px-1")}>{label}</legend>
      {children}
    </fieldset>
  );
};

export { Fieldset };
