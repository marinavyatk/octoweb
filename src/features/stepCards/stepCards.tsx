import {StepCard, StepCardProps} from "../../components/ui/stepCard/stepCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from './stepCards.module.scss'

export type StepCardsProps = {
    cards: StepCardProps[]
} & ComponentPropsWithoutRef<'div'>
export const StepCards = (props: StepCardsProps) => {
    const {cards, ...restProps} = props;
    const className = clsx(s.cards, restProps.className)
    const cardsList = cards.map(card => {
        return <StepCard stepNumber={card.stepNumber} title={card.title} description={card.description} key={card.stepNumber}/>
    })
    return <div {...restProps} className={className}>
        {cardsList}
    </div>
}