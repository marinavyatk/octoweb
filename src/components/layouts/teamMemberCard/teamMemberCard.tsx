import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./teamMemberCard.module.scss";
import { Picture } from "@/components/ui/picture/picture";

export type TeamMember = {
  experience: string;
  name: string;
  position: string;
  description: string;
  imageFull: string;
};

export type TeamMemberCardProps = TeamMember & ComponentPropsWithoutRef<"div">;

export const TeamMemberCard = (props: TeamMemberCardProps) => {
  const {
    experience,
    name,
    position,
    description,
    imageFull: image,
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.cardContainer, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.frontSide + " " + s.card}>
        <Picture src={image} alt={position} fill containerProps={{ className: s.imgContainer }}
                 sizes="(max-width: 767px) 288px, 536px" />
        <div className={s.about}>
          <h3 className={s.name}>{name}</h3>
          <span className={s.specialization}>{position}</span>
        </div>
      </div>
      <div className={s.backSide + " " + s.card}>
        <div>
          <span className={s.workExperience}>{experience}</span>
          <h3 className={s.name}>{name}</h3>
          <span className={s.specialization}>{position}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: description }} className={s.description} />
      </div>
    </div>
  );
};
