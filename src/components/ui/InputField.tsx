import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {forwardRef, useId} from 'react';
import {FieldError} from "react-hook-form";

interface InputFieldProps {
    label: string
    type: string
    error?: FieldError | undefined
    placeholder: string
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(({label, type,error, ...rest}, ref) => {
    const id = useId()
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Input  id={id} {...rest} type={type} ref={ref}/>
            <p className='text-xs text-red-600 mt-1'>{error && error.message}</p>
        </div>
    );
})

export default InputField;