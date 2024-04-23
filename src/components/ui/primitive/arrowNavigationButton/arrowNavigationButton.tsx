import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './arrowNavigationButton.module.scss';
import ArrowIcon from '../../../../assets/arrow.svg?react'

export type ArrowNavigationButtonProps = {
    variant?: 'up' | 'next' | 'previous'
} & ComponentPropsWithoutRef<'button'>

export const ArrowNavigationButton = (props: ArrowNavigationButtonProps) => {
    const {variant = 'primary', className, ...restProps} = props;
    const classNames = clsx(s.navigationButton, className)
    const arrowClassNames = clsx(s.buttonContainer, className, {
        [s.up]: variant === 'up',
        [s.next]: variant === 'next',
        [s.previous]: variant === 'previous'
    })

    return <button {...restProps} className={classNames}>
        {variant === 'up' && <span className={s.upCaption}>Наверх</span>}
        <div className={arrowClassNames}>
            <ArrowIcon/>
        </div>
    </button>
}