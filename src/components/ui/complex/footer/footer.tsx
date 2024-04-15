import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './footer.module.scss';
import {ContactLinks} from '../contactLinks/contactLinks.tsx';
import {ButtonWithStroke} from '../../primitive/buttonWithStroke/buttonWithStroke.tsx';
import {ArrowButton} from '../../primitive/arrowButton/arrowButton.tsx';


export type FooterProps = ComponentPropsWithoutRef<'div'>

export const Footer = (props: FooterProps) => {
    const {...restProps} = props;
    const className = clsx(s.footer, restProps.className)

    return <div {...restProps} className={className}>
        <div className={s.container}>
            <ContactLinks/>
            <ButtonWithStroke variant={'secondary'}/>
            <div className={s.contacts}>
                <span>info@octoweb.ru</span><br/>
                <span>+7 905 407-78-32</span>
                <address>
                    <span>КРАСНОДАР </span>
                    <br/>
                    <span>350062, ул. Атарбекова 7, Россия </span>
                </address>
            </div>
        </div>
        <div className={s.panelUp}>
            <span className={s.up}>наверх</span>
            <ArrowButton variant={'black'} size={'small'} className={s.arrow} as={'a'} onClick={()=>window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })}
            />
            <div>
                <span>Политика конфиденциальности</span>
                <span>© OctoWeb 2023 — Все права защищены</span>
            </div>
        </div>
    </div>

}