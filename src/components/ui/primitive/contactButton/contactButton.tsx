import {ArrowButton} from '../arrowButton/arrowButton.tsx';
import clsx from 'clsx';
import s from './contactButton.module.scss';
import {ComponentPropsWithoutRef} from 'react';

export type ContactButtonProps = ComponentPropsWithoutRef<'div'>
export const ContactButton = (props: ContactButtonProps) => {
    const {...restProps} = props;
    const className = clsx(s.contactButton, restProps.className)
    return <div {...restProps} className={className}>
        <span>
            ОБСУДИТЬ ПРОЕКТ
        </span>

        <div className={s.background}></div>
        <ArrowButton variant={'secondary'} className={s.arrow}/>
    </div>
}