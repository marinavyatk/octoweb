import clsx from 'clsx';
import s from './briefNavigationLink.module.scss'
import {ComponentPropsWithoutRef} from 'react';
import DoneIcon from '../../../../assets/doneIcon.svg?react'
import {NavLink} from 'react-router-dom';

export type BriefNavigationLinkProps = {
    text: string,
    completed: boolean
} & ComponentPropsWithoutRef<'a'>;

export const BriefNavigationLink = (props: BriefNavigationLinkProps) => {
    const {text, completed, className, ...restProps} = props;
    const classNames = clsx(s.briefNavigationLink, className,
        // {
        //     [s.active]: restProps.href === location.hash,
        // }
        )

    // useEffect(()=>{}, [location.hash]) //temp
    return <NavLink to={restProps.href as string} {...restProps}
               rel={'nofollow'}
               className={classNames}
    >
        <span>{text}</span>
        <div className={s.indicator}>
            {completed && <DoneIcon/>}
        </div>
    </NavLink>
}