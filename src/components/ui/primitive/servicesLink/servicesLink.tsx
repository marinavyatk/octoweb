import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './servicesLink.module.scss'
import {ArrowButton} from '../arrowButton/arrowButton.tsx';
import {Tag} from '../tag/tag.tsx';

export type ServicesLinkProps = {
    number: string,
    header: string,
    tags: string[],
    href: string,
    img: string
} & ComponentPropsWithoutRef<'div'>

export const ServicesLink = (props: ServicesLinkProps) => {
    const {number, header, tags, href, img, className, ...restProps} = props;
    const classNames = clsx(s.servicesLink, className)
    const tagList = tags.map(tag => {
        return <Tag key={tag} variant={'monochrome-secondary'}>{tag}</Tag>
    })

    return <div {...restProps} className={classNames}>
        <div className={s.innerContainer}>
            <div className={s.header}>
                <div className={s.text}>
                    <span className={s.number}>{number}</span>
                    <h3 className={s.header}>{header}</h3>
                </div>
                <ArrowButton href={href}/>
            </div>
            <div className={s.tagList}>
                {tagList}
            </div>
            <img src={img} alt={header}/>
        </div>
    </div>
}
