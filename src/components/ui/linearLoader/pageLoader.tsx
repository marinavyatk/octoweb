"use client";

import { useRouter } from "next/navigation";
import { useEffect, useOptimistic } from "react";
import { LinearLoader } from "@/components/ui/linearLoader/linearLoader";

export function PageLoader() {
  const router = useRouter();
  const [loading, setLoading] = useOptimistic(false);
  useEffect(() => {
    if (router.push.name === "patched") return;
    const push = router.push;
    router.push = function patched(...args) {
      setLoading(true);
      push.apply(history, args);
    };
  }, []);

  return loading && <LinearLoader />;
}
