"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
import { clsx } from "clsx";
import s from "../video.module.scss";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

type BigBubbleProps = ComponentPropsWithoutRef<"video">

export const BigBubble = (props: BigBubbleProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, 0.01);

  useEffect(() => {
    if (isVisible) {
      videoRef.current?.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    } else {
      videoRef.current?.pause();
    }

  }, [isVisible]);

  const { className, ...restProps } = props;
  const classNames = clsx(s.video, className);

  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const testVideo = document.createElement("video");
    const canPlayTransparentWebM = testVideo.canPlayType('video/webm; codecs="vp9"');

    if (!canPlayTransparentWebM) {
      setShowFallback(true);
    }
  }, []);


  if (showFallback) {
    return (
      <img
        src="/bigBubble.webp"
        alt="Big Bubble Animation"
        className={classNames}
      />
    );
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