import {ComponentPropsWithoutRef, useState} from 'react';
import clsx from 'clsx';
import s from './team.module.scss'
import FrontendDev from '../../../../assets/webp/frontendDev.webp'
import Temp from '../../../../assets/webp/temp.png'
import {TeamMemberIntro} from '../teamMemberIntro/teamMemberIntro.tsx';

export type TeamProps = ComponentPropsWithoutRef<'div'>

export const Team = (props: TeamProps) => {
    const [currentMember, setCurrentMember] = useState('Руководитель проекта')
    const {className, ...restProps} = props;
    const classNames = clsx(s.team, className)
    const teamMembers = ['Руководитель проекта', 'Проектировщик', 'Дизайнер', 'Front-end-программист', 'Back-end-программист', 'Тестировщик', 'Контент-менеджер', 'SEO-специалист']
    const teamMembersList = teamMembers.map(member => {
        return <li key={member} className={member === currentMember ? s.active : ''}
                   onClick={() => setCurrentMember(member)}>{member}</li>
    })

    const teamMembersInfo = [
        {id: 'Front-end-программист', workExperience: '4+ года опыта', name: 'Елисеев Николай', specialization: 'Frontend-Гуру', description: 'Николай "HTML-Rockstar" Елисеев, фронтенд-гуру с исключительным талантом.', img: FrontendDev},
        {id: 'Руководитель проекта', workExperience: '???', name: 'Имя Фамилия', specialization: 'Руководитель проекта', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'Проектировщик', workExperience: '???', name: 'Имя Фамилия', specialization: 'Проектировщик', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'Дизайнер', workExperience: '???', name: 'Имя Фамилия', specialization: 'Дизайнер', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'Back-end-программист', workExperience: '???', name: 'Имя Фамилия', specialization: 'Back-end-программист', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'Тестировщик', workExperience: '???', name: 'Имя Фамилия', specialization: 'Тестировщик', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'Контент-менеджер', workExperience: '???', name: 'Имя Фамилия', specialization: 'Контент-менеджер', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
        {id: 'SEO-специалист', workExperience: '???', name: 'Имя Фамилия', specialization: 'SEO-специалист', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus dolore nihil veritatis.', img: Temp},
    ]

    const currentMemberCard = teamMembersInfo.filter(member => member.id === currentMember).map(member => {
        return <TeamMemberIntro id={member.id} workExperience={member.workExperience} name={member.name}
                                specialization={member.specialization} description={member.description}
                                img={member.img} key={member.id}/>
    })

    return <div {...restProps} className={classNames}>
        <div className={s.firstCol}>
            <p>Разработка интернет-магазина — это командная работа, где каждый вносит свой профессиональный вклад для успешной реализации проекта.</p>
            {currentMemberCard}
        </div>
        <div className={s.secondCol}>
            <h2>Над проектом будут работать</h2>
            <ul>
                {teamMembersList}
            </ul>

        </div>
        !
    </div>
}