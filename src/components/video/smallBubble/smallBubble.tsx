"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "../video.module.scss";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

type SmallBubbleProps = ComponentPropsWithoutRef<"video">

export const SmallBubble = (props: SmallBubbleProps) => {
  const { className, ...restProps } = props;


  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, 0.01);
  const classNames = clsx(s.video, className);

  useEffect(() => {
    if (isVisible) {
      videoRef.current?.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      videoRef.current?.pause();
    }

  }, [isVisible]);

  return <video
    src="/smallBubble-1.webm"
    className={classNames}
    {...restProps}
    muted
    loop
    playsInline
    ref={videoRef}
  />;
};