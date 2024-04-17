import clsx from 'clsx';
import s from './navigationLink.module.scss'
import {NavLink, NavLinkProps} from 'react-router-dom';

export type NavigationLinkProps = NavLinkProps;

export const NavigationLink = (props: NavigationLinkProps) => {
    const {className,...restProps} = props;
    const classNames = clsx(s.navigationLink, className)

    return <NavLink  {...restProps}
                     className={({isActive}) => isActive ? `${s.active}  ${classNames}` : classNames}/>
}