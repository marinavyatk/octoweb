import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './radioCheckboxGroup.module.scss'
import {RadioCheckbox} from '../radioCheckbox/radioCheckbox.tsx';

export type checkboxItem = { label: string, value: string, rest: ComponentPropsWithoutRef<'input'> }

export type RadioCheckboxGroupProps = {
    errorMessage?: string,
    mainLabel: string,
    required: boolean
    checkboxItems: checkboxItem[]
} & ComponentPropsWithoutRef<'div'>

export const RadioCheckboxGroup = (props: RadioCheckboxGroupProps) => {
        const {mainLabel, required, checkboxItems, errorMessage, className, ...restProps} = props;
        const classNames = clsx(s.radioCheckboxGroupContainer, className)

        const radioCheckboxes = checkboxItems.map(item => {
            return <RadioCheckbox label={item.label}
                                  {...item.rest}
                                  value={item.value}
                                  key={item.value}
            />
        })

        return <div className={classNames} {...restProps} >
            <span className={s.mainLabel}>
                 {mainLabel}
                {required && <sup className={s.required}> *</sup>}
            </span>
            <div className={s.answerVariants}>
                {radioCheckboxes}
            </div>
            {errorMessage && <div className={s.error}>{errorMessage}</div>}
        </div>
    }
;


