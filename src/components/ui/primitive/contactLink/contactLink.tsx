import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './contactLink.module.scss'

export type ContactLinkProps = & ComponentPropsWithoutRef<'a'>

export const ContactLink = (props: ContactLinkProps) => {
    const {className,...restProps} = props;
    const classNames = clsx(s.contactLink, className)
    return <a {...restProps} className={classNames} target={'_blank'}>
    </a>
}