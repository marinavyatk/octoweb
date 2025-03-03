import s from "./advantages.module.scss";
import ArrowPointerSmall from "@/svg/arrow3.svg";
import { clsx } from "clsx";
import { advantageData } from "@/common/componentsData/advantageItems";
import { AdvantageItem } from "@/components/layouts/advantageItem/advantageItem";
import { ComponentPropsWithoutRef } from "react";

type AdvantageSectionProps = ComponentPropsWithoutRef<"div">;

export const Advantages = (props: AdvantageSectionProps) => {
  const { className, ...restProps } = props;
  const classNames = clsx(s.advantages, className);

  const advantagesItems = advantageData.map((item) => {
    return (
      <AdvantageItem
        number={item.number}
        description={item.description}
        key={item.number}
      />
    );
  });

  return (
    <section className={classNames} {...restProps}>
      <div className={s.title}>
        <h2>
          <span>РАБОТАТЬ С НАМИ </span>
          <br />
          ЛЕГКО, ПРИЯТНО И ВЫГОДНО!
        </h2>
        <ArrowPointerSmall className={s.arrow} />
      </div>
      <div className={s.advantagesItems}>{advantagesItems}</div>
    </section>
  );
};
