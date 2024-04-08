import {ComponentPropsWithoutRef, ElementType} from 'react';
import {clsx} from 'clsx';
import s from './input.module.scss'
import AttachIcon from '../../../../assets/attach.svg?react'


export type InputProps<T = 'input' | 'textarea'> = {
    as: T,
    label: string,
    required: boolean,
    divProps?: ComponentPropsWithoutRef<'div'>,
    inputProps?: ComponentPropsWithoutRef<'input'>,
}

export const Input = <T extends ElementType>(props: InputProps<T>) => {
    const {as: Component = 'input', label, required, divProps, inputProps} = props;
    const className = clsx(s.inputContainer, divProps?.className)

    return <div className={className} {...divProps}>
        <label className={s.mainLabel} htmlFor={inputProps?.name}>
            {label}
            {required && <sup className={s.required}> *</sup>}
        </label>
        <div className={s.position}>
            <Component {...inputProps} className={s.input} name={inputProps?.name}>


            </Component>

                <div className={s.fileInputContainer}>
                    <label htmlFor={inputProps?.name}>
                        <input type={'file'} id={inputProps?.name} {...inputProps} className={s.inputFile}/>
                        <AttachIcon/>
                    </label>
                </div>
            </div>



    </div>

}