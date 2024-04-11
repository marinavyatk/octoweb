import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './contactLink.module.scss'

export type ContactLinkProps = & ComponentPropsWithoutRef<'a'>

export const ContactLink = (props: ContactLinkProps) => {
    const {...restProps} = props;
    const className = clsx(s.contactLink, restProps.className)
    return <a {...restProps} className={className} target={'_blank'}>
    </a>
}