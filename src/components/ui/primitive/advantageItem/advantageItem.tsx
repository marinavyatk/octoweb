import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './advantageItem.module.scss'


export type AdvantageItemProps = {
    number: string,
    description: string,
} & ComponentPropsWithoutRef<'div'>

export const AdvantageItem = (props: AdvantageItemProps) => {
    const {number, description, ...restProps} = props;
    const className = clsx(s.item, restProps.className)


    return <div {...restProps} className={className}>
        <span className={s.number}>{number}</span> <br/>
        <span className={s.description}>{description}</span>
    </div>
}