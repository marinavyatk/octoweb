import { ComponentPropsWithoutRef } from "react";
import { Video } from "@/components/video/video";

type BigBubbleProps = ComponentPropsWithoutRef<"video">;

export const BigBubble = (props: BigBubbleProps) => {
  return <Video src="/bigBubble.webm" reserveSrc="/bigBubble.mp4" {...props} />;
};
