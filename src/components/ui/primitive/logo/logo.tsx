import {ComponentPropsWithoutRef, useState} from 'react';
import clsx from 'clsx';
import s from './logo.module.scss'
import LogoImg from '../../../../assets/logoImg.svg?react'
import LogoText from '../../../../assets/logoText.svg?react'

export type LogoProps = ComponentPropsWithoutRef<'div'>

export const Logo = (props: LogoProps) => {
    const [clicked, setClicked] = useState(false);
    const {className,...restProps} = props;
    const classNames = clsx(s.logo, className, {[s.clicked]: clicked})
    return <div {...restProps} className={classNames} onClick={() => setClicked(!clicked)}>
        <span className={s.mainLogoContainer}>
             <span className={s.logoImgContainer}>
                </span>
                <LogoImg className={s.logoImg}/>
        </span>
        <LogoText className={s.logoText}/>
    </div>
}