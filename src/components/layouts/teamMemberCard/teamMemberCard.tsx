import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./teamMemberCard.module.scss";
import { Picture } from "@/components/ui/picture/picture";

export type TeamMember = {
  workExperience: string;
  name: string;
  specialization: string;
  description: string;
  img: string;
};

export type TeamMemberCardProps = TeamMember & ComponentPropsWithoutRef<"div">;

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  const {
    workExperience,
    name,
    specialization,
    description,
    img,
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.cardContainer, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.frontSide + " " + s.card}>
        <Picture src={img} alt={specialization} width={536} height={536} containerProps={{className: s.imgContainer}}/>
        <div className={s.about}>
          <h3 className={s.name}>{name}</h3>
          <span className={s.specialization}>{specialization}</span>
        </div>
      </div>

      <div className={s.backSide + " " + s.card}>
        <div>
          <span className={s.workExperience}>{workExperience}</span>
          <h3 className={s.name}>{name}</h3>
          <span className={s.specialization}>{specialization}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
