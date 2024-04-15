import React, {ComponentPropsWithoutRef, Ref} from 'react';
import {clsx} from 'clsx';
import s from './checkbox.module.scss'

export type CheckboxProps = {
    text: string
    divProps?: ComponentPropsWithoutRef<'div'>
} & ComponentPropsWithoutRef<'input'>

export const Checkbox = React.forwardRef((props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const {text, divProps, ...restProps} = props;
    const className = clsx(s.checkbox, restProps.className)
    return <div {...divProps} className={className}>
        <input {...restProps} type={'checkbox'} id={restProps.name} ref={ref}/>
        <label htmlFor={restProps.name}></label>
        <span>{text}</span>
    </div>

});