import { forwardRef, useId } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "./label";
import { Text } from "./text";
import { Textarea } from "./textarea";

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
        <Text className="mt-1 text-destructive" size="xs">
          {error && error.message}
        </Text>
      </div>
    );
  },
);

export { TextAreaField };
