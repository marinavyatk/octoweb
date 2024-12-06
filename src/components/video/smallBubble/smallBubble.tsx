import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "../video.module.scss";

type SmallBubbleProps = ComponentPropsWithoutRef<"video">

export const SmallBubble = (props: SmallBubbleProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.video, className);
  return <video
    src="/smallBubble.webm"
    className={classNames}
    {...restProps}
    autoPlay
    muted
    loop
  />;
};