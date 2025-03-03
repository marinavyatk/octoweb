import s from "./greeting.module.scss";
import ArrowPointerSmall from "@/svg/arrowPointerSmall.svg";
import {
  GreetingText,
  GreetingTextProps,
} from "@/components/layouts/greetingText/greetingText";
import { BriefOffer } from "@/components/layouts/briefOffer/briefOffer";
import { ComponentPropsWithoutRef, ElementType } from "react";
import clsx from "clsx";

type GreetingProps<T extends ElementType> = {
  greetingTextProps: GreetingTextProps<T>;
} & ComponentPropsWithoutRef<"section">;

export const Greeting = <T extends ElementType>(props: GreetingProps<T>) => {
  const { greetingTextProps, ...restProps } = props;
  const classNames = clsx(s.greetingBlock, props.className);

  return (
    <section {...restProps} className={classNames}>
      <div className={s.textContainer}>
        <GreetingText className={s.greetingText} {...greetingTextProps} />
        <ArrowPointerSmall className={s.arrow} />
      </div>
      <BriefOffer className={s.briefOffer} />
    </section>
  );
};
