import { RefObject, useEffect, useState } from "react";

export const useCheckVideoSupport = (videoRef: RefObject<HTMLVideoElement>) => {
  const [checkPassed, setCheckPassed] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  useEffect(() => {
    const checkTransparency = async () => {
      const video = videoRef.current;
      if (!video) {
        setCheckPassed(true);
        return;
      }

      const canPlayTransparentWebM = video.canPlayType("video/webm; codecs=\"vp9\"");
      if (!canPlayTransparentWebM) {
        setShowFallback(true);
        return;
      }

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

    if (videoRef.current) {
      checkTransparency().catch(() => {
        setShowFallback(true);
      }).finally(() => setCheckPassed(true));
    }
    setCheckPassed(true);
  }, []);

  return { checkPassed, showFallback };
};