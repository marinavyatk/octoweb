import clsx from 'clsx';
import s from './arrowLinkWithText.module.scss'
import {ComponentPropsWithoutRef} from 'react';
import ArrowIcon from '../../../../assets/arrow.svg?react'
import {Link} from 'react-router-dom';

export type ArrowLinkWithTextProps = {
    variant?: 'colored' | 'dark',
    text: string,
    to?: string
} & ComponentPropsWithoutRef<'a'>

export const ArrowLinkWithText = (props: ArrowLinkWithTextProps) => {
    const {variant = 'colored', text, to, className, ...restProps} = props;
    const classNames = clsx(s.arrowButtonWithText, className,
        {[s.colored]: variant === 'colored'},
        {[s.dark]: variant === 'dark'}
    );
    const Component = to ? Link : 'a';

    return <Component to={to ? to : '/'} {...restProps} className={classNames} rel={'nofollow'}>
        <span>
            {text}
        </span>
        <div className={s.background}></div>
        <div className={s.arrow}>
            <ArrowIcon/>
        </div>
    </Component>
}