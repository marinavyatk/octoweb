import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from '../video.module.scss'

type BigBubbleProps = ComponentPropsWithoutRef<"video">

export const BigBubble = (props: BigBubbleProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.video, className);
  return <video
    src='/bigBubble.webm'
    className={classNames}
    {...restProps}
    autoPlay
    muted
    loop
  />;
};