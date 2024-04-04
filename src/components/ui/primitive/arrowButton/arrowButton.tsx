import {clsx} from "clsx";
import s from './arrowButton.module.scss'
import {ComponentPropsWithoutRef, ElementType} from "react";

import ArrowIcon from '../../../../assets/arrow.svg?react'

export type ArrowButtonProps<T extends ElementType = 'a'> = {
    as?: T
    variant?: "primary" | "secondary" | "violet" | "black",
    size?: "small" | "medium" | "large",
    outline?: "outline-colored" | "outline-monochrome"
} & ComponentPropsWithoutRef<T>
export const ArrowButton = <T extends ElementType>(props: ArrowButtonProps<T>) => {
    const {variant = "primary", size = "small", outline, as: Component = 'a'} = props;
    const className = clsx(s.arrowButton,
        {
            [s.primary]: variant === 'primary',
            [s.secondary]: variant === 'secondary',
            [s.violet]: variant === 'violet',
            [s.black]: variant === 'black',
            [s.small]: size === 'small',
            [s.medium]: size === 'medium',
            [s.big]: size === 'large',
            [s.outlineColored]: outline === 'outline-colored',
            [s.outlineMonochrome]: outline === 'outline-monochrome',

        }
    )


    return <Component className={className}>


        <ArrowIcon/>

    </Component>
}