import { RefObject, useCallback, useEffect, useRef } from "react";

type useCloseArgs = {
  close: () => void;
  elementRef: RefObject<HTMLDivElement>;
  direction: "right" | "left";
  open: boolean;
};

export const useClose = (args: useCloseArgs) => {
  const { close, elementRef, direction, open } = args;
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const outsideClickHandler = useCallback((event: MouseEvent) => {
    if (!elementRef?.current?.contains(event.target as Element)) {
      close();
    }
  }, []);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback(
    (e: TouchEvent) => (touchEnd.current = e.targetTouches[0].clientX),
    [],
  );

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;

    const isSwipe =
      direction === "right"
        ? distance < -minSwipeDistance
        : distance > minSwipeDistance;
    if (isSwipe) {
      close();
    }
  }, []);

  useEffect(() => {
    if (open) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflowY = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`; //need for avoid flickering when open
      document.addEventListener("click", outsideClickHandler);
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
    } else {
      document.body.style.overflowY = "unset";
      document.body.style.paddingRight = "0";
      document.removeEventListener("click", outsideClickHandler);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    }
  }, [open]);
};
