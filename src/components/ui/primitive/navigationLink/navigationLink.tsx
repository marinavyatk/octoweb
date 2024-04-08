import {clsx} from 'clsx';
import s from './navigationLink.module.scss'
import {NavLink, NavLinkProps} from 'react-router-dom';

export type NavigationLinkProps = NavLinkProps;

export const NavigationLink = (props: NavigationLinkProps) => {
    const {...restProps} = props;
    const className = clsx(s.navigationLink, restProps.className)

    return <NavLink  {...restProps}
                     className={({isActive}) => isActive ? `${s.active}  ${className}` : className}/>
}