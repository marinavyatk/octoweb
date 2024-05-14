import { ComponentPropsWithoutRef } from "react";
import { clsx } from "clsx";
import s from "./wordSwipe.module.scss";

export type WordSwipeProps = ComponentPropsWithoutRef<"div">;

export const WordSwipe = (props: WordSwipeProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.wordSwipe, className);

  return (
    <div {...restProps} className={classNames}>
      <div className={s.inner}>
        <div className={s.firstWord}>
          <span>W</span>
          <span>E</span>
          <span>B</span>
        </div>
        <div className={s.secondWord}>
          <span>S</span>
          <span>E</span>
          <span>O</span>
        </div>
      </div>
    </div>
  );
};
