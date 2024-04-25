import React, {ChangeEvent, ComponentPropsWithoutRef, LegacyRef, useState} from 'react';
import clsx from 'clsx';
import s from './inputAdditionalFile.module.scss'
import LoadIcon from '../../../../assets/loadIcon.svg?react'
import {AttachedFile} from '../attachedFile/attachedFile.tsx';

export type InputAdditionalFileProps = {
    label: string,
    divProps?: ComponentPropsWithoutRef<'div'>,
} & ComponentPropsWithoutRef<'input'>

export const InputAdditionalFile = React.forwardRef((props: InputAdditionalFileProps, ref: LegacyRef<HTMLInputElement>) => {
    const {label, divProps, className, ...restProps} = props;
    const classNames = clsx(s.inputContainer, className)
    const [files, setFiles] = useState<File[]>([])

    const handleDelete = (fileName: string) => {
        const updatedFiles = files.filter(file => file.name !== fileName)
        setFiles(updatedFiles);
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const filesFromInput = event.target.files;
        if (filesFromInput) {
            setFiles([...files, ...filesFromInput])
        }
    }
    const attachedFiles = files.map(file => {
        return <AttachedFile fileName={file.name} onDeleteClick={() => handleDelete(file.name)} key={file.name}/>
    })

    return <div className={classNames} {...divProps} >
        <span className={s.label}>{label}</span>
        {attachedFiles.length > 0 && <div className={s.attachedFiles}>
            {attachedFiles}
        </div>}
        <div className={s.inputAdditionalFile}>
            <input type={'file'}
                   multiple
                id={restProps?.name}
                   name={restProps?.name}
                   className={s.inputFile}
                   {...restProps}
                   ref={ref}
                   onChange={handleChange}
            />
            <label htmlFor={restProps?.name}>
                <LoadIcon/>
                Загрузить
            </label>
        </div>

    </div>
});