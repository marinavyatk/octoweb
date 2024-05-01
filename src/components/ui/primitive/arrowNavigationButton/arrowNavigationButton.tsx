import {ComponentPropsWithoutRef, ElementType} from 'react';
import clsx from 'clsx';
import s from './arrowNavigationButton.module.scss';
import ArrowIcon from '../../../../assets/arrow.svg?react'

export type ArrowNavigationButtonProps<T extends ElementType> = {
    as?: T,
    variant?: 'up' | 'next' | 'previous'
} & ComponentPropsWithoutRef<T>

export const ArrowNavigationButton = <T extends ElementType = 'button'>(props: ArrowNavigationButtonProps<T>) => {
    const {as: Component = 'button', variant = 'primary', className, ...restProps} = props;
    const classNames = clsx(s.navigationButton, className)
    const arrowClassNames = clsx(s.buttonContainer, className, {
        [s.up]: variant === 'up',
        [s.next]: variant === 'next',
        [s.previous]: variant === 'previous'
    })

    return <Component {...restProps} className={classNames}>
        {variant === 'up' && <span className={s.upCaption}>Наверх</span>}
        <div className={arrowClassNames}>
            <ArrowIcon/>
        </div>
    </Component>
}