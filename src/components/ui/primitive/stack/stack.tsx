import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './stack.module.scss'
import {Tag} from '../tag/tag.tsx';

export type StackProps = {
    number: string,
    title: string,
    tags: string[]
} & ComponentPropsWithoutRef<'div'>

export const Stack = (props: StackProps) => {
    const {number, title, tags, ...restProps} = props;
    const className = clsx(s.stack, restProps.className)
    const tagList = tags.map(tag => {
        return <Tag title={tag} key={tag} variant={'monochrome-secondary'}/>
    })

    return <div {...restProps} className={className}>
        <div className={s.text}>
            <span className={s.number}>{number}</span>
            <span className={s.title}>{title}</span>
        </div>
        <div className={s.tagList}>
            {tagList}
        </div>
    </div>
}