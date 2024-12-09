"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";
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


  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const testVideo = document.createElement("video");
    const canPlayTransparentWebM = testVideo.canPlayType("video/webm; codecs=\"vp9\"");

    if (!canPlayTransparentWebM) {
      setShowFallback(true);
      return;
    }

    const checkTransparency = async () => {
      const video = document.createElement("video");
      video.src = "/smallBubble-1.webm";
      video.crossOrigin = "anonymous"; // Включаем CORS для работы с канвасом
      video.muted = true;

      await new Promise((resolve, reject) => {
        video.onloadeddata = resolve;
        video.onerror = reject;
      });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setShowFallback(true);
        return;
      }

      ctx.drawImage(video, 0, 0);

      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const hasTransparency = Array.from(data).some((_, i) => i % 4 === 3 && data[i] < 255);

      setShowFallback(!hasTransparency);
    };

    checkTransparency().catch(() => setShowFallback(true));
  }, []);


  if (showFallback) {
    return (
      <img
        src="/smallBubble.webp"
        alt="Small Bubble Animation"
        className={classNames}
      />
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