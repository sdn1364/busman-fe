import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { forwardRef, useId } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  type: string;
  error?: FieldError | undefined;
  placeholder?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, error, ...rest }, ref) => {
    const id = useId();
    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} {...rest} type={type} ref={ref} />
        <p className="mt-1 text-xs text-red-600">{error && error.message}</p>
      </div>
    );
  },
);

export { InputField };
