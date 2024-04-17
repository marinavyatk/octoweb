import React, {ComponentPropsWithoutRef, LegacyRef, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './inputWithDiv.module.scss'
import AttachIcon from '../../../../assets/attach.svg?react'
import ErrorIcon from '../../../../assets/error.svg?react'

export type InputWithDivProps = {
    label: string,
    required: boolean,
    errorMessage?: string
    inputProps?: ComponentPropsWithoutRef<'input'>,
} & ComponentPropsWithoutRef<'div'>

export const InputWithDiv = React.forwardRef((props: InputWithDivProps, ref: LegacyRef<HTMLDivElement>) => {
    const [content, setContent] = useState('')
    const contentRef = useRef<HTMLDivElement>(null);
    const {label, required, errorMessage, inputProps, className, ...restProps} = props;
    const classNames = clsx(
        s.inputContainer,
        className,
        {[s.error]: errorMessage})

    const handleInput = () => {
        if (contentRef.current) {
            const selection = window.getSelection();
            const range = selection?.getRangeAt(0);
            setContent(contentRef.current.innerText);
            if (range) {
                const offset = range.endOffset;
                selection?.removeAllRanges();
                selection?.addRange(range);
                selection?.collapse(range.startContainer, offset);
            }
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
        <label className={s.mainLabel}
               htmlFor={inputProps?.name}
        >
            {label}
            {required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>


            <div
                // ref={contentRef}
                contentEditable
                className={s.input}
                ref={ref}
            >

                {content}
            </div>


            <div className={s.fileInputContainer}>
                <label
                    htmlFor={inputProps?.name}
                >
                    <input type={'file'} id={inputProps?.name} className={s.inputFile}/>
                    {errorMessage ? <ErrorIcon/> : <AttachIcon/>}
                </label>
            </div>
        </div>
    </div>
})