import React, {ComponentPropsWithoutRef, Ref} from 'react';
import {clsx} from 'clsx';
import s from './input.module.scss'
import {InputFile} from '../inputFile/inputFile.tsx';


export type InputProps = {
    label: string,
    required: boolean,
    errorMessage?: string,
    fileProps?: ComponentPropsWithoutRef<'input'>,
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const Input = React.forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {label, required, errorMessage, fileProps, divProps, ...restProps} = props;
    const className = clsx(s.inputContainer, restProps.className, {[s.error]: errorMessage})

    return <div className={className} {...divProps}>
        <label className={s.mainLabel} htmlFor={restProps?.name}>
            {label}
            {required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>
            <input {...restProps} className={s.input} name={restProps?.name} ref={ref}/>
            <InputFile {...fileProps}/>
        </div>
    </div>
});
