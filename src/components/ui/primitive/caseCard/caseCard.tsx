import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from './caseCard.module.scss'
import {Tag} from "../tag/tag.tsx";

export type CaseCardProps = {
    title: string,
    tags: string[],
    img: string,
    size: "small" | "medium" | "large" | "extraLarge",
    caption: string
} & ComponentPropsWithoutRef<'figure'>

export const CaseCard = (props: CaseCardProps) => {
    const {title, tags, img, size, caption, className, ...restProps} = props;
    const classNames = clsx(s.card, className,
        {
            [s.small]: size === "small",
            [s.medium]: size === "medium",
            [s.large]: size === "large",
            [s.extraLarge]: size === "extraLarge",
        })
    const tagList = tags.map(tag => {
        return <Tag title={tag} variant={"colored"} key={tag}/>
    })

    return <figure {...restProps} className={classNames}>
        <Tag title={title} variant={"monochrome-primary"} className={s.title}/>
        <img src={img} alt={caption}/>
        <div className={s.tagList}>
            {tagList}
        </div>
        <figcaption>{caption}</figcaption>
    </figure>
}