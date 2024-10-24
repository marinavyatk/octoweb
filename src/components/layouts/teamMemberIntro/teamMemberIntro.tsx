import {ComponentPropsWithoutRef} from 'react';
import clsx from 'clsx';
import s from './teamMemberIntro.module.scss';
import Image from 'next/image';

export type TeamMember = {
    id: string;
    workExperience: string;
    name: string;
    specialization: string;
    description: string;
    img: string;
};

export type TeamMemberIntroProps = TeamMember & ComponentPropsWithoutRef<'div'>;

export const TeamMemberIntro = (props: TeamMemberIntroProps) => {
    const {
        workExperience,
        name,
        specialization,
        description,
        img,
        className,
        ...restProps
    } = props;
    const classNames = clsx(s.teamMember, className);

    return (
        <div {...restProps} className={classNames}>
            <div className={s.info}>
                <div>
                    <span className={s.workExperience}>{workExperience}</span>
                    <h3 className={s.name}>{name}</h3>
                    <span className={s.specialization}>{specialization}</span>
                </div>
                <p>{description}</p>
            </div>
            <Image src={'/teamMemberBackground.webp'} alt={''} className={s.background} fill/>
            <div className={s.imgContainer}>
                <Image src={img} alt={name} className={s.memberPhoto} fill/>
            </div>
        </div>
    );
};
