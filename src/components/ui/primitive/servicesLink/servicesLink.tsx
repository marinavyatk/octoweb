import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from './servicesLink.module.scss'
import {ArrowButton} from "../arrowButton/arrowButton.tsx";
import {Tag} from "../tag/tag.tsx";

export type ServicesLinkProps = {
    number: string,
    title: string,
    tags: string[],
    href: string,
    img: string
} & ComponentPropsWithoutRef<'div'>

export const ServicesLink = (props: ServicesLinkProps) => {
    const {number, title, tags, href, img, ...restProps} = props;
    const className = clsx(s.servicesLink, restProps.className)
    const tagList = tags.map(tag => {
        return <Tag title={tag} key={tag} variant={"monochrome-secondary"}/>
    })

    return <div {...restProps} className={className}>
        <div className={s.innerContainer}>
            <div className={s.header}>
                <div className={s.text}>
                    <span className={s.number}>{number}</span>
                    <span className={s.title}>{title}</span>
                </div>
                <ArrowButton href={href} size={"medium"}/>
            </div>
            <div className={s.tagList}>
                {tagList}
            </div>
            <img src={img} alt={title}/>
        </div>
    </div>
}
