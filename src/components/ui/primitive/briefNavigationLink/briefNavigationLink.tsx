import clsx from 'clsx';
import s from './briefNavigationLink.module.scss'
import {ComponentPropsWithoutRef} from 'react';
import DoneIcon from '../../../../assets/doneIcon.svg?react'

export type BriefNavigationLinkProps = {
    text: string,
    completed: boolean,
    currentSection: string | null
    sectionId: string
} & ComponentPropsWithoutRef<'a'>;

export const BriefNavigationLink = (props: BriefNavigationLinkProps) => {
    const {text, completed, className, currentSection, sectionId,...restProps} = props;
    const classNames = clsx(s.briefNavigationLink, className,
        {
            [s.active]: sectionId === currentSection,
        }
        )

    return <a  {...restProps}
               rel={'nofollow'}
               className={classNames}
    >
        <span>{text}</span>
        <div className={s.indicator}>
            {completed && <DoneIcon/>}
        </div>
    </a>
}