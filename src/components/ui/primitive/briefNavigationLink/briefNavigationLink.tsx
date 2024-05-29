import clsx from "clsx";
import s from "./briefNavigationLink.module.scss";
import DoneIcon from "../../../../assets/doneIcon.svg?react";
import { Link } from "react-scroll";

export type BriefNavigationLinkProps = {
  text: string;
  completed: boolean;
  sectionId: string;
  className?: string;
};

export const BriefNavigationLink = (props: BriefNavigationLinkProps) => {
  const { text, completed, className, sectionId } = props;
  const classNames = clsx(s.briefNavigationLink, className);

  return (
    <Link
      rel={"nofollow"}
      to={sectionId}
      className={classNames}
      spy={true}
      activeClass={s.active}
      hashSpy={true}
      offset={-150}
    >
      <span>{text}</span>
      <div className={s.indicator}>{completed && <DoneIcon />}</div>
    </Link>
  );
};
