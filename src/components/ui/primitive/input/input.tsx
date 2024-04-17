import React, {ComponentPropsWithoutRef, Ref} from 'react';
import clsx from 'clsx';
import s from './input.module.scss'
import {InputFile, InputFileProps} from '../inputFile/inputFile.tsx';

export type InputProps = {
    label: string,
    errorMessage?: (string | undefined) [],
    fileProps?: InputFileProps,
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {label, errorMessage, fileProps, divProps, className, ...restProps} = props;
    const isError = errorMessage && !!(errorMessage[0] || errorMessage[1]);
    const classNames = clsx(s.inputContainer, className, {[s.error]: isError})

    return <div className={classNames} {...divProps}>
        <label className={s.mainLabel} htmlFor={restProps?.name}>
            {label}
            {restProps.required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>
            <input {...restProps} className={s.input} name={restProps?.name} ref={ref}/>
            <InputFile {...fileProps} error={isError}/>
        </div>
        {isError &&
            <span className={s.errorMessage}>{errorMessage && errorMessage.filter(message => message).join('. ')}</span>
        }
    </div>
});
