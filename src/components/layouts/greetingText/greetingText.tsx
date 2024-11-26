import s from "./greetingText.module.scss";
import { WordSwipe, WordSwipeProps } from "../../ui/wordSwipe/wordSwipe";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

export type Content = {
  firstLine: string,
  secondLine: string,
  thirdLine: string,
  wordSwipeProps: WordSwipeProps
}

export type GreetingTextProps =
  { textContent: Content }
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
