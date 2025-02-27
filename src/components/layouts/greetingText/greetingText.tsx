'use client'

import s from "./greetingText.module.scss";
import { WordSwipe } from "../../ui/wordSwipe/wordSwipe";
import {ComponentPropsWithoutRef, ElementType, useRef} from "react";
import clsx from "clsx";
import { TextContent } from "@/common/types";

export type GreetingTextProps<T extends ElementType> =
  { textContent: TextContent,  firstLine?: T }
  & ComponentPropsWithoutRef<"div">;

export const GreetingText = <T extends ElementType = "h1">(props: GreetingTextProps<T>) => {
  const { firstLine: Component = "h1", textContent } = props;
  const classNames = clsx(s.greetingText, props.className);
  const textRef = useRef<HTMLDivElement>(null)

  return (
    <div className={classNames} ref={textRef}>
      <Component className={s.firstLine}>{textContent.firstLine}</Component>
      <div className={s.secondLine}>
        {textContent.secondLine}
          {textContent.wordSwipeProps.words &&
          <WordSwipe {...textContent.wordSwipeProps} containerRef={textRef}/>
          }
      </div>
      <div className={s.thirdLine}>{textContent.thirdLine}</div>
    </div>
  );
};
