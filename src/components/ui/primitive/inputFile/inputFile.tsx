import React, {ComponentPropsWithoutRef, LegacyRef} from 'react';
import {clsx} from 'clsx';
import s from './inputFile.module.scss'
import AttachIcon from '../../../../assets/attach.svg?react'
import ErrorIcon from '../../../../assets/error.svg?react'


export type InputFileProps = {
    errorMessage?: string
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const InputFile = React.forwardRef((props: InputFileProps, ref: LegacyRef<HTMLInputElement>) => {
    const {errorMessage, divProps, ...restProps} = props;
    const className = clsx(s.fileInputContainer, restProps.className, {[s.error]: errorMessage})

    return <div className={className} {...divProps}>
        <label htmlFor={restProps?.name}>
            <input type={'file'}
                   id={restProps?.name}
                   name={restProps?.name}
                   className={s.inputFile}
                   {...restProps}
                   ref={ref}/>
            {errorMessage ? <ErrorIcon/> : <AttachIcon/>}
        </label>
    </div>

});