import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './teamMemberCard.module.scss'


export type TeamMember = {
    workExperience: string,
    name: string,
    specialization: string,
    description: string,
    img: string
}

export type TeamMemberCardProps = TeamMember & ComponentPropsWithoutRef<'div'>

export const TeamMemberCard = (props: TeamMemberCardProps) => {
    const {workExperience, name, specialization, description, img, className, ...restProps} = props;
    const classNames = clsx(s.cardContainer, className)

    return <div {...restProps} className={classNames}>

        <div className={s.frontSide + ' ' + s.card}>
            <img src={img} alt={specialization}/>
            <div className={s.about}>
                <span className={s.name}>{name}</span> <br/>
                <span className={s.specialization}>{specialization}</span>
            </div>
        </div>

        <div className={s.backSide + ' ' + s.card}>
            <div>
                <span className={s.workExperience}>{workExperience}</span> <br/>
                <span className={s.name}>{name}</span> <br/>
                <span className={s.specialization}>{specialization}</span>
            </div>
            <p>{description}</p>
        </div>
    </div>
}