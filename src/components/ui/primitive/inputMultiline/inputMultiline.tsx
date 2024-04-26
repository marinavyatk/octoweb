import React, {ComponentPropsWithoutRef, Ref, useEffect, useRef, useState} from 'react';
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
    const contentRef = useRef<HTMLDivElement>(null);
    const {label, required, placeholder, errorMessage, onChange, className, ...restProps} = props;
    const classNames = clsx(className, {[s.error]: errorMessage})

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
                     ref={contentRef || ref}
                     contentEditable
                     className={s.input}
                ></div>
                {content === '' && <div className={s.placeholder}>{placeholder}</div>}
                {errorMessage && <ErrorIcon className={s.errorIcon}/>}
            </div>
        </div>
        <span className={s.errorMessage}>
                {errorMessage}
            </span>
    </div>
})