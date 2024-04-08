import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from "./servicesLinksList.module.scss";
import {ServicesLink} from "../../primitive/servicesLink/servicesLink.tsx";
import Botanica from '../../../../assets/webp/link-botanica.webp'
import Ekvadrat from '../../../../assets/webp/link-e-kvadrat.webp'
import Smxtream from '../../../../assets/webp/case-smxtream.webp'
import Demarko from '../../../../assets/webp/link-de-marko.webp'

export type ServicesLinksListProps = ComponentPropsWithoutRef<'div'>

export const ServicesLinksList = (props: ServicesLinksListProps) => {
    const {...restProps} = props;
    const className = clsx(s.list, restProps.className)
    const linksData = [
        {
            number: '01',
            title: 'Разработка Веб-Сайтов',
            tags: ['Промо-сайт', 'Лендинг', 'Многостраничный сайт', 'Сайт-каталог', 'Интернет-магазин'],
            href: '#', //change later
            img: Botanica
        },
        {
            number: '02',
            title: 'Интернет-Маркетинг',
            tags: ['Контентное продвижение', 'Контекстная реклама', 'Таргетированная реклама', 'SEO'],
            href: '#', //change later
            img: Ekvadrat
        },
        {
            number: '03',
            title: 'Поддержка и Развитие',
            tags: ['Техническая поддержка', 'Контент поддержка', 'Маркетинговая поддержка'],
            href: '#', //change later
            img: Smxtream
        },
        {
            number: '04',
            title: 'Дополнительные Услуги',
            tags: ['Аудит существующего сайта', 'Упаковка франшиз'],
            href: '#', //change later
            img: Demarko
        },
    ]

    const linkList = linksData.map(link => {
        return <ServicesLink number={link.number} title={link.title} tags={link.tags} href={link.href} img={link.img} key={link.number}/>
    })


    return <div {...restProps} className={className}>
        {linkList}
    </div>

}