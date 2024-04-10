import {ArrowButton} from '../arrowButton/arrowButton.tsx';
import clsx from 'clsx';
import s from './arrowButtonWithText.module.scss';
import {ComponentPropsWithoutRef} from 'react';

export type ArrowButtonWithTextProps = {
    variant?: 'colored' | 'dark',
    text: string
} & ComponentPropsWithoutRef<'div'>
export const ArrowButtonWithText = (props: ArrowButtonWithTextProps) => {
    const {variant = 'colored', text, ...restProps} = props;
    const className = clsx(s.arrowButtonWithText, restProps.className,
        {[s.colored]: variant === 'colored'},
        {[s.dark]: variant === 'dark'}
    );
    return <div {...restProps} className={className}>
        <span>
            {text}
        </span>

        <div className={s.background}></div>
        <ArrowButton variant={'primary'} size={"medium"} outline={variant === 'colored' ? 'outline-colored' : 'outline-monochrome'}
                     className={s.arrow}/>
    </div>
}