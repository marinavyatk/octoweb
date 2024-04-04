import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from './contactLink.module.scss'

export type ContactLinkProps = {
    icon: string,
    title: string
} & ComponentPropsWithoutRef<'a'>
export const ContactLink = (props: ContactLinkProps) => {
    const {icon, title, ...restProps} = props;
    const className = clsx(s.contactLink, restProps.className)
    return <a {...restProps} className={className}>
        <img src={icon} alt={`${title} icon`}/>
        {title}
    </a>
}