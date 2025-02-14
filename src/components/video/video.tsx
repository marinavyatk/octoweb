"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { clsx } from "clsx";
import s from "./video.module.scss";
import { useIntersectionObserver } from "@/common/customHooks/useIntersectionObserver";

type VideoProps = {
  src: string;
  reserveSrc?: string;
} & ComponentPropsWithoutRef<"video">

export const Video = (props: VideoProps) => {
  const { src, reserveSrc, className, ...restProps } = props;
  const classNames = clsx(s.video, className);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisible = useIntersectionObserver(videoRef, 0.01);
  const isFirstVisible = useIntersectionObserver(videoRef, 0.01, true);

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
    className={classNames}
    {...restProps}
    ref={videoRef}
    muted
    loop
    playsInline
    aria-hidden="true"
    role="presentation"
    preload={"auto"}
  >
    {isFirstVisible &&
      <>
        <source src={src} type='video/webm; codecs="vp9"' />
        {reserveSrc &&
          <source src={reserveSrc} type="video/mp4" />}
      </>
    }
  </video>;
};
