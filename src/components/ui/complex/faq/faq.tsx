import {ComponentPropsWithoutRef} from 'react';
import {Question} from '../../primitive/question/question.tsx';


export type FAQProps = & ComponentPropsWithoutRef<'div'>

export const FAQ = (props: FAQProps) => {
    const {...restProps} = props;
    const faqData = [
        {
            question: 'Сколько будет стоить создание интернет-магазина?',
            answer: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            question: 'Сколько времени займет разработка магазина?',
            answer: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        },
        {
            question: 'Как будет выглядеть дизайн моего магазина?',
            answer: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
        }, {
            question: 'Какие условия сотрудничества предусмотрены?',
            answer: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
        },
    ]
    const questions = faqData.map(q => {
        return <Question question={q.question} answer={q.answer} key={q.question}/>
    })

    return <div {...restProps}>
        {questions}
    </div>
}