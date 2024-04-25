import React, {ComponentPropsWithoutRef, Ref, useState} from 'react';
import clsx from 'clsx';
import s from './radioCheckbox.module.scss'

export type RadioCheckboxProps = {
    text: string,
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const RadioCheckbox = React.forwardRef((props: RadioCheckboxProps, ref: Ref<HTMLInputElement>) => {
    const [checked, setChecked] = useState(false)
    const {text, divProps, className, ...restProps} = props;
    const classNames = clsx(s.radioCheckboxContainer, className,
        {[s.checked]: checked}
    )

    return <div className={classNames} {...divProps} onClick={()=>setChecked(!checked)}>
        <input type={'radio'}
               id={restProps?.name}
               name={restProps?.name}
               className={s.inputFile}
               {...restProps}
               ref={ref}
        />
        <label htmlFor={restProps?.name}>
            {text}
        </label>
    </div>
});