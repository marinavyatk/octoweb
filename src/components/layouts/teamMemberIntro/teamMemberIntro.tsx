import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./teamMemberIntro.module.scss";
import { Picture } from "@/components/ui/picture/picture";

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
        <p className={s.description}>{description}</p>
      </div>
      <div className={s.imgContainer}>
        <Picture src={img} alt={name} fill
                 sizes={"(max-width: 767px) 154px, 370px"}
                 containerProps={{ className: s.imgPositionContainer }}
                 loaderProps={{ className: s.loader }}
        />
      </div>
    </div>
  );
};
