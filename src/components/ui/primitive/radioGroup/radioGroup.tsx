import {forwardRef} from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'
import {RadioGroupProps} from '@radix-ui/react-radio-group'
import s from './radioGroup.module.scss'
import clsx from 'clsx';

type radioItem = {
    label: string
    value: string
}
export type RadioGroupComponentProps = {
    mainLabel: string,
    required: boolean,
    radioItems: radioItem[]
} & RadioGroupProps
export const RadioGroupComponent = forwardRef<HTMLDivElement, RadioGroupComponentProps>(
    (props: RadioGroupComponentProps, ref) => {
        const {mainLabel, required, radioItems = [], className, ...rest} = props
        const classNames = clsx(s.radioRoot, className)
        return (
            <RadioGroup.Root
                className={classNames}
                {...rest}
                ref={ref}
            >
                <span className={s.mainLabel}>
                    {mainLabel}
                    {required && <sup className={s.required}> *</sup>}
                </span>
                <div className={s.radioItems}>
                    {radioItems.length &&
                        radioItems.map(item => {
                            return (
                                <div className={s.radioItem} key={item.value}>
                                    <RadioGroup.Item
                                        className={s.radioSign}
                                        value={item.value}
                                    >
                                        <RadioGroup.Indicator className={s.radioIndicator}/>
                                    </RadioGroup.Item>
                                    <label className={s.radioLabel} htmlFor={item.value}>{item.label}</label>
                                </div>
                            )
                        })}
                </div>
            </RadioGroup.Root>
        )
    }
)