import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from './tag.module.scss'

export type TagProps = {
    title: string
    variant?: 'colored' | 'monochrome-primary' | 'monochrome-secondary'
} & ComponentPropsWithoutRef<'span'>
export const Tag = (props: TagProps) => {
    const {title, variant = 'colored', className, ...restProps} = props;
    const classNames = clsx(s.tag,
        {
            [s.color]: variant === 'colored',
            [s.monochromePrimary]: variant === 'monochrome-primary',
            [s.monochromeSecondary]: variant === 'monochrome-secondary',
        },
        className)
    return <span {...restProps} className={classNames}>
    {title}
</span>
}