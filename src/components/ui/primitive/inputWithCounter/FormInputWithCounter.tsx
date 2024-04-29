import {Control, FieldPath, FieldValues, useController} from 'react-hook-form';
import {InputProps, InputWithCounter} from './inputWithCounter.tsx';

export type FormInputWithCounterProps<TFieldValues extends FieldValues> = {
    // errorMessage?: (string | undefined)[],
    // placeholder?: string,
    control: Control<TFieldValues>
    name: FieldPath<TFieldValues>
} & Omit<InputProps, 'id' | 'onChange' | 'value'>

export const FormInputWithCounter = <TFieldValues extends FieldValues>(
    props: FormInputWithCounterProps<TFieldValues>
) => {
    const {field} = useController({
        control: props.control,
        name: props.name,
    })

    return <InputWithCounter
        {...props}
        {...field}
        // errorMessage={props.errorMessage}
        // placeholder={props.placeholder}
        // id={props.name}
    />
}