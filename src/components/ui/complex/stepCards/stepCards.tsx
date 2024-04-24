// import {StepCard} from "../../primitive/stepCard/stepCard.tsx";
// import {ComponentPropsWithoutRef} from "react";
// import clsx from "clsx";
// import s from './stepCards.module.scss'
//
// export type StepCardsProps =  ComponentPropsWithoutRef<'div'>
//
// export const StepCards = (props: StepCardsProps) => {
//     const { ...restProps} = props;
//     const className = clsx(s.cards, restProps.className);
//     const cards = [
//         {
//             stepNumber: '01',
//             title: 'Первый контакт',
//             description: 'Знакомимся с вами, оцениваем цели и задачи проекта, составляем техническое задание'
//         },
//         {
//             stepNumber: '02',
//             title: 'Анализ Вашей ниши',
//             description: 'Изучаем конкурентов и ЦА, на основе полученных данных формируем КП'
//         },
//         {
//             stepNumber: '03',
//             title: 'Подписание договора',
//             description: 'На основе КП и ТЗ мы составляем договор и проводим его подписание'
//         },
//         {
//             stepNumber: '04',
//             title: 'Создание прототипа',
//             description: 'Разрабатываем прототип будущего сайта с низкой детализацией на основе мудборда'
//         },
//         {
//             stepNumber: '05',
//             title: 'Разработка дизайна',
//             description: 'Подготавливаем дизайн-проект в Figma, при необходимости вносим правки'
//         },
//         {
//             stepNumber: '06',
//             title: 'Верстка и посадка',
//             description: 'Верстаем, проводим адаптацию под все разрешения, интегрируем готовую версту в CMS'
//         },
//         {
//             stepNumber: '07',
//             title: 'Сдача проекта',
//             description: 'Презентуем готовый сайт, вносим финальные правки и подписываем закрывающие документы'
//         }
//     ];
//     const cardsList = cards.map(card => {
//         return <StepCard stepNumber={card.stepNumber} title={card.title} description={card.description} key={card.stepNumber}/>
//     })
//
//
//
//
//     return <div {...restProps} className={className}>
//         {cardsList}
//     </div>
// }


import React, {useRef, useState} from 'react';
import {StepCard} from '../../primitive/stepCard/stepCard.tsx';
import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './stepCards.module.scss';

export type StepCardsProps = ComponentPropsWithoutRef<'div'>;

export const StepCards = (props: StepCardsProps) => {
    const {className, ...restProps} = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState<number | null>(null);
    const [scrollLeft, setScrollLeft] = useState<number | null>(null);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(event.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging || !startX || scrollLeft === null) return;
        const x = event.pageX - containerRef.current!.offsetLeft;
        const walk = (x - startX) * 1.5;
        containerRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    React.useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    const classNames = clsx(s.cards, className);
    const cards = [
        {
            stepNumber: '01',
            title: 'Первый контакт',
            description: 'Знакомимся с вами, оцениваем цели и задачи проекта, составляем техническое задание',
        },
        {
            stepNumber: '02',
            title: 'Анализ Вашей ниши',
            description: 'Изучаем конкурентов и ЦА, на основе полученных данных формируем КП',
        },
        {
            stepNumber: '03',
            title: 'Подписание договора',
            description: 'На основе КП и ТЗ мы составляем договор и проводим его подписание',
        },
        {
            stepNumber: '04',
            title: 'Создание прототипа',
            description: 'Разрабатываем прототип будущего сайта с низкой детализацией на основе мудборда',
        },
        {
            stepNumber: '05',
            title: 'Разработка дизайна',
            description: 'Подготавливаем дизайн-проект в Figma, при необходимости вносим правки',
        },
        {
            stepNumber: '06',
            title: 'Верстка и посадка',
            description: 'Верстаем, проводим адаптацию под все разрешения, интегрируем готовую версту в CMS',
        },
        {
            stepNumber: '07',
            title: 'Сдача проекта',
            description: 'Презентуем готовый сайт, вносим финальные правки и подписываем закрывающие документы',
        },
    ];

    const cardsList = cards.map((card) => {
        return <StepCard stepNumber={card.stepNumber}
                         title={card.title}
                         description={card.description}
                         key={card.stepNumber}
                         className={s.card}
        />;
    });

    return (
        <div
            {...restProps}
            className={classNames}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {cardsList}
        </div>
    );
};
