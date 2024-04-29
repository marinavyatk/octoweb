import React, {ChangeEvent, ComponentPropsWithoutRef, Ref, useState} from 'react';
import clsx from 'clsx';
import s from './inputMultiline.module.scss'
import ErrorIcon from '../../../../assets/error.svg?react'

export type InputMultilineProps = {
    label: string,
    required: boolean,
    placeholder?: string,
    errorMessage?: string | undefined,
    value: string,
    onChange: (value: string) => void,
} & ComponentPropsWithoutRef<'div'>

export const InputMultiline = React.forwardRef((props: InputMultilineProps, ref: Ref<HTMLDivElement>) => {

    const [content, setContent] = useState('')
    const {label, required, placeholder, errorMessage, onChange, className, ...restProps} = props;
    const classNames = clsx(s.inputMultiline, className, {[s.error]: errorMessage})

    const handleInput = (event: ChangeEvent<HTMLDivElement>) => {
        const newContent = event.target.innerText;
        setContent(newContent);
        onChange(newContent);
    };

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
                     ref={ref}
                     contentEditable
                     className={s.input}
                     onInput={(event: ChangeEvent<HTMLDivElement>) => handleInput(event)}
                >
                </div>
                {errorMessage && <ErrorIcon className={s.errorIcon}/>}
            </div>
        </div>
        <span className={s.errorMessage}>
                {errorMessage}
            </span>
    </div>
})