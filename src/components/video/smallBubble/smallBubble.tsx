"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "../video.module.scss";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";
import { useCheckVideoSupport } from "@/common/customHooks/useCheckVideoSupport";

type SmallBubbleProps = ComponentPropsWithoutRef<"video">

export const SmallBubble = (props: SmallBubbleProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { checkPassed, showFallback } = useCheckVideoSupport(videoRef);
  const { className, ...restProps } = props;
  const isVisible = useIntersectionObserver(videoRef, 0.01);
  const classNames = clsx(s.video, className, !checkPassed && s.hidden);

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
    return (
      <Animation className={classNames} />
    );
  }

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

type AnimationProps = ComponentPropsWithoutRef<"div">
const Animation = (props: AnimationProps) => {
  const animationRefSB = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(animationRefSB, 0.01);
  console.log('isVisible', isVisible);

  return <div
    {...props}
    className={clsx(s.imgContainer, props.className)}
    ref={animationRefSB}

  >
    {isVisible &&
      <img
        src="/smallBubble.webp"
        alt="Big Bubble Animation"
      />}
  </div>;
};