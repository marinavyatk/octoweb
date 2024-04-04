import {ComponentPropsWithoutRef} from "react";
import {clsx} from "clsx";
import s from './advantageCard.module.scss'

export type AdvantagesCardProps = {
    icon: string,
    title: string,
    paragraph: string
} & ComponentPropsWithoutRef<'div'>
export const AdvantageCard = (props: AdvantagesCardProps) => {
    const {icon, title, paragraph, ...restProps} = props;

    const className = clsx(s.card, restProps.className)
    return <div className={className} {...restProps}>
        <figure>
            <img src={icon}
                 alt={title}/>
            <figcaption>{title}</figcaption>
        </figure>
        <p>{paragraph}</p>
    </div>
}
