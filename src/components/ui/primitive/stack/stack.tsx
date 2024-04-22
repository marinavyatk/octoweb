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
    const {number, title, tags, className, ...restProps} = props;
    const classNames = clsx(s.stack, className)
    const tagList = tags.map(tag => {
        return <Tag key={tag} variant={'monochrome-secondary'}>{tag}</Tag>
    })

    return <div {...restProps} className={classNames}>
        <div className={s.text}>
            <span className={s.number}>{number}</span>
            <span className={s.title}>{title}</span>
        </div>
        <div className={s.tagList}>
            {tagList}
        </div>
    </div>
}