"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "../video.module.scss";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";
// import { useCheckVideoSupport } from "@/common/customHooks/useCheckVideoSupport";

type BigBubbleProps = ComponentPropsWithoutRef<"video">

export const BigBubble = (props: BigBubbleProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, 0.01);
  // const { showFallback } = useCheckVideoSupport(videoRef);
  const showFallback = true;
  const { className, ...restProps } = props;
  // const classNames = clsx(s.video, className, !checkPassed && s.hidden);
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


  if (showFallback) {
    return <Animation className={classNames} />;
  }

  return <video
    src="/bigBubble.webm"
    className={classNames}
    {...restProps}
    muted
    loop
    playsInline
    ref={videoRef}
  />;
};


type AnimationProps = ComponentPropsWithoutRef<"div">
const Animation = (props: AnimationProps) => {
  const animationRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(animationRef, 0.01);

  return <div
    // className={s.imgContainer}
    ref={animationRef}
    {...props}
    className={clsx(s.imgContainer, props.className)}
  >
    {isVisible &&
      <img
        src="/bigBubble.webp"
        alt="Big Bubble Animation"
      />}
  </div>;
};