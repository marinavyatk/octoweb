import { RefObject, useEffect, useState } from "react";

export const useCheckVideoSupport = (videoRef: RefObject<HTMLVideoElement>) => {
  console.log('check');
  const [checkPassed, setCheckPassed] = useState(false);
  const [showFallback, setShowFallback] = useState(false);



  useEffect(() => {
    console.log('useEffect');
    const checkTransparency = async () => {
      const video = videoRef.current;
      if (!video) {
        console.log('no video');
        setCheckPassed(true);
        return;
      }

      const canPlayTransparentWebM = video.canPlayType("video/webm; codecs=\"vp9\"");
      console.log('canPlayTransparentWebM', canPlayTransparentWebM);
      if (!canPlayTransparentWebM) {
        console.log('no canPlayTransparentWebM');
        setShowFallback(true);
        return;
      }

      // await new Promise((resolve, reject) => {
      //   video.onloadeddata = resolve;
      //   video.onerror = reject;
      // });

      // await new Promise((resolve, reject) => {
      //   video.onloadeddata = () => {
      //     console.log("Video loaded");
      //     resolve(null);
      //   };
      //   video.onerror = (error) => {
      //     console.error("Error loading video:", error);
      //     reject(error);
      //   };
      // });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const ctx = canvas.getContext("2d");
      console.log('ctx', ctx);
      if (!ctx) {
        console.log('no ctx');
        setShowFallback(true);
        return;
      }
      ctx.drawImage(video, 0, 0);
      const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const hasTransparency = Array.from(data).some((_, i) => i % 4 === 3 && data[i] < 255);
      console.log('hasTransparency', hasTransparency);
      setShowFallback(!hasTransparency);
    };

    if (videoRef.current) {
      console.log('if videoRef.current');
      checkTransparency().catch(() => {
        setShowFallback(true);
      }).finally(() => setCheckPassed(true));
    }
    setCheckPassed(true);
  }, []);

  console.log('showFallback', showFallback);

  return { checkPassed, showFallback };
};