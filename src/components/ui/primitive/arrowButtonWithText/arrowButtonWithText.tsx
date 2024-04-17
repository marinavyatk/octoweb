import {ArrowButton, ArrowButtonProps} from '../arrowButton/arrowButton.tsx';
import clsx from 'clsx';
import s from './arrowButtonWithText.module.scss';
import {ComponentPropsWithoutRef, ElementType} from 'react';

export type ArrowButtonWithTextProps<T extends ElementType> = {
    variant?: 'colored' | 'dark',
    text: string,
    buttonProps?: ArrowButtonProps<T>,
} & ComponentPropsWithoutRef<'div'>
export const ArrowButtonWithText = <T extends ElementType>(props: ArrowButtonWithTextProps<T>) => {
    const {variant = 'colored', text, buttonProps, className, ...restProps} = props;
    const classNames = clsx(s.arrowButtonWithText, className,
        {[s.colored]: variant === 'colored'},
        {[s.dark]: variant === 'dark'}
    );
    return <div {...restProps} className={classNames}>
        <span>
            {text}
        </span>

        <div className={s.background}></div>
        <ArrowButton
            variant={'primary'}
            size={'medium'}
            outline={variant === 'colored' ? 'outline-colored' : 'outline-monochrome'}
            {...(buttonProps as ArrowButtonProps<T>)}
            className={s.arrow}

        />
    </div>
}