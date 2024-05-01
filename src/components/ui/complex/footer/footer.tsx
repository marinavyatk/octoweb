import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './footer.module.scss';
import {ContactLinks} from '../contactLinks/contactLinks.tsx';
import {ButtonWithStroke} from '../../primitive/buttonWithStroke/buttonWithStroke.tsx';
import {ArrowNavigationButton} from '../../primitive/arrowNavigationButton/arrowNavigationButton.tsx';

export type FooterProps = ComponentPropsWithoutRef<'div'>

export const Footer = (props: FooterProps) => {
    const {className, ...restProps} = props;
    const classNames = clsx(s.footer, className)

    return <div {...restProps} className={classNames}>
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
            <ArrowNavigationButton variant={'up'}
                                   className={s.arrow}
                                   // as={'a'}
                                   // href={'#top'}
                                   onClick={() => window.scrollTo({
                                       top: 0,
                                       left: 0,
                                       behavior: 'smooth'
                                   })}
            />
            <div className={s.bottomCaption}>
                <span>Политика конфиденциальности</span>
                <span>© OctoWeb 2023 — Все права защищены</span>
            </div>
        </div>
    </div>

}