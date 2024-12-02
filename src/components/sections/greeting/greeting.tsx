import s from "./greeting.module.scss";
import ArrowPointerSmall from "@/svg/arrowPointerSmall.svg";
import { GreetingText } from "@/components/layouts/greetingText/greetingText";
import { BriefOffer } from "@/components/layouts/briefOffer/briefOffer";
import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";
import { TextContent } from "@/common/types";

type GreetingProps = { textContent: TextContent } & ComponentPropsWithoutRef<"section">;

export const Greeting = (props: GreetingProps) => {
  const {  textContent, ...restProps } = props;
  const classNames = clsx(s.greetingBlock, props.className);

  return <section {...restProps} className={classNames}>
    <div className={s.textContainer}>
      <GreetingText textContent={textContent} className={s.greetingText} />
      <ArrowPointerSmall className={s.arrow} />
    </div>
    <BriefOffer className={s.briefOffer} />
  </section>;
};