import { Label } from "@radix-ui/react-label";
import { forwardRef, useId } from "react";
import { FieldError } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

interface InputFieldProps {
  label: string;
  type: string;
  error?: FieldError | undefined;
  placeholder: string;
}

const TextAreaField = forwardRef<HTMLTextAreaElement, InputFieldProps>(
  ({ label, error, ...rest }, ref) => {
    const id = useId();
    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Textarea id={id} {...rest} ref={ref} />
        <p className="mt-1 text-xs text-red-600">{error && error.message}</p>
      </div>
    );
  },
);

export { TextAreaField };
