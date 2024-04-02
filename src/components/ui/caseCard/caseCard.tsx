import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from './caseCard.module.scss'
import {Tag} from "../tag/tag.tsx";

export type imageType = {
    png1x?: string,
    png2x?: string,
    png3x?: string,
    webp1x?: string
    webp2x?: string
    webp3x?: string
}
export type CaseCardProps = {
    title: string,
    tags: string[],
    img: imageType,
    size: "small" | "medium" | "large" | "extraLarge",
    caption: string
} & ComponentPropsWithoutRef<'figure'>

export const CaseCard = (props: CaseCardProps) => {
    const {title, tags, img, size, caption, ...resrProps} = props;
    const className = clsx(s.card, resrProps.className,
        {
            [s.small]: size === "small",
            [s.medium]: size === "medium",
            [s.large]: size === "large",
            [s.extraLarge]: size === "extraLarge",
        })
    const tagsList = tags.map(tag => {
        return <Tag title={tag} variant={"colored"} key={tag}/>
    })

    return <figure {...resrProps} className={className}>
        <Tag title={title} variant={"monochrome-primary"} className={s.title}/>

        <picture>
            <source srcSet={`${img.webp1x} 1x, ${img.webp2x} 2x, ${img.webp3x} 3x`} type={'image/webp'}/>
            <source srcSet={`${img.png1x} 1x, ${img.png2x} 2x, ${img.png3x} 3x`}/>
            <img src={img.png1x} alt={caption}/>
        </picture>
        <div className={s.tagList}>
            {tagsList}
        </div>
        <figcaption>{caption}</figcaption>
    </figure>
}