import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from './tag.module.scss'

export type TagProps = {
    title: string
    variant?: 'colored' | 'monochrome-primary' | 'monochrome-secondary'
} & ComponentPropsWithoutRef<'span'>
export const Tag = (props: TagProps) => {
    const {title, variant = 'colored', ...restProps} = props;
    const className = clsx(s.tag,
        {
            [s.color]: variant === 'colored',
            [s.monochromePrimary]: variant === 'monochrome-primary',
            [s.monochromeSecondary]: variant === 'monochrome-secondary',
        },
        restProps.className)
    return <span {...restProps} className={className}>
    {title}
</span>
}