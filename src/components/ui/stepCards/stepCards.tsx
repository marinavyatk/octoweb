import {StepCard} from "../primitive/stepCard/stepCard.tsx";
import {ComponentPropsWithoutRef} from "react";
import clsx from "clsx";
import s from './stepCards.module.scss'

export type StepCardsProps =  ComponentPropsWithoutRef<'div'>

export const StepCards = (props: StepCardsProps) => {
    const { ...restProps} = props;
    const className = clsx(s.cards, restProps.className);
    const cards = [
        {
            stepNumber: '01',
            title: 'Первый контакт',
            description: 'Знакомимся с вами, оцениваем цели и задачи проекта, составляем техническое задание'
        },
        {
            stepNumber: '02',
            title: 'Анализ Вашей ниши',
            description: 'Изучаем конкурентов и ЦА, на основе полученных данных формируем КП'
        },
        {
            stepNumber: '03',
            title: 'Подписание договора',
            description: 'На основе КП и ТЗ мы составляем договор и проводим его подписание'
        },
        {
            stepNumber: '04',
            title: 'Создание прототипа',
            description: 'Разрабатываем прототип будущего сайта с низкой детализацией на основе мудборда'
        },
        {
            stepNumber: '05',
            title: 'Разработка дизайна',
            description: 'Подготавливаем дизайн-проект в Figma, при необходимости вносим правки'
        },
        {
            stepNumber: '06',
            title: 'Верстка и посадка',
            description: 'Верстаем, проводим адаптацию под все разрешения, интегрируем готовую версту в CMS'
        },
        {
            stepNumber: '07',
            title: 'Сдача проекта',
            description: 'Презентуем готовый сайт, вносим финальные правки и подписываем закрывающие документы'
        }
    ];
    const cardsList = cards.map(card => {
        return <StepCard stepNumber={card.stepNumber} title={card.title} description={card.description} key={card.stepNumber}/>
    })

    return <div {...restProps} className={className}>
        {cardsList}
    </div>
}