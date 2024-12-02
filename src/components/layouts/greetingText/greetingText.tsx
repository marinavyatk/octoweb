import s from "./greetingText.module.scss";
import { WordSwipe } from "../../ui/wordSwipe/wordSwipe";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { TextContent } from "@/common/types";

export type GreetingTextProps =
  { textContent: TextContent }
  & ComponentPropsWithoutRef<"div">;

export const GreetingText = (props: GreetingTextProps) => {
  const { textContent } = props;
  const classNames = clsx(s.greetingText, props.className);
  return (
    <div className={classNames}>
      <div className={s.firstLine}>{textContent.firstLine}</div>
      <div className={s.secondLine}>
        {textContent.secondLine} <WordSwipe {...textContent.wordSwipeProps} />
      </div>
      <div className={s.thirdLine}>{textContent.thirdLine}</div>
    </div>
  );
};
