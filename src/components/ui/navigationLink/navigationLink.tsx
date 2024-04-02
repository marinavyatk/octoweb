import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from "./navigationLink.module.scss"
import {NavLink, NavLinkProps} from "react-router-dom";

export type NavigationLinkProps = {
    title: string
} & ComponentPropsWithoutRef<'a'> & NavLinkProps

export const NavigationLink = (props: NavigationLinkProps) => {
    const {title, ...restProps} = props;
    const className = clsx(s.navigationLink, restProps.className)

    return <NavLink  {...restProps}
                     className={({isActive}) => isActive ? `${s.active}  ${className}` : className}>
        {title}
    </NavLink>
}