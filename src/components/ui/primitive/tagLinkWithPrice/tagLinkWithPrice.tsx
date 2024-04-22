import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './tagLinkWithPrice.module.scss'
import {Tag} from '../tag/tag.tsx';

export type TagLink = {
    tag: string,
    price: string,
    href: string
}
export type TagLinkWithPriceProps = TagLink & ComponentPropsWithoutRef<'a'>
export const TagLinkWithPrice = (props: TagLinkWithPriceProps) => {
    const {tag, price, href, className, ...restProps} = props;
    const classNames = clsx(s.tagLink, className)
    return <div className={classNames}>
        <Tag variant={'monochrome-secondary'}
             as={'a'}
             className={s.tag}
             href={href}
             {...restProps}
        >
            {tag}
        </Tag>
        <span className={s.price}>от {price} руб.</span>
    </div>

}