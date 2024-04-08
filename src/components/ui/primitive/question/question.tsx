import {ComponentPropsWithoutRef, useState} from 'react';
import {clsx} from 'clsx';
import s from './question.module.scss'
import {AccordionButton} from '../accordionButton/accordionButton.tsx';


export type QuestionProps = {
    question: string,
    answer: string,
} & ComponentPropsWithoutRef<'div'>

export const Question = (props: QuestionProps) => {
    const [opened, setOpened] = useState(false)
    const {question, answer, ...restProps} = props;
    const className = clsx(s.questionContainer,
        restProps.className,
        {[s.opened]: opened})

    return <div {...restProps} className={className}>
        <div className={s.accordion}>
            <span className={s.question}>{question}</span>
            <AccordionButton opened={opened} setOpened={setOpened}/>
        </div>
    <p className={s.answer}>{answer}</p>
    </div>
}