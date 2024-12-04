import clsx from "clsx";
import s from "./briefNavigationLink.module.scss";
import DoneIcon from "@/svg/doneIcon.svg";
import { Link } from "react-scroll";
import { ReactScrollLinkProps } from "react-scroll/modules/components/Link";

export type BriefNavigationLinkProps = {
  text: string;
  completed: boolean;
  sectionId: string;
  className?: string;
} & Omit<ReactScrollLinkProps, 'to'>;

export const BriefNavigationLink = (props: BriefNavigationLinkProps) => {
  const { text, completed, className, sectionId, ...restProps } = props;
  const classNames = clsx(s.briefNavigationLink, "noRoutingLink", className);

  return (
    <Link
      rel={"nofollow"}
      to={sectionId}
      className={classNames}
      spy={true}
      activeClass={s.active}
      hashSpy={true}
      offset={-150}
      {...restProps}
    >
      <span className={s.text}>{text}</span>
      <div className={s.indicator}>{completed && <DoneIcon />}</div>
    </Link>
  );
};
