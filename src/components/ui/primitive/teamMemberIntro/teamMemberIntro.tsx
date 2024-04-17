import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './teamMemberIntro.module.scss'
import Background from '../../../../assets/webp/teamMemberBackground.webp'

export type TeamMember = {
    id: string,
    workExperience: string,
    name: string,
    specialization: string,
    description: string,
    img: string
}

export type TeamMemberIntroProps = TeamMember & ComponentPropsWithoutRef<'div'>

export const TeamMemberIntro = (props: TeamMemberIntroProps) => {
    const {workExperience, name, specialization, description, img, className, ...restProps} = props;
    const classNames = clsx(s.teamMember, className)

    return <div {...restProps} className={classNames}>
        <div className={s.info}>
            <div>
                <span className={s.workExperience}>{workExperience}</span>
                <span className={s.name}>{name}</span>
                <span className={s.specialization}>{specialization}</span>
            </div>
            <p>{description}</p>
        </div>
        <img src={Background} alt="" className={s.background}/>
        <img src={img} alt={name} className={s.memberPhoto}/>
    </div>
}