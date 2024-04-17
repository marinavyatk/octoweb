import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './contactLinks.module.scss'
import {ContactLink} from '../../primitive/contactLink/contactLink.tsx';
import TelegramIcon from '../../../../assets/telegram.svg?react';
import InstagramIcon from '../../../../assets/instagram.svg?react';
import WhatsAppIcon from '../../../../assets/whatsup.svg?react';
import VKIcon from '../../../../assets/vk.svg?react';

export type ContactLinksProps = ComponentPropsWithoutRef<'div'>

export const ContactLinks = (props: ContactLinksProps) => {
    const {className, ...restProps} = props;
    const classNames = clsx(s.contactLinks, className)


    return <div {...restProps} className={classNames}>
        <ContactLink href={'https://web.telegram.org/a/'}><TelegramIcon/> Telegram</ContactLink>
        <ContactLink href={'#'}><InstagramIcon/> Instagram</ContactLink>
        <ContactLink href={'#'}><WhatsAppIcon/> WhatsApp</ContactLink>
        <ContactLink href={'#'}><VKIcon/> VK group</ContactLink>
    </div>
}