"use client";

import Lottie from "lottie-react";
import SquidAnimation from "@/lotties/squid.json";

type SquidIcon = { className?: string };

export const SquidIcon = (props: SquidIcon) => {
  return <Lottie {...props} animationData={SquidAnimation} loop autoplay />;
};
