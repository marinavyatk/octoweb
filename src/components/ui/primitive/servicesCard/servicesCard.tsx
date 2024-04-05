import {ComponentPropsWithoutRef} from 'react';
import {clsx} from 'clsx';
import s from './servicesCard.module.scss'
import {Tag} from '../tag/tag.tsx';

export type ServicesCardProps = {
    number: string,
    title: string,
    tags: string[],
    size: 'small' | 'medium',
} & ComponentPropsWithoutRef<'div'>

export const ServicesCard = (props: ServicesCardProps) => {
    const {number, title, tags, size = 'small', ...restProps} = props;
    const className = clsx(s.card, restProps.className,
        {
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
        })
    const tagList = tags.map(tag => {
        return <Tag title={tag} variant={'monochrome-secondary'} key={tag}/>
    })

    return <div {...restProps} className={className}>
        <div className={s.texture}>
        </div>
            <div className={s.text}>
                <span className={s.number}>{number}</span> <br/>
                <span className={s.title}>{title}</span>
            </div>
            <div className={s.tagList}>
                {tagList}
            </div>

    </div>
}