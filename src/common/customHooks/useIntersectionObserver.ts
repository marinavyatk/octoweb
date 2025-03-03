import { RefObject, useEffect, useState } from "react";

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  threshold: number,
  once = false,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (once) {
              observer.disconnect();
            }
          } else {
            setIsIntersecting(false);
          }
        });
      },
      { threshold },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return isIntersecting;
};
