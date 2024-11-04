import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./teamMemberIntro.module.scss";
import Image from "next/image";

export type TeamMember = {
  id: string;
  workExperience: string;
  name: string;
  specialization: string;
  description: string;
  img: string;
};

export type TeamMemberIntroProps = TeamMember & ComponentPropsWithoutRef<"div">;

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
      <Image src={"/teamMemberBackground.webp"} alt={""} className={s.background} fill
             sizes={"100vw"} key='team-member-background'/>
      <div className={s.imgContainer}>
        <div className={s.imgPositionContainer}>
          <Image src={img} alt={name} fill
                 sizes={"(max-width: 767px) 154px, 370px"} />
        </div>
      </div>
    </div>
  );
};
