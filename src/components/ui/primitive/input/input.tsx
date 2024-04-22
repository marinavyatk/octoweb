import React, {ComponentPropsWithoutRef, Ref} from 'react';
import clsx from 'clsx';
import s from './input.module.scss'
import ErrorIcon from '../../../../assets/error.svg?react'

export type InputProps = {
    label: string,
    required: boolean
    errorMessage?: string | undefined,
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {required, label, errorMessage, divProps, className, ...restProps} = props;
    const classNames = clsx(s.inputContainer, className, {[s.error]: errorMessage})

    return <div className={classNames} {...divProps}>
        <label className={s.mainLabel} htmlFor={restProps?.name}>
            {label}
            {required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>
            <input {...restProps} className={s.input} name={restProps?.name} ref={ref}/>
            {errorMessage && <ErrorIcon className={s.errorIcon}/>}
        </div>
        {errorMessage &&
            <span className={s.errorMessage}>{errorMessage}</span>
        }
    </div>
});
