import React, {ComponentPropsWithoutRef, ElementType, LegacyRef} from 'react';
import {clsx} from 'clsx';
import s from './input.module.scss'
import AttachIcon from '../../../../assets/attach.svg?react'
import ErrorIcon from '../../../../assets/error.svg?react'


export type InputProps<T = 'input' | 'textarea'> = {
    as: T,
    label: string,
    required: boolean,
    errorMessage?: string
    divProps?: ComponentPropsWithoutRef<'div'>,
    inputProps?: ComponentPropsWithoutRef<'input'>,
}

// export const InputWithCounter = <T extends ElementType>(props: InputProps<T>) => {
//     const {as: Component = 'input', label, required, divProps, inputProps} = props;
//     const className = clsx(s.inputContainer, divProps?.className)
//
//     return <div className={className} {...divProps}>
//         <label className={s.mainLabel} htmlFor={inputProps?.name}>
//             {label}
//             {required && <sup className={s.required}> *</sup>}
//         </label>
//         <div className={s.position}>
//             <Component {...inputProps} className={s.input} name={inputProps?.name}>
//
//
//             </Component>
//
//                 <div className={s.fileInputContainer}>
//                     <label htmlFor={inputProps?.name}>
//                         <input type={'file'} id={inputProps?.name} {...inputProps} className={s.inputFile}/>
//                         <AttachIcon/>
//                     </label>
//                 </div>
//             </div>
//
//
//
//     </div>
//
// }


export const Input = React.forwardRef(<T extends ElementType>(props: InputProps<T>, ref: LegacyRef<HTMLInputElement>) => {
    const {as: Component = 'input', label, required, errorMessage, divProps, inputProps} = props;
    const className = clsx(s.inputContainer, divProps?.className, {[s.error]: errorMessage})

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
                    <input type={'file'} id={inputProps?.name} {...inputProps} className={s.inputFile} ref={ref}/>
                    {errorMessage? <ErrorIcon/> : <AttachIcon/>}
                </label>
            </div>
        </div>


    </div>
})