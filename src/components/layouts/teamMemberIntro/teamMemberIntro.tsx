import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./teamMemberIntro.module.scss";
import { Picture } from "@/components/ui/picture/picture";

export type TeamMember = {
  experience: string;
  name: string;
  position: string;
  description: string;
  image: string;
};

export type TeamMemberIntroProps = TeamMember & ComponentPropsWithoutRef<"div">;

export const TeamMemberIntro = (props: TeamMemberIntroProps) => {
  const {
    experience,
    name,
    position,
    description,
    image,
    className,
    ...restProps
  } = props;
  const classNames = clsx(s.teamMember, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.info}>
        <div>
          <span className={s.workExperience}>{experience}</span>
          <h3 className={s.name}>{name}</h3>
          <span className={s.specialization}>{position}</span>
        </div>
        <div className={s.description} dangerouslySetInnerHTML={{__html: description}}/>
      </div>
      <div className={s.imgContainer}>
        <Picture src={image} alt={name} fill
                 sizes={"(max-width: 767px) 154px, 370px"}
                 containerProps={{ className: s.imgPositionContainer }}
                 loaderProps={{ className: s.loader }}
        />
      </div>
    </div>
  );
};
