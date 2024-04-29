import {Control, FieldPath, FieldValues, useController} from 'react-hook-form';
import {InputMultiline, InputMultilineProps} from './inputMultiline.tsx';

export type FormInputMultilineProps<TFieldValues extends FieldValues> = {
    // errorMessage?: string | undefined,
    // placeholder?: string,
    control: Control<TFieldValues>
    name: FieldPath<TFieldValues>
} & Omit<InputMultilineProps, 'id' | 'onChange' | 'value'>

export const FormInputMultiline = <TFieldValues extends FieldValues>(
    props: FormInputMultilineProps<TFieldValues>
) => {
    const {field, fieldState: {error}} = useController({
        control: props.control,
        name: props.name,
    })


    // console.log(error)
    return <InputMultiline
        {...props}
        {...field}

        errorMessage={error?.message}
        // placeholder={props.placeholder}
        id={props.name}
    />
}