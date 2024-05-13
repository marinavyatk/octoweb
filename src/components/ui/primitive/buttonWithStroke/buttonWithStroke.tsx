import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import s from "./buttonWithStroke.module.scss";
import Stroke from "../../../../assets/stroke.svg?react";
import { Link } from "react-router-dom";
import { routes } from "../../../../common/routes.ts";
import ArrowIcon from "../../../../assets/arrow.svg?react";

export type ButtonWithStrokeProps = {
  variant?: "primary" | "secondary";
} & ComponentPropsWithoutRef<"div">;

export const ButtonWithStroke = (props: ButtonWithStrokeProps) => {
  const { variant = "primary", className, ...restProps } = props;
  const classNames = clsx(s.buttonContainer, className);
  const classNamesForArrow = clsx(s.arrowLink, {
    [s.primary]: variant === "primary",
    [s.secondary]: variant === "secondary",
  });
  return (
    <div {...restProps} className={classNames}>
      <Stroke className={s.stroke} />
      <Link to={routes.brief} className={classNamesForArrow} rel={"nofollow"}>
        <ArrowIcon />
      </Link>
    </div>
  );
};
