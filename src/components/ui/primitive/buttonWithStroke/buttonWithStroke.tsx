import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './buttonWithStroke.module.scss';
import Stroke from '../../../../assets/stroke.svg?react'
import {ArrowButton} from '../arrowButton/arrowButton.tsx';

export type ButtonWithStrokeProps = ComponentPropsWithoutRef<'div'>

export const ButtonWithStroke = (props: ButtonWithStrokeProps) => {
    const {...restProps} = props;
    const className = clsx(s.buttonContainer, restProps.className)
    return <div {...restProps} className={className}>
        <Stroke className={s.stroke}/>
        <ArrowButton size={"large"} className={s.arrowButton}/>
    </div>
}