import {ComponentPropsWithoutRef} from "react";
import s from "./stepCard.module.scss"
import {clsx} from "clsx";

export type StepCardProps = {
    stepNumber: string,
    title: string,
    description: string
} & ComponentPropsWithoutRef<'div'>

export const StepCard = (props: StepCardProps) => {
    const {stepNumber, title, description, ...restProps} = props;
    const className = clsx(s.card, restProps.className)

    return <div {...restProps} className={className}>
        <div className={s.cardHeader}>
            <span className={s.stepNumber}>{stepNumber}</span>
            <span className={s.title}>{title}</span>
        </div>
        <p>{description}</p>
    </div>
}
