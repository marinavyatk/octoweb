import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './filterButton.module.scss'


export type FilterButtonProps = {
    active: boolean
} & ComponentPropsWithoutRef<'button'>

export const FilterButton = (props: FilterButtonProps) => {
    const {active, className, ...restProps} = props;
    const classNames = clsx(s.filterButton, className, {[s.active]: active})
    return <button  {...restProps} className={classNames}>
    </button>
}