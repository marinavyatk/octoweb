import { ComponentPropsWithoutRef } from "react";
import { Video } from "@/components/video/video";

type SmallBubbleProps = ComponentPropsWithoutRef<"video">;

export const SmallBubble = (props: SmallBubbleProps) => {
  return (
    <Video src="/smallBubble.webm" reserveSrc="/smallBubble.mp4" {...props} />
  );
};
