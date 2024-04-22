import {ComponentPropsWithoutRef, ElementType} from 'react';
import {clsx} from 'clsx';
import s from './caseCard.module.scss'
import {Tag} from '../tag/tag.tsx';

export type CaseCardProps<T extends ElementType> = {
    category: string,
    tags: string[],
    img: string,
    size: 'small' | 'medium' | 'large' | 'extraLarge',
    caption: string,
    as?: T
} & ComponentPropsWithoutRef<'a'>

export const CaseCard = <T extends ElementType>(props: CaseCardProps<T>) => {
    const {category, tags, img, size, caption, className, as: HeaderType = 'h2', ...restProps} = props;
    const classNames = clsx(s.card, className,
        {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.large]: size === 'large',
            [s.extraLarge]: size === 'extraLarge',
        })
    const tagList = tags.map(tag => {
        return <Tag variant={'colored'} key={tag}>{tag}</Tag>
    })

    return <a {...restProps} className={classNames}>
        <Tag variant={'monochrome-primary'} className={s.category}>{category}</Tag>
        <img src={img} alt={caption}/>
        <div className={s.tagList}>
            {tagList}
        </div>
        <HeaderType className={s.caption}>{caption}</HeaderType>
    </a>
}