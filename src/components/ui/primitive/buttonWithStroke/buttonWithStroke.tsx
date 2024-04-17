import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './buttonWithStroke.module.scss';
import Stroke from '../../../../assets/stroke.svg?react'
import {ArrowButton} from '../arrowButton/arrowButton.tsx';

export type ButtonWithStrokeProps = {
    variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'div'>

export const ButtonWithStroke = (props: ButtonWithStrokeProps) => {
    const {variant = 'primary', className, ...restProps} = props;
    const classNames = clsx(s.buttonContainer, className)
    return <div {...restProps} className={classNames}>
        <Stroke className={s.stroke}/>
        <ArrowButton size={'large'} className={s.arrowButton} variant={variant}/>
    </div>
}