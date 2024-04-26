import React, {ChangeEvent, ComponentPropsWithoutRef, Ref, useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import s from './inputWithCounter.module.scss'
import {InputFile, InputFileProps} from '../inputFile/inputFile.tsx';
import {AttachedFile} from '../attachedFile/attachedFile.tsx';

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
    const [file, setFile] = useState<File | undefined>(undefined)
    const contentRef = useRef<HTMLDivElement>(null);
    const {label, required, placeholder, errorMessage, fileProps, onChange, className, ...restProps} = props;
    const isError = errorMessage && !!(errorMessage[0] || errorMessage[1]);
    const classNames = clsx(className, {[s.error]: isError})
    const underlineMessage = isError ?
        errorMessage.filter(message => message).join('. ')
        : file
            ? <AttachedFile fileName={file.name} onDeleteClick={() => setFile(undefined)}/>
            : 'Размер файла не более 5mb';

    const handleInput = () => {
        if (contentRef.current) {
            const newContent = contentRef.current.innerText;
            setContent(newContent);
            onChange(newContent);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const filesFromInput = event.target.files;
        if (filesFromInput) {
            setFile([...filesFromInput][0])
        }
    }

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
                <InputFile {...fileProps} error={isError} onChange={handleChange}/>
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