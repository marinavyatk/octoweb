import React, {ComponentPropsWithoutRef, Ref, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './inputWithCounter.module.scss'
import {Control, FieldPath, FieldValues, useController} from 'react-hook-form'
import {InputFile, InputFileProps} from '../inputFile/inputFile.tsx';

export type InputProps = {
    label: string,
    required: boolean,
    placeholder?: string,
    errorMessage?: (string | undefined)[],
    value: string,
    onChange: (value: string) => void,
    fileProps?: InputFileProps,
} & ComponentPropsWithoutRef<'div'>

export const InputWithCounter = React.forwardRef((props: InputProps, ref: Ref<HTMLDivElement>) => {

    const [content, setContent] = useState('')
    const contentRef = useRef<HTMLDivElement>(null);
    const {label, required, placeholder, errorMessage, fileProps, onChange, className, ...restProps} = props;
    const isError = errorMessage && !!(errorMessage[0] || errorMessage[1]);
    const classNames = clsx(className, {[s.error]: isError})
    const underlineMessage = isError ?
        Array.isArray(errorMessage) ? errorMessage.filter(message => message).join('. ') : 'это не массив'
        : 'Размер файла не более 5mb';

    const handleInput = () => {
        if (contentRef.current) {
            const newContent = contentRef.current.innerText;
            setContent(newContent);
            onChange(newContent);
        }
    };

    useEffect(() => {
        const contentDiv = contentRef.current;
        if (contentDiv) {
            contentDiv.addEventListener('input', handleInput);
        }
        return () => {
            if (contentDiv) {
                contentDiv.removeEventListener('input', handleInput);
            }
        };
    }, []);

    return <div className={classNames} {...restProps}>
        <div className={s.inputContainer}>
            <label className={s.mainLabel}
                   htmlFor={restProps?.id}
            >
                {label}
                {required && <sup className={s.required}> *</sup>}
            </label>
            <div className={s.position}>
                <div id={restProps?.id}
                     data-placeholder={placeholder}
                     ref={contentRef}
                     contentEditable
                     className={s.input}
                ></div>
                {content === '' && <div className={s.placeholder}>{placeholder}</div>}
                <InputFile {...fileProps} error={isError}/>
            </div>
        </div>
        <div className={s.underText}>
            <span>{content.length}/500</span>
            <span className={s.underlineMessage}>
                {underlineMessage}
            </span>
        </div>
    </div>
})

export type FormInputWithCounterProps<TFieldValues extends FieldValues> = {
    errorMessage?: (string | undefined)[],
    placeholder?: string,
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
        errorMessage={props.errorMessage}
        placeholder={props.placeholder}
        id={props.name}/>
}