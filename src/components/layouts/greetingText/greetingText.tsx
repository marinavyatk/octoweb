import s from "./greetingText.module.scss";
import { WordSwipe } from "../../ui/wordSwipe/wordSwipe";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

type GreetingTextProps = ComponentPropsWithoutRef<"div">;
export const GreetingText = (props: GreetingTextProps) => {
  const classNames = clsx(s.greetingText, props.className);
  return (
    <div className={classNames}>
      <div className={s.firstLine}>МЫ РЕВОЛЮЦИОНЕРЫ</div>
      <div className={s.secondLine}>
        В СФЕРЕ <WordSwipe />
      </div>
      <div className={s.thirdLine}>ИЗ КРАСНОДАРА</div>
    </div>
  );
};
