import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './servicesCard.module.scss'
import {TagLink, TagLinkWithPrice} from '../tagLinkWithPrice/tagLinkWithPrice.tsx';

export type ServicesCardProps = {
    number: string,
    header: string,
    tags: TagLink[],
    size: 'small' | 'medium',
} & ComponentPropsWithoutRef<'div'>

export const ServicesCard = (props: ServicesCardProps) => {
    const {number, header, tags, size = 'small', className, ...restProps} = props;
    const classNames = clsx(s.card, className,
        {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
        })
    const tagList = tags.map(tag => {
        return <TagLinkWithPrice key={tag.tag}
                                 tag={tag.tag}
                                 price={tag.price}
                                 href={tag.href}
        >
            {tag.tag}
        </TagLinkWithPrice>
    })

    return <div {...restProps} className={classNames}>
        <div className={s.texture}>
        </div>
        <div className={s.text}>
            <span className={s.number}>{number}</span> <br/>
            <span className={s.header}>{header}</span>
        </div>
        <div className={s.tagList}>
            {tagList}
        </div>
    </div>
}