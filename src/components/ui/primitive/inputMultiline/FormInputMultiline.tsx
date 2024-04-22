import {Control, FieldPath, FieldValues, useController} from 'react-hook-form';
import {InputProps} from '../input/input.tsx';
import {InputMultiline} from './inputMultiline.tsx';

export type FormInputMultilineProps<TFieldValues extends FieldValues> = {
    errorMessage?: string | undefined,
    placeholder?: string,
    control: Control<TFieldValues>
    name: FieldPath<TFieldValues>
} & Omit<InputProps, 'id' | 'onChange' | 'value'>

export const FormInputMultiline = <TFieldValues extends FieldValues>(
    props: FormInputMultilineProps<TFieldValues>
) => {
    const {field} = useController({
        control: props.control,
        name: props.name,
    })

    return <InputMultiline
        {...props}
        {...field}
        errorMessage={props.errorMessage}
        placeholder={props.placeholder}
        id={props.name}
    />
}