import {NavigationLink} from "../navigationLink/navigationLink.tsx";
import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from "./navbar.module.scss";


export type navItem = {
    title: string
    to: string
}
export type NavbarProps = {
    navItems: navItem[];
} & ComponentPropsWithoutRef<'nav'>

export const Navbar = (props: NavbarProps) => {
    const {navItems, ...restProps} = props;
    const navLinks = navItems.map(item => {
        return <li key={item.title}><NavigationLink title={item.title} to={item.to}
        /></li>
    })
    const className = clsx(s.navbar, restProps.className)


    return <nav {...restProps} className={className}>
        <ul>
            {navLinks}
        </ul>
    </nav>
}