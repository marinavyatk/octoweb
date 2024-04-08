import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './header.module.scss';
import {Logo} from '../../primitive/logo/logo.tsx';
import {Navbar} from '../../primitive/navbar/navbar.tsx';
import {ContactButton} from '../../primitive/contactButton/contactButton.tsx';

export type HeaderProps = ComponentPropsWithoutRef<'header'>

export const Header = (props: HeaderProps) => {
    const {...restProps} = props;
    const className = clsx(s.header, restProps.className)
    return <header {...restProps} className={className}>
        <Logo/>
        <div className={s.rightBlock}>
            <Navbar/>
            <ContactButton/>
        </div>

    </header>
}